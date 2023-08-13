<script lang="ts">
	import './style.scss';
	const date = new Date();
</script>

<p>Unfortunately css can't be loaded!</p>
<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/projects">Projects</a></li>
	<li><a href="/about">About</a></li>
</ul>

<slot />

<footer>
	<p>Copyright © {date.getFullYear()}</p>
</footer>

<style lang="scss">
</style>
