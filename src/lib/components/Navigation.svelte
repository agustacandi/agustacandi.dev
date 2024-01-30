<script lang="ts">
	import { page } from '$app/stores';
	import { navigations } from '$lib/data/navigation';
	import { IconSun } from '@tabler/icons-svelte';
	import MobileNavigation from './MobileNavigation.svelte';
	const pathName = $page.url.pathname;
	let innerWidth = 0;

	// onMount(() => {
	// 	toggleTheme();
	// });

	const toggleTheme = () => {
		const rootElement = document.querySelector('html');
		// const isDark = localStorage.getItem('theme') === 'dark';
		const isDark = rootElement?.classList.contains('dark');
		if (isDark) {
			// 	localStorage.setItem('theme', 'light');
			rootElement?.classList.remove('dark');
		} else {
			// 	localStorage.setItem('theme', 'dark');
			rootElement?.classList.add('dark');
		}
	};
</script>

<svelte:window bind:innerWidth />

<nav class="flex justify-between font-ibmPlex py-5">
	<h1 class="font-momentum text-lg">AGUSTACANDI.</h1>
	<div class="flex space-x-3 items-center">
		{#if innerWidth > 768}
			<ul class="flex space-x-3 items-center">
				{#each navigations as link}
					<li>
						<a
							class="py-1 px-3 {pathName == link.path
								? 'dark:bg-white bg-black dark:text-black text-white'
								: 'dark:bg-black bg-white dark:text-white text-black'}"
							href={link.path}>{link.name}</a
						>
					</li>
				{/each}
			</ul>
		{/if}
		<button on:click={toggleTheme}>
			<IconSun />
		</button>
	</div>
</nav>
