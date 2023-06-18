import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals }) => {
    await locals.supabase.auth.signOut()

    throw redirect(303, "/")
};
