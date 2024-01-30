<script>
	import { IconHome, IconPokeball, IconNotes, IconUserCircle } from '@tabler/icons-svelte';
	import { navigations } from '$lib/data/navigation';
	import { page } from '$app/stores';
	const NavIcon = [IconHome, IconPokeball, IconNotes, IconUserCircle];
	const pathName = $page.url.pathname;
</script>

<nav
	class="absolute left-0 right-0 bottom-0 dark:bg-black bg-white w-full border-t-2 dark:border-white border-black p-2"
>
	<ul class="flex justify-around">
		{#each navigations as navigation, i}
			{@const Icon = NavIcon[i]}
			{@const isActive = pathName == navigation.path}
			{@const iconColor = isActive ? 'dark:text-black text-white' : 'dark:text-white text-black'}
			{@const bgColor = isActive ? 'dark:bg-white bg-black' : 'dark:bg-black bg-white'}
			<li class={bgColor}>
				<a class="grid place-items-center py-2 px-3 {iconColor}" href={navigation.path}><Icon /></a>
			</li>
		{/each}
	</ul>
</nav>
