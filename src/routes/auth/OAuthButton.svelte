<script lang="ts">
	export let busy = false;
	export let provider: string;
</script>

<button
	type="submit"
	name="provider"
	value={provider}
	class="w-full h-full grid place-items-center"
	disabled={busy}
>
	{#if provider === 'google'}
		<div
			class="px-4 py-2 w-full border flex justify-center gap-2 rounded-lg hover:bg-base-100 hover:shadow transition duration-150"
		>
			<img
				class="w-6 h-6"
				src="https://www.svgrepo.com/show/475656/google-color.svg"
				loading="lazy"
				alt="google logo"
			/>
			<span>Login with Google</span>
		</div>
	{:else}
		<h1
			class="px-4 py-2 w-full border flex justify-center gap-2 rounded-lg hover:bg-base-100 hover:shadow transition duration-150 capitalize"
		>
			Login with {provider}
		</h1>
	{/if}
</button>
