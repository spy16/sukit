export async function load({ locals }) {
    const session = await locals.getSession()
    return {
        title: "Account",
        summary: "Manage your account here.",
        session,
    }
}
