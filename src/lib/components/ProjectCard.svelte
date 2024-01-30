<script lang="ts">
	export let title: string, description: string;
</script>

<div class="border-2 dark:border-white border-black">
	<img
		class="h-28 w-full object-cover"
		src="https://avatars.githubusercontent.com/u/54197587?v=4"
		alt="Avatar"
		loading="lazy"
	/>
	<div class="p-2">
		<h3 class="font-momentum text-lg uppercase line-clamp-1">
			{title}
		</h3>
		<p class="font-ibmPlex line-clamp-2">
			{description}
		</p>
	</div>
</div>
