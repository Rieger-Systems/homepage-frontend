<script lang="ts">
	import AiVisualization from '../threejs/AiVisualization.svelte';
</script>

<section
	id="webuild"
	class="bg-base-200 text-base-content flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24"
>
	<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
		<!-- Textblock: Was wir bauen -->
		<div class="bg-base-100 rounded-2xl p-10 shadow-xl">
			<h2 class="text-base-content mb-6 text-4xl font-bold tracking-tight">Was wir bauen</h2>
			<p class="text-base-content/80 text-lg leading-relaxed">
				Wir entwickeln Systeme, die mitdenken – und mitfühlen. Ob ethische KI, erklärbare
				Automatisierung oder digitale Werkzeuge mit klarer Verantwortung: Wir denken mit – und
				darüber hinaus.
			</p>

			<p class="text-base-content/60 mt-6 text-sm leading-relaxed">
				Rieger Systems entwickelt maßgeschneiderte Software und KI-Lösungen – ganzheitlich,
				menschenzentriert und verantwortungsvoll. Ob Proof-of-Concept, internes Werkzeug oder
				öffentliches System: Unsere Entwicklungen passen sich Ihren Werten an. Gerne auch als
				White-Label oder On-Premise.
			</p>

			<div class="mt-10">
				<a href="#kontakt" class="btn btn-primary btn-md transition-all duration-200"
					>Projekt anfragen</a
				>
			</div>
		</div>

		<!-- A.M.A.R.A. Visualisierung -->
		<div class="text-center">
			<p class="text-base-content/60 mb-2 text-sm tracking-widest uppercase">Unsere KI-Plattform</p>
			<h2 class="text-primary mb-4 text-4xl font-bold tracking-tight">A.M.A.R.A</h2>
			<p class="text-base-content/70 mx-auto mb-10 max-w-md text-base leading-relaxed">
				A Machine Always Ready to Assist – unsere menschenzentrierte KI-Architektur. Lokal
				betreibbar, tief integriert, verantwortungsvoll und bereit, Gutes zu bewirken.
			</p>

			<!-- Visualisierung -->
			<div class="bg-base-100 aspect-video overflow-hidden rounded-xl shadow-xl">
				<AiVisualization />
			</div>
		</div>
	</div>
</section>
