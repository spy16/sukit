<script lang="ts">
	import type { LayoutServerData } from '../$types';
	import Footer from '$lib/components/site/Footer.svelte';
	import BaseHeader from '$lib/components/BaseHeader.svelte';

	export let data: LayoutServerData;

	const defaultAvatar = 'https://gravatar.com/avatar';
	const links = [
		{
			href: '/#features',
			label: 'Features'
		},
		{
			href: '/#pricing',
			label: 'Pricing'
		},
		{
			href: '/#faq',
			label: 'FAQ'
		}
	];

	$: user = data.session?.user;
</script>

<div class="flex flex-col w-full h-full min-h-screen gap-6">
	<BaseHeader sticky>
		<!-- links -->
		<nav class="flex flex-row items-center gap-4 md:gap-12">
			{#each links as link}
				<a href={link.href}>{link.label}</a>
			{/each}

			{#if user}
				<a href="/dashboard" class="avatar">
					<div class="w-12 rounded-full">
						<img src={user.user_metadata.avatar_url || defaultAvatar} alt="user profile avatar" />
					</div>
				</a>
			{:else}
				<a href="/auth" class="btn btn-primary">Get Started</a>
			{/if}
		</nav>
	</BaseHeader>

	<main class="flex flex-col w-full h-full flex-1 px-6 max-w-screen-xl mx-auto scroll-smooth">
		<slot />
	</main>

	<Footer />
</div>
