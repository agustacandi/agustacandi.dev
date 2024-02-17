<script lang="ts">
	export let title: string, description: string, image: string;
</script>

<div class="border-2 dark:border-white border-black">
	<img
		class="h-36 w-full object-cover object-top"
		src={image}
		alt="Project Preview"
		loading="lazy"
	/>
	<div class="p-2">
		<h3 class="font-momentum uppercase line-clamp-2">
			{title}
		</h3>
		<p class="font-ibmPlex line-clamp-2">
			{description}
		</p>
	</div>
</div>
