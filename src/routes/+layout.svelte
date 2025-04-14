<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	{#if import.meta.env.PROD}
		<script
			async
			defer
			data-website-id="95338bbf-306c-4aaa-ba2a-37815e195194"
			src="https://umami.rieger-systems.eu/script.js"
		></script>
	{/if}
	<title>Rieger Systems</title>
	<meta name="description" content="Technologie, die trägt. Für Menschen. Mit Verantwortung." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>
{@render children()}
