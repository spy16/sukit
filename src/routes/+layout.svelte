<script lang="ts">
	import '../app.postcss';
</script>

<svelte:head>
	<title>SuKit</title>
	<meta name="description" content="An experiment with SvelteKit" />
</svelte:head>

<div class="h-full flex flex-col flex-grow" data-theme="cupcake">
	<slot />
</div>
