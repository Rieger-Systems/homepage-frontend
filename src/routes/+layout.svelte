<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Rieger Systems</title>
	<meta name="description" content="Technologie, die trägt. Für Menschen. Mit Verantwortung." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
{@render children()}
