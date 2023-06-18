<script lang="ts">
	import { onMount } from 'svelte';
	import { goto, invalidate } from '$app/navigation';

	import type { LayoutData } from './$types';
	import Shell from '$lib/components/shell/Shell.svelte';

	export let data: LayoutData;
	$: ({ supabase, session } = data);

	let loading = true;
	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (!_session) goto('/auth');
			else if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			} else loading = false;
		});

		return () => subscription.unsubscribe();
	});
</script>

{#if !loading}
	<Shell user={{ picture: 'https://gravatar.com/avatar' }}>
		<div slot="sidebar" />

		<!-- page content -->
		<slot />
	</Shell>
{/if}
