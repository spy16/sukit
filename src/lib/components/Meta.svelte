<script lang="ts">
	import {
		APP_BASE_URL,
		APP_NAME,
		APP_SUMMARY,
		LANDING_PAGE,
		TWITTER_HANDLE
	} from '$lib/constants';

	export let data: {
		title?: string;
		summary?: string;
	} = {};

	$: title = (data.title ? `${data.title} | ` : '') + APP_NAME;
	$: description = data.summary || APP_SUMMARY;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="follow, index" />

	<!-- SEO meta tags -->
	<meta name="og:type" content="website" />
	<meta name="og:url" content={LANDING_PAGE} />
	<meta name="og:title" content={title} />
	<meta name="og:image" content={`${APP_BASE_URL}/logo.png`} />
	<meta name="og:description" content={description} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:url" content={LANDING_PAGE} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${APP_BASE_URL}/logo.png`} />
	<meta name="twitter:creator" content={TWITTER_HANDLE} />
</svelte:head>
