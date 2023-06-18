<script lang="ts">
	import Icon from '@iconify/svelte';

	import type { User } from '../types';
	import BaseHeader from '../BaseHeader.svelte';

	export let user: User;

	$: avatarUrl = user.picture || 'https://gravatar.com/avatar';
</script>

<BaseHeader showLoader showSidebar fullWidth>
	<div class="dropdown dropdown-end">
		<button tabIndex={0} class="cursor-pointer flex flex-row gap-2 items-center">
			<div class="avatar">
				<div class="w-12 rounded-full border-2">
					<img src={avatarUrl} alt="user avatar" />
				</div>
			</div>
		</button>

		<div tabIndex={0} class="dropdown-content bg-base-100 border rounded-lg w-64 p-2 shadow mt-4">
			<div class="flex flex-col gap-2 text-xl">
				<a
					href="/account"
					class="p-2 flex flex-row items-center gap-2 rounded-lg hover:bg-base-200/70 text-primary"
				>
					<Icon icon="mdi:account-cog" />
					Account
				</a>
				<a
					href="/auth/logout"
					class="p-2 flex flex-row items-center gap-2 rounded-lg hover:bg-base-200/70 text-red-800"
				>
					<Icon icon="material-symbols:logout" />
					Logout
				</a>
			</div>
		</div>
	</div>
</BaseHeader>
