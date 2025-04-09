<script lang="ts">
	import AiVisualization from '../threejs/AiVisualization.svelte';
</script>

<div class="hero relative min-h-screen overflow-hidden">
	<div class="hero-content relative z-10 text-center">
		<div class="max-w-3xl">
			<h1
				class="animate-fade-up animate-once animate-duration-1000 mb-5 text-5xl font-bold md:text-6xl"
			>
				Die Zukunft intelligenter gestalten
			</h1>
			<p class="animate-fade-up animate-delay-300 animate-duration-1000 mb-8 text-lg md:text-xl">
				Bei Rieger Systems verbinden wir Innovation und Menschlichkeit, um KI-Lösungen zu
				entwickeln, denen du wirklich vertrauen kannst.
			</p>
			<div
				class="animate-fade-up animate-delay-500 animate-duration-1000 flex justify-center gap-4"
			>
				<button class="btn btn-primary btn-lg transition-all duration-200"> Mehr erfahren </button>
				<button class="btn btn-outline btn-lg transition-all duration-200">
					Kontakt aufnehmen
				</button>
			</div>
		</div>
	</div>

	<!-- Scroll Hinweis unten Mitte -->
	<div class="absolute inset-x-0 bottom-6 flex justify-center">
		<div class="animate-bounce">
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
</div>
