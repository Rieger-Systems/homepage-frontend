<script lang="ts">
	import Header from '$components/Header.svelte';
</script>

<Header />

<main class="h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
	<slot />
</main>
