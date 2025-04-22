<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';
	import HeroGlobe from '$lib/components/threejs/HeroGlobe.svelte';

	$: t = $locale === 'en' ? en : de;
</script>

<section
	id="hero"
	class="bg-base-100 text-base-content relative flex min-h-screen snap-start flex-col items-center justify-center overflow-hidden px-6 py-24 sm:py-32"
>
	<!-- Visual Layer: HeroGlobe im Hintergrund -->
	<div class="pointer-events-none absolute inset-0 z-0 opacity-30 blur-sm md:blur-none">
		<HeroGlobe />
	</div>

	<!-- Inhalt mit FadeIn -->
	<FadeInOnScroll once>
		<div class="z-10 max-w-4xl space-y-6 px-4 text-center sm:px-6">
			<h1 class="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl">
				{t.hero.title}
			</h1>

			<p class="text-base-content/80 text-lg sm:text-xl md:text-2xl">
				{t.hero.sub}
			</p>

			<p class="text-base-content/60 mt-2 text-sm italic sm:text-base">
				{#if $locale === 'de'}
					Technologie, die trägt. Für Menschen. Mit Verantwortung.
				{:else}
					Technology that carries. For people. With responsibility.
				{/if}
			</p>

			<div class="flex flex-wrap justify-center gap-4 pt-4">
				<a
					href="#webuild"
					class="btn btn-primary btn-lg shadow-md transition-transform duration-200 hover:scale-105"
					aria-label={t.hero.buttonPrimary}
				>
					{t.hero.buttonPrimary}
				</a>

				<a
					href="#contact"
					class="btn btn-outline btn-lg hover:border-base-content/50 hover:text-base-content transition-colors duration-200"
					aria-label={t.hero.buttonSecondary}
				>
					{t.hero.buttonSecondary}
				</a>
			</div>
		</div>
	</FadeInOnScroll>

	<!-- Scroll-Hinweis -->
	<div
		class="text-base-content/40 absolute inset-x-0 bottom-6 flex animate-bounce justify-center"
		aria-hidden="true"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>
</section>
