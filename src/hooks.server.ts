import { redirect, type Handle, error } from "@sveltejs/kit";
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'

import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
} from '$env/static/public'
import { ADMIN_EMAIL } from "$env/static/private"

const adminRoutePrefix = "/(private)/admin"
const privateRoutePrefix = "/(private)"

export const handle: Handle = async ({ event, resolve }) => {
    if (event.route.id === null) {
        throw error(404, "What are you looking for?")
    }

    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event,
    })

    event.locals.getSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()
        return session
    }

    if (event.route.id.startsWith(privateRoutePrefix)) {
        const session = await event.locals.getSession()
        if (!session) {
            // the user is not signed in
            throw redirect(307, '/auth')
        } else if (event.route.id.startsWith(adminRoutePrefix)) {
            const isAdmin = session.user.email === ADMIN_EMAIL
            if (!isAdmin) throw redirect(307, '/auth')
        }
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}

(async () => {
    // do startup tasks here.
})().catch(reason => {
    console.error("startup failed: ", reason)
})
