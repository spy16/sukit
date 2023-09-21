<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { Toaster } from 'svelte-french-toast';

	import '../app.postcss';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
	$: ({ supabase, session, theme } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<Meta />

<div class="h-full flex flex-col flex-grow" data-theme={theme}>
	<slot />
</div>

<Toaster
	position="top-center"
	toastOptions={{
		duration: 3000
	}}
/>
