<script lang="ts">
	import { enhance } from '$app/forms';
	import { withLoading } from '$lib/utils';
	import OAuthButton from './OAuthButton.svelte';

	export let data;
	$: ({ providers } = data);

	let busy = false;
</script>

<div class="w-full min-h-[100dvh] grid place-items-center md:bg-base-200">
	<div
		class="flex flex-col items-center w-full md:max-w-lg gap-4 bg-base-100 p-4 md:p-6 md:border md:rounded-lg md:shadow-md"
	>
		<h1 class="text-2xl font-bold">Login / SignUp</h1>

		<form
			class="w-full flex flex-col items-center gap-2"
			method="post"
			action="/auth/?/magicLogin"
			use:enhance={withLoading({
				successMsg: 'Please check your inbox for the magic link.',
				callback: (reuslt) => (busy = !reuslt)
			})}
		>
			<p>
				Enter your email id to receive a magic link in your inbox. Just click the link to login.
			</p>
			<div class="w-full flex flex-row gap-1">
				<input
					name="email"
					class="w-full input input-bordered"
					required
					disabled={busy}
					placeholder="Enter your email address here"
				/>
				<button disabled={busy} class="btn btn-primary">
					{#if !busy}
						<span>Sign up</span>
					{:else}
						<span class="loading loading-spinner loading-sm"></span>
					{/if}
				</button>
			</div>
		</form>

		{#if providers.length > 0}
			<div class="divider">OR</div>

			<form
				use:enhance
				method="post"
				action="/auth/?/oauthLogin"
				class="w-full flex flex-col items-center gap-3"
			>
				<p>You can login with your existing account from one of these providers.</p>
				{#each providers as provider}
					<OAuthButton {busy} {provider} />
				{/each}
			</form>
		{/if}
	</div>
</div>
