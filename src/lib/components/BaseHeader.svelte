<script lang="ts">
	import Icon from '@iconify/svelte';

	import Logo from './Logo.svelte';
	import Loader from './shell/Loader.svelte';

	export let sticky = false;
	export let showLoader = false;
	export let showSidebar = false;
	export let fullWidth = false;
</script>

<header
	class="w-full flex flex-col top-0 z-30 border-b backdrop-blur-md bg-white justify-center"
	class:sticky
>
	<Loader visible={showLoader} />

	<div
		class={'flex flex-row items-center justify-between px-4 w-full ' +
			(fullWidth ? '' : 'max-w-screen-xl mx-auto')}
	>
		<div class="flex flex-row items-center flex-1 gap-2">
			<Logo />

			{#if showSidebar}
				<div class="flex-none lg:hidden">
					<label for="leftSidebar" class="btn btn-square btn-ghost p-2">
						<Icon icon="material-symbols:menu" class="w-full h-full" />
					</label>
				</div>
			{/if}
		</div>

		<div class="flex-none p-1">
			<slot />
		</div>
	</div>
</header>
