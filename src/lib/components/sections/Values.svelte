<script lang="ts">
	import { ShieldCheck, ServerCog, Scale } from 'lucide-svelte';
</script>

<section class="bg-base-200 text-base-content px-6 py-20">
	<div class="mx-auto max-w-5xl text-center">
		<h2 class="mb-6 text-3xl font-semibold">Unsere Werte & Haltung</h2>
		<p class="text-base-content/80 text-lg leading-relaxed">
			Rieger Systems steht für technologische Verantwortung. Unsere Mission ist es, KI und Software
			zu entwickeln, die Menschen stärkt, Entscheidungen erleichtert und Systeme stabiler macht -
			ohne Aufmerksamkeit zu fordern, ohne zu manipulieren.
		</p>

		<div class="mt-16 grid gap-10 text-left md:grid-cols-3">
			<div>
				<ShieldCheck class="text-primary mb-3 h-6 w-6" />
				<h3 class="text-base-content font-semibold">Datenschutz by Design</h3>
				<p class="text-base-content/70 mt-2 text-sm">
					Unsere Systeme verarbeiten personenbezogene Daten nur, wenn es absolut nötig ist -
					verschlüsselt, lokal und nachvollziehbar.
				</p>
			</div>

			<div>
				<ServerCog class="text-primary mb-3 h-6 w-6" />
				<h3 class="text-base-content font-semibold">Kontrollierbare Architektur</h3>
				<p class="text-base-content/70 mt-2 text-sm">
					Klare Strukturen, modulare Systeme, revisionsfähig - vollständig unter Ihrer Kontrolle,
					auch On-Premise möglich.
				</p>
			</div>

			<div>
				<Scale class="text-primary mb-3 h-6 w-6" />
				<h3 class="text-base-content font-semibold">Europäische Ethik</h3>
				<p class="text-base-content/70 mt-2 text-sm">
					Menschlich, gesetzeskonform und zukunftsfähig - wir handeln nach Prinzipien, nicht nach
					Opportunitäten.
				</p>
			</div>
		</div>

		<p class="text-base-content/60 mt-16 text-sm italic">
			Wir glauben an Klarheit, Würde und Kontrolle. Wir bauen Systeme, denen man vertrauen kann -
			und die Vertrauen verdienen.
		</p>
	</div>
</section>
