<!-- src/lib/components/FadeInOnScroll.svelte -->
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Optionale Property, um die Animation nur einmal ablaufen zu lassen
	export let once: boolean = false;

	let visible = false;
	let el: HTMLElement;
	let observer: IntersectionObserver;

	onMount(() => {
		// Initialisiere den IntersectionObserver mit einem Threshold von 0.2
		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					// Falls nur einmal animiert werden soll, stoppe die Beobachtung
					if (once && el) {
						observer.unobserve(el);
					}
				}
			},
			{
				threshold: 0.2
			}
		);

		// Beobachte das Element
		if (el) observer.observe(el);
	});

	onDestroy(() => {
		// Clean-Up: Observer unobserven, falls noch aktiv
		if (observer && el) {
			observer.unobserve(el);
		}
	});
</script>

<!-- Das Wrapper-Element, das anhand der Sichtbarkeit animiert -->
<div
	bind:this={el}
	class="transition-all duration-700 ease-out"
	class:opacity-0={!visible}
	class:translate-y-8={!visible}
>
	<slot />
</div>
