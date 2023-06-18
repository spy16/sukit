<script lang="ts">
	import { navigating } from '$app/stores';

	export let visible = true;

	$: animate = visible && $navigating;
</script>

<div class={'sticky top-0 z-50 w-full h-[4px] bg-white ' + (animate ? 'animated-gradient' : '')} />

<style>
	.animated-gradient {
		background: repeating-linear-gradient(to right, blue 0%, #e80b0b 50%, rgb(4, 145, 103) 100%);
		width: 100%;
		background-size: 200% auto;
		background-position: 0 100%;
		animation: gradient 2s infinite;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
	}

	@keyframes gradient {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
