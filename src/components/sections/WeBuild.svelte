<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';
	import AiVisualization from '../../lib/components/threejs/AiVisualization.svelte';

	// Reaktives Übersetzungsobjekt basierend auf der aktuellen Locale
	$: t = $locale === 'en' ? en : de;
</script>

<section
	id="webuild"
	class="bg-base-200 text-base-content flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24"
>
	<FadeInOnScroll once>
		<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
			<div class="bg-base-100 rounded-2xl p-12 shadow-lg">
				<h2 class="text-base-content mb-6 text-4xl font-bold tracking-tight">
					{t.webuild.title}
				</h2>
				<p class="text-base-content/80 text-lg leading-relaxed">
					{t.webuild.intro}
				</p>
				<p class="text-base-content/60 mt-6 text-sm leading-relaxed">
					{t.webuild.desc}
				</p>
				<div class="mt-10">
					<a
						href="#kontakt"
						class="btn btn-primary btn-lg transition-all duration-200"
						aria-label={t.webuild.button}
					>
						{t.webuild.button}
					</a>
				</div>
			</div>

			<div class="text-center">
				<p class="text-primary mb-2 text-sm font-semibold tracking-widest uppercase">
					{t.webuild.ai.subline}
				</p>
				<h2 class="text-base-content mb-4 text-4xl font-bold tracking-tight">
					{t.webuild.ai.title}
				</h2>
				<p class="text-base-content/70 mx-auto mb-10 max-w-md text-base leading-relaxed">
					{t.webuild.ai.text}
				</p>

				<div
					class="ring-base-300 relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl ring-1"
				>
					<AiVisualization />
					<div
						class="ring-primary/20 pointer-events-none absolute inset-0 rounded-2xl ring-2"
					></div>
				</div>
			</div>
		</div>
	</FadeInOnScroll>
</section>
