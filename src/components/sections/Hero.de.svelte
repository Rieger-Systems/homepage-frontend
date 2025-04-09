<script lang="ts">
	import { de } from '$lib/i18n/de';
</script>

<section
	id="hero"
	class="bg-base-100 text-base-content relative flex min-h-screen snap-start flex-col items-center justify-center px-6"
>
	<div class="z-10 max-w-4xl text-center">
		<h1
			class="animate-fade-up animate-once animate-duration-1000 mb-6 text-5xl leading-tight font-bold md:text-6xl"
		>
			{de.hero.title}
		</h1>
		<p
			class="animate-fade-up animate-delay-300 animate-duration-1000 text-base-content/80 mb-10 text-lg md:text-xl"
		>
			{de.hero.sub}
		</p>
		<div
			class="animate-fade-up animate-delay-500 animate-duration-1000 flex flex-wrap justify-center gap-4"
		>
			<a href="#webuild" class="btn btn-primary btn-lg transition-all duration-200"
				>{de.hero.buttonPrimary}</a
			>
			<a href="#kontakt" class="btn btn-outline btn-lg transition-all duration-200"
				>{de.hero.buttonSecondary}</a
			>
		</div>
	</div>

	<!-- Scroll-Hinweis -->
	<div class="absolute right-0 bottom-6 left-0 flex justify-center">
		<div class="text-base-content/40 animate-bounce">
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
	</div>
</section>
