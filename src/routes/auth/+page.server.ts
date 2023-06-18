import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.getSession()
    if (session) {
        await locals.supabase.auth.signOut()
    }
    return {}
};
