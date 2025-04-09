<script lang="ts">
	import AiVisualization from '../threejs/AiVisualization.svelte';
</script>

<section class="bg-base-100 text-base-content px-6 py-20">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="mb-6 text-3xl font-semibold">Was wir bauen</h2>
		<p class="text-base-content/80 text-lg leading-relaxed">
			Wir entwickeln Systeme, die mitdenken - und mitfühlen. Ob ethische KI, erklärbare
			Automatisierung oder digitale Werkzeuge mit klarer Verantwortung: Wir denken mit - und darüber
			hinaus.
		</p>

		<p class="text-base-content/60 mt-6">
			Rieger Systems entwickelt maßgeschneiderte Software und KI-Lösungen - ganzheitlich,
			menschenzentriert und verantwortungsvoll. Ob Proof-of-Concept, internes Werkzeug oder
			öffentliches System: Unsere Entwicklungen passen sich Ihren Werten an. Gerne auch als
			White-Label oder On-Premise.
		</p>

		<div class="mt-8">
			<a href="#kontakt" class="btn btn-primary transition-all duration-200">Projekt anfragen</a>
		</div>
	</div>
</section>

<!-- Klare Bühne für A.M.A.R.A. -->
<section class="bg-base-200 text-base-content px-6 py-24">
	<div class="mx-auto max-w-6xl text-center">
		<p class="text-base-content/60 mb-2 text-sm tracking-wider uppercase">Unsere KI-Plattform</p>
		<h2 class="text-primary mb-6 text-4xl font-bold tracking-tight">A.M.A.R.A</h2>
		<p class="text-base-content/70 mx-auto mb-12 max-w-2xl text-lg leading-relaxed">
			A Machine Always Ready to Assist - unsere menschenzentrierte KI-Architektur. Lokal betreibbar,
			tief integriert, verantwortungsvoll und bereit, Gutes zu bewirken.
		</p>

		<!-- Visualisierung -->
		<div
			class="ring-base-300 relative mx-auto max-w-5xl overflow-hidden rounded-xl shadow-2xl ring-1"
		>
			<div class="bg-base-100 aspect-video">
				<AiVisualization />
			</div>
		</div>
	</div>
</section>
