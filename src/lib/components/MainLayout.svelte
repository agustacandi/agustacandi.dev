<script lang="ts">
	import Footer from './Footer.svelte';
	import MobileNavigation from './MobileNavigation.svelte';
	import Navigation from './Navigation.svelte';

	export let title = 'SvelteKit';
	let innerWidth = 0;
</script>

<svelte:head>
	<title>agustacandi - {title}</title>
</svelte:head>
<svelte:window bind:innerWidth />

<Navigation />
<slot />
<Footer />
{#if innerWidth < 768}
	<MobileNavigation />
{/if}
