<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>@agustacandi | Error {$page.status}</title>
</svelte:head>

<div class="grid h-screen place-items-center dark:bg-black dark:text-white bg-white text-black">
	<div class="text-center">
		<h1 class="text-8xl font-momentum">{$page.status}</h1>
		<p class="text-2xl font-ibmPlex">{$page.error?.message}</p>
		<a class="font-ibmPlex underline" href="/">Go Back</a>
	</div>
</div>
