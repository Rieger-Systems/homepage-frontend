<script lang="ts">
	import AiVisualization from '$lib/components/AiVisualization.svelte';
	import { ArrowRight, CheckCircle, ShieldCheck, Globe, Cpu } from 'lucide-svelte';
</script>

<!-- 1. Hero Section -->
<section class="bg-base-100 text-base-content flex min-h-screen items-center justify-center px-6">
	<div class="max-w-2xl text-center">
		<h1 class="mb-4 text-4xl leading-tight font-bold">
			Technologie, die <span class="text-primary">trägt</span>
		</h1>
		<p class="text-base-content/70 mb-6 text-lg">
			Rieger Systems entwickelt KI-Systeme, die Verantwortung übernehmen – nicht Aufmerksamkeit.
		</p>
		<div class="flex justify-center gap-4">
			<a class="btn btn-primary gap-2">
				Mehr erfahren
				<ArrowRight class="h-4 w-4" />
			</a>
			<a class="btn btn-secondary">Kontakt</a>
		</div>
	</div>
</section>

<!-- 3. Methodik (Steps) -->
<section class="bg-base-200 py-12">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<h2 class="mb-6 text-2xl font-semibold">So arbeiten wir</h2>
		<ul class="steps steps-vertical lg:steps-horizontal">
			<li class="step step-primary">Verstehen</li>
			<li class="step step-primary">Systemisch denken</li>
			<li class="step">Stabil umsetzen</li>
			<li class="step">Langfristig begleiten</li>
		</ul>
	</div>
</section>

<!-- 4. Werte / Philosophie -->
<section class="bg-base-100 py-12">
	<div class="mx-auto max-w-5xl px-6">
		<h2 class="mb-8 text-center text-2xl font-semibold">Was uns auszeichnet</h2>
		<div class="grid gap-6 md:grid-cols-3">
			<div class="card bg-base-200 p-6 shadow">
				<ShieldCheck class="text-primary mb-2 h-6 w-6" />
				<h3 class="mb-1 font-semibold">Datenschutz & Transparenz</h3>
				<p class="text-base-content/70 text-sm">DSGVO-konform, lokal & ohne Nutzertracking.</p>
			</div>
			<div class="card bg-base-200 p-6 shadow">
				<CheckCircle class="text-primary mb-2 h-6 w-6" />
				<h3 class="mb-1 font-semibold">Technologische Exzellenz</h3>
				<p class="text-base-content/70 text-sm">
					Eigene KI-Infrastruktur & vollständige Kontrolle.
				</p>
			</div>
			<div class="card bg-base-200 p-6 shadow">
				<Cpu class="text-primary mb-2 h-6 w-6" />
				<h3 class="mb-1 font-semibold">Menschzentriert</h3>
				<p class="text-base-content/70 text-sm">Unsere Systeme begleiten – sie ersetzen nicht.</p>
			</div>
		</div>
	</div>
</section>

<!-- 5. Produktplatzhalter -->
<section class="bg-base-200 py-16 text-center">
	<div class="mx-auto max-w-3xl px-6">
		<h2 class="mb-4 text-2xl font-semibold">Aktuelles Projekt</h2>
		<p class="mb-4">
			Bald verfügbar: AmaraWell - eine KI, die Menschen in Therapieprozessen begleitet.
		</p>
		<div class="skeleton rounded-box h-48 w-full"></div>
	</div>
</section>

<!-- 6. Vertrauen / Herkunft -->
<section class="bg-base-100 py-12">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<h2 class="mb-6 text-xl font-semibold">Verantwortung beginnt beim Ursprung</h2>
		<div class="flex flex-col items-center justify-center gap-6 md:flex-row">
			<div class="badge badge-outline text-base-content/70 flex items-center gap-2">
				<Globe class="h-4 w-4" /> Made in Europe
			</div>
			<div class="badge badge-outline text-base-content/70 flex items-center gap-2">
				<ShieldCheck class="h-4 w-4" /> DSGVO-konform
			</div>
			<div class="badge badge-outline text-base-content/70 flex items-center gap-2">
				<Cpu class="h-4 w-4" /> Eigene KI-Systeme
			</div>
		</div>
	</div>
</section>

<!-- 7. Call to Action -->
<section class="bg-primary text-primary-content py-16 text-center">
	<div class="mx-auto max-w-3xl px-6">
		<h2 class="mb-4 text-3xl font-bold">Bereit für Systeme, die Verantwortung tragen?</h2>
		<p class="mb-6">
			Lass uns gemeinsam die Zukunft gestalten – ruhig, ehrlich, technologisch exzellent.
		</p>
		<a class="btn btn-secondary">Jetzt Kontakt aufnehmen</a>
	</div>
</section>

<!-- KI-Visualisierung (Platzhalter) -->
<AiVisualization />
