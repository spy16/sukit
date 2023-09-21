import { env } from '$env/dynamic/private'

export async function load({ locals, cookies }) {
    const session = await locals.getSession()

    const theme = cookies.get("sukit_theme") || "light"

    return {
        theme,
        session,
        supabaseUrl: env.SUPABASE_URL,
        supabaseKey: env.SUPABASE_ANON_KEY,
    }
}
