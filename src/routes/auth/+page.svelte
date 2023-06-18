<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ supabase } = data);

	let email: string = '';
	let emailSent = false;
	const handleMagicLink = async () => {
		await supabase.auth
			.signInWithOtp({
				email: email
			})
			.then((res) => (emailSent = true));
	};

	const handleGoogleSignIn = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${location.origin}/auth/cb`
			}
		});
	};
</script>

<svelte:head>
	<title>SuKit - Login</title>
</svelte:head>

<div class="w-full min-h-[100dvh] grid place-items-center">
	<div class="flex flex-col w-full max-w-lg gap-3 border rounded-lg shadow-md p-6">
		<form class="flex flex-row items-center gap-2" on:submit|preventDefault={handleMagicLink}>
			<input
				name="email"
				class="w-full input input-bordered"
				required
				bind:value={email}
				placeholder="Enter your email address here"
			/>
			<button class="btn btn-primary">Sign up</button>
		</form>

		<div class="divider">OR</div>

		<button class="btn btn-primary" on:click={handleGoogleSignIn}>Google SignIn</button>
	</div>
</div>
