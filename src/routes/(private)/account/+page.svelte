<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: user = data.session?.user;
</script>

<h1>Account</h1>

<p>
	Logged in as {user?.email}
</p>
