<script>
	import Features from '$lib/components/site/Features.svelte';
	import Hero from '$lib/components/site/Hero.svelte';
	import Pricing from '$lib/components/site/Pricing.svelte';
</script>

<svelte:head>
	<title>SuKit</title>
	<meta name="description" content="A Supabase + SvelteKit stack template." />
</svelte:head>

<div class="flex flex-col">
	<section id="hero">
		<Hero />
	</section>

	<section id="features">
		<Features />
	</section>

	<section id="pricing">
		<Pricing />
	</section>

	<section id="faq">
		<!-- TODO: add FAQs here -->
	</section>
</div>
