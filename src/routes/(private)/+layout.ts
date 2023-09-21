export const prerender = false;

export async function load({ depends, data }) {
    depends("supabase:auth")
    return { ...data }
}
