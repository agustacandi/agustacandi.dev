<script lang="ts">
	import MainLayout from '$lib/components/MainLayout.svelte';
</script>

<MainLayout title="Home">
	<div class="md:flex md:justify-center my-10 md:items-center md:my-28 md:space-x-10">
		<img
			class="w-52 h-52 mx-auto md:mx-0 rounded-full border-4 dark:border-white border-black shadow"
			src="https://avatars.githubusercontent.com/u/54197587?v=4"
			alt="Avatar"
		/>
		<div class="text-center md:text-left">
			<h2 class="font-momentum text-2xl">CANDI<br />AGUSTA<br />ISLAMIANO</h2>
			<p class="font-ibmPlex my-2">Web/Mobile Developer</p>
			<a
				href="/CV.pdf"
				class="inline-block font-ibmPlex dark:border-white dark:bg-black bg-white dark:hover:bg-white dark:hover:text-black hover:bg-black py-2 px-8 hover:text-white border-2 border-black"
			>
				Download CV
			</a>
			<!-- <p class="font-ibmPlex">or run:</p>
			<div class="p-5 dark:bg-gray-700 bg-gray-100">
				<code>npx run agustacandi</code>
			</div> -->
		</div>
	</div>
</MainLayout>
