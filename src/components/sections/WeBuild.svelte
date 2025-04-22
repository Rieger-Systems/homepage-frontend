<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';
	import AiVisualization from '$lib/components/threejs/AiVisualization.svelte';
	import AiControlPanel from '$lib/components/threejs/AiControlPanel.svelte';

	$: t = $locale === 'en' ? en : de;

	let color = '#f5c634';
	let autoRotate = true;
	let autoRotateSpeed = 0.002;
	let particleCount = 120;
</script>

<section
	id="webuild"
	class="bg-base-200 text-base-content flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 sm:px-8 lg:px-16"
>
	<FadeInOnScroll once>
		<div class="grid w-full max-w-6xl items-stretch gap-8 md:grid-cols-2">
			<!-- Textblock -->
			<div
				class="bg-base-100 flex h-full flex-col justify-between rounded-3xl p-10 shadow-xl sm:p-12"
			>
				<div class="max-w-prose space-y-6">
					<h2 class="text-4xl font-bold tracking-tight sm:text-5xl">{t.webuild.title}</h2>
					<p class="text-base-content/80 text-lg leading-relaxed">{t.webuild.intro}</p>
					<p class="text-base-content/60 text-sm leading-relaxed">{t.webuild.desc}</p>
				</div>
				<div class="pt-8">
					<a
						href="#kontakt"
						class="btn btn-warning btn-lg shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
					>
						{t.webuild.button}
					</a>
				</div>
			</div>

			<!-- Visualisierung -->
			<div
				class="bg-base-100 flex h-full flex-col justify-between rounded-3xl p-10 text-center shadow-xl sm:p-12"
			>
				<div class="mx-auto max-w-prose space-y-4">
					<p class="text-primary text-sm font-semibold tracking-widest uppercase">
						{t.webuild.ai.subline}
					</p>
					<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{t.webuild.ai.title}</h2>
					<p class="text-base-content/70 text-base leading-relaxed">{t.webuild.ai.text}</p>
				</div>

				<div
					class="ring-base-300/30 hover:ring-primary/30 relative mx-auto mt-10 aspect-video w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl ring-1 transition-all duration-300"
				>
					<AiVisualization {color} {autoRotate} {autoRotateSpeed} {particleCount} />
					<AiControlPanel bind:color bind:particleCount bind:autoRotate bind:autoRotateSpeed />

					<div
						class="ring-primary/20 pointer-events-none absolute inset-0 rounded-2xl ring-2"
					></div>
				</div>
			</div>
		</div>
	</FadeInOnScroll>
</section>
