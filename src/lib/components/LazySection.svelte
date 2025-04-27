<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let load: () => Promise<any>;

	let component: typeof import('svelte').SvelteComponent | null = null;
	let observer: IntersectionObserver;
	let container: HTMLDivElement;

	async function loadComponent() {
		if (!component) {
			const module = await load();
			component = module.default;
		}
	}

	onMount(() => {
		if (!browser) return;
		observer = new IntersectionObserver(
			async ([entry]) => {
				if (entry.isIntersecting) {
					await loadComponent();
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		observer.observe(container);
	});
</script>

<div bind:this={container}>
	{#if component}
		<svelte:component this={component} />
	{/if}
</div>
