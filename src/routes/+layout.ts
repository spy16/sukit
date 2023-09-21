import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export async function load({ data, depends }) {
    depends('supabase:auth')

    const supabase = createSupabaseLoadClient({
        supabaseUrl: data.supabaseUrl,
        supabaseKey: data.supabaseKey,
        event: { fetch },
        serverSession: data.session,
    })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    return { theme: data.theme, supabase, session }
}
