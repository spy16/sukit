<script lang="ts">
	import type { User } from '../types';
	import Navbar from './Navbar.svelte';

	const sidebarElemId = 'leftSidebar';

	export let user: User;
</script>

{#if $$slots.sidebar}
	<div class="flex flex-col w-full h-screen overflow-hidden">
		<Navbar {user} />

		<div class="drawer lg:drawer-open">
			<input id={sidebarElemId} type="checkbox" class="drawer-toggle" />

			<div
				class="drawer-content flex flex-col items-center justify-center h-[92vh] overflow-y-scroll"
			>
				<!-- content div -->
				<div class="flex flex-col flex-grow gap-2 w-full h-full p-4">
					<div class="w-full max-w-screen-xl mx-auto">
						<slot />
					</div>
				</div>
			</div>

			<div class="drawer-side z-50">
				<label for={sidebarElemId} class="drawer-overlay" />
				<div class="menu p-4 w-72 h-full text-base-content border-r bg-white">
					<slot name="sidebar" />
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="w-full h-full flex flex-col flex-grow">
		<Navbar {user} />
		<div class="w-full h-full overflow-y-auto p-2 px-4 lg:p-4">
			<slot />
		</div>
	</div>
{/if}
