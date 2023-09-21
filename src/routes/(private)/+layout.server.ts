import { redirect } from "@sveltejs/kit";

export async function load({ locals, depends }) {
    depends("supabase:auth")

    const session = await locals.getSession()
    if (!session) throw redirect(303, "/auth")
    return { user: session.user, session }
}
