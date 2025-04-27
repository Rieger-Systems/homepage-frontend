<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let load: () => Promise<any>;

	let container: HTMLDivElement;
	let observer: IntersectionObserver | null = null;
	let component: typeof import('svelte').SvelteComponent | null = null;
	let error: Error | null = null;

	async function loadComponent() {
		if (component || error) return;
		try {
			const module = await load();
			component = module.default;
		} catch (err) {
			error = err instanceof Error ? err : new Error('Failed to load section.');
			console.error('[LazySection] Error loading component:', error);
		}
	}

	onMount(() => {
		if (!browser) return;

		observer = new IntersectionObserver(
			async ([entry]) => {
				if (entry.isIntersecting) {
					await loadComponent();
					observer?.disconnect();
					observer = null;
				}
			},
			{ threshold: 0.1 }
		);

		if (container) {
			observer.observe(container);
		}
	});

	onDestroy(() => {
		observer?.disconnect();
		observer = null;
	});
</script>

<div bind:this={container} class="w-full">
	{#if error}
		<p class="text-red-500">Fehler beim Laden der Section.</p>
	{:else if component}
		<svelte:component this={component} />
	{/if}
</div>
