<script lang="ts">
	import Header from './Header.svelte';
	import type { User } from '@supabase/supabase-js';

	const sidebarElemId = 'leftSidebar';

	export let user: User;
</script>

<div class="flex flex-col w-full h-screen overflow-hidden">
	{#if $$slots.sidebar}
		<Header showLoader showSidebar fullWidth {user}>
			<svelte:fragment slot="lead">
				<slot name="headerLead" />
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<slot name="headerTrail" />
			</svelte:fragment>
		</Header>

		<div class="drawer lg:drawer-open">
			<input id={sidebarElemId} type="checkbox" class="drawer-toggle" />

			<div
				class="drawer-content flex flex-col items-center justify-center h-[92vh] overflow-y-scroll"
			>
				<!-- content div -->
				<div class="flex flex-col flex-grow gap-2 w-full h-full p-4">
					<div class="w-full flex flex-col gap-2 max-w-screen-xl mx-auto">
						<slot />
					</div>
				</div>
			</div>

			<div class="drawer-side z-50">
				<label for={sidebarElemId} class="drawer-overlay" />
				<div class="menu p-0 w-72 h-full text-base-content border-r bg-base-300">
					<slot name="sidebar" />
				</div>
			</div>
		</div>
	{:else}
		<Header showLoader fullWidth {user} />
		<div class="w-full h-full overflow-y-auto p-2 px-4 lg:p-4">
			<slot />
		</div>
	{/if}
</div>
