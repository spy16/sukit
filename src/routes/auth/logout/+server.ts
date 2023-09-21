import { redirect } from '@sveltejs/kit'

export async function GET({ locals }) {
    await locals.supabase.auth.signOut()
    throw redirect(303, "/")
}
