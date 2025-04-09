<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<!-- Sauberer Layout Wrapper -->
<main class="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
	<slot />
</main>
