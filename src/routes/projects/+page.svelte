<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import MainLayout from '$lib/components/MainLayout.svelte';
	import { projects } from '$lib/data/projects';
	import Headline from '$lib/components/Headline.svelte';
	import UnderDevelopment from '$lib/components/UnderDevelopment.svelte';

	const soloProjects = projects.filter((project) => project.type === 'solo');
	const schoolProjects = projects.filter((project) => project.type === 'school');
	const teamProjects = projects.filter((project) => project.type === 'team');
</script>

<MainLayout title="Projects">
	<Headline title="Solo Project" />
	<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
		{#each soloProjects as project}
			<ProjectCard title={project.name} description={project.description} image={project.image} />
		{/each}
	</div>
	<Headline title="School Project" />
	<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
		{#each schoolProjects as project}
			<ProjectCard title={project.name} description={project.description} image={project.image} />
		{/each}
	</div>
	<Headline title="Team Project" />
	<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
		{#each teamProjects as project}
			<ProjectCard title={project.name} description={project.description} image={project.image} />
		{/each}
	</div>
	<!-- <ul>
		<li>Twibbon Generator</li>
	</ul>

	<h3>School Project</h3>
	<ul>
		<li>Rentalkeun</li>
		<li>RePOSin</li>
		<li>Epasys (Electronic Parking System)</li>
		<li>JTI-Skripsi</li>
	</ul>

	<h3>Team Project</h3>
	<ul>
		<li>Enterprise Risk Management System Bank Syariah Indonesia</li>
		<li>Paradoc Indonesia</li>
		<li>Pemilu.AI</li>
	</ul> -->
</MainLayout>
