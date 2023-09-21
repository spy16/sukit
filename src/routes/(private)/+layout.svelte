<script lang="ts">
	import Shell from '$lib/components/shell/Shell.svelte';

	export let data;
	$: ({ user } = data);
</script>

<Shell {user}>
	<slot />
</Shell>
