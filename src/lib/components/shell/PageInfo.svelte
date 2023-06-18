<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon = '';
	export let title: string;
	export let summary: string;
</script>

<div class="flex flex-col gap-2 mb-2">
	<div class="flex flex-row items-center gap-2">
		{#if icon}
			<Icon {icon} />
		{/if}
		<h1 class="text-2xl">{title}</h1>
	</div>

	{#if summary}
		<p>{summary}</p>
	{/if}
</div>
