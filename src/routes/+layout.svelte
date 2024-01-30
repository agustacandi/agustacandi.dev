<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	let loader = true;

	onMount(() => {
		setTimeout(() => {
			loader = false;
		}, 1000);
	});
</script>

{#if loader}
	<main class="h-screen grid place-items-center">
		<div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-black"></div>
	</main>
{:else}
	<main class="lg:w-[700px] px-5 md:px-10 lg:px-0 min-h-screen mx-auto">
		<slot />
	</main>
{/if}
