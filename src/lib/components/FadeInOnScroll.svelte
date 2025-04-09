<!-- src/lib/components/FadeInOnScroll.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	let visible = false;
	let el: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) visible = true;
			},
			{ threshold: 0.2 }
		);
		if (el) observer.observe(el);
	});
</script>

<div
	bind:this={el}
	class="transition-all duration-700 ease-out"
	class:opacity-0={!visible}
	class:translate-y-8={!visible}
>
	<slot />
</div>
