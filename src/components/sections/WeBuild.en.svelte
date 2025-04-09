<script lang="ts">
	import { en } from '$lib/i18n/en';
	import AiVisualization from '../threejs/AiVisualization.svelte';
</script>

<section
	id="webuild"
	class="bg-base-200 text-base-content flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24"
>
	<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
		<!-- Textblock -->
		<div class="bg-base-100 rounded-2xl p-10 shadow-xl">
			<h2 class="text-base-content mb-6 text-4xl font-bold tracking-tight">{en.webuild.title}</h2>
			<p class="text-base-content/80 text-lg leading-relaxed">{en.webuild.intro}</p>
			<p class="text-base-content/60 mt-6 text-sm leading-relaxed">{en.webuild.desc}</p>
			<div class="mt-10">
				<a href="#contact" class="btn btn-primary btn-md transition-all duration-200"
					>{en.webuild.button}</a
				>
			</div>
		</div>

		<!-- Visualisierung -->
		<div class="text-center">
			<p class="text-base-content/60 mb-2 text-sm tracking-widest uppercase">
				{en.webuild.ai.subline}
			</p>
			<h2 class="text-primary mb-4 text-4xl font-bold tracking-tight">{en.webuild.ai.title}</h2>
			<p class="text-base-content/70 mx-auto mb-10 max-w-md text-base leading-relaxed">
				{en.webuild.ai.text}
			</p>
			<div
				class="bg-base-100 ring-base-300 relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl ring-1"
			>
				<AiVisualization />
				<div class="ring-primary/10 pointer-events-none absolute inset-0 rounded-2xl ring-2"></div>
			</div>
		</div>
	</div>
</section>
