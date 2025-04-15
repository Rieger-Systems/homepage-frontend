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

	<!-- Open Graph Meta Tags -->
	<meta property="og:title" content="Rieger Systems" />
	<meta
		property="og:description"
		content="Technologie, die trägt. Für Menschen. Mit Verantwortung."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rieger-systems.eu/" />
	<meta property="og:image" content="https://rieger-systems.eu/short-logo.jpg" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Rieger Systems" />
	<meta name="twitter:description" content="Rieger AI and Software Development" />
	<meta name="twitter:image" content="https://rieger-systems.eu/short-logo.jpg" />

	<!-- Favicon & Icons -->
	<link rel="icon" type="image/png" href="/favicon/favicon.ico" />
	<link rel="apple-touch-icon" href="/logo.jpg" />
</svelte:head>
{@render children()}
