<script lang="ts">
	export let data;
	$: ({ user } = data);
</script>

<div>
	<h1>Account</h1>
	<p>
		Logged in as {user.email}
	</p>
</div>
