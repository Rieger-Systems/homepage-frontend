<script lang="ts">
	import { ShieldCheck, ServerCog, Scale } from 'lucide-svelte';
</script>

<section class="bg-base-100 text-base-content px-6 py-20">
	<div class="mx-auto max-w-5xl text-center">
		<h2 class="mb-6 text-3xl font-semibold">Vertrauen ist Grundlage</h2>
		<p class="text-base-content/80 text-lg leading-relaxed">
			Bei Rieger Systems steht nicht nur Technologie im Zentrum – sondern der Mensch. Unsere Systeme
			sind so gestaltet, dass sie Verantwortung übernehmen, Daten schützen und Kontrolle
			ermöglichen.
		</p>

		<div class="mt-12 grid gap-8 text-left md:grid-cols-3">
			<div>
				<ShieldCheck class="text-primary mb-2 h-6 w-6" />
				<h3 class="text-base-content font-semibold">Datenschutz by Design</h3>
				<p class="text-base-content/70 mt-2 text-sm">
					Unsere Systeme verarbeiten personenbezogene Daten nur, wenn es unbedingt nötig ist –
					verschlüsselt, lokal, nachvollziehbar.
				</p>
			</div>
			<div>
				<ServerCog class="text-primary mb-2 h-6 w-6" />
				<h3 class="text-base-content font-semibold">Kontrollierbare Architektur</h3>
				<p class="text-base-content/70 mt-2 text-sm">
					Wir setzen auf klar strukturierte, modulare Systeme – nachvollziehbar dokumentiert,
					revisionsfähig und vollständig unter Ihrer Kontrolle, wenn gewünscht auch On-Premise.
				</p>
			</div>
			<div>
				<Scale class="text-primary mb-2 h-6 w-6" />
				<h3 class="text-base-content font-semibold">Europäische Ethik</h3>
				<p class="text-base-content/70 mt-2 text-sm">
					Unsere Arbeit orientiert sich an EU-Standards, Menschenrechten und dem Anspruch,
					Technologie gerecht einzusetzen.
				</p>
			</div>
		</div>
	</div>
</section>
