<script lang="ts">
	import Header from '$components/Header.svelte';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		const main = document.querySelector('main');
		main?.scrollTo({ top: 0, behavior: 'instant' });
	});
</script>

<Header />

<main class="h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
	<slot />
</main>
