import { applyAction } from "$app/forms";
import type { User } from "@supabase/supabase-js";
import type { ActionResult, SubmitFunction } from "@sveltejs/kit";
import { toast } from "svelte-french-toast"

export const getAvatar = (user: User) => {
    if (user.user_metadata.avatar_url) return user.user_metadata.avatar_url;
    if (user.user_metadata.avatar) return user.user_metadata.avatar;
    return 'https://ui-avatars.com/api/?name=' + user.email;
};
export interface withLoadingOptions {
    waitMsg?: string;
    successMsg?: string;
    failureMsg?: string;
    callback: (result?: ActionResult) => void,
}

// withLoading returns a SvelteKit submit function that displays a toast
// while the form submission is being processed.
export const withLoading = ({
    waitMsg = "Please wait...",
    successMsg = "Done",
    failureMsg = "Something went wrong",
    callback,
}: withLoadingOptions): SubmitFunction => {
    return () => {
        if (callback) callback()

        const tid = toast.loading(waitMsg, { duration: 60000 });
        return ({ result }) => {
            setTimeout(() => toast.dismiss(tid), 5000);

            switch (result.type) {
                case 'success':
                case 'redirect': {
                    toast.success(successMsg, { id: tid });
                    break
                }

                case 'failure': {
                    const msg = result.data?.message || failureMsg
                    toast.error(msg, { id: tid });
                    break;
                }

                case 'error': {
                    toast.error(failureMsg, { id: tid });
                    break
                }
            }

            if (callback) callback(result)
            return applyAction(result);
        };
    };
}
