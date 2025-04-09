<script lang="ts">
	import { ShieldCheck, ServerCog, Scale } from 'lucide-svelte';
</script>

<section
	id="values"
	class="bg-base-100 text-base-content flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24"
>
	<div class="mx-auto max-w-5xl text-center">
		<h2 class="mb-6 text-4xl font-bold tracking-tight">Unsere Werte & Haltung</h2>
		<p class="text-base-content/80 mx-auto max-w-3xl text-lg leading-relaxed">
			Rieger Systems steht für technologische Verantwortung. Unsere Mission ist es, KI und Software
			zu entwickeln, die Menschen stärkt, Entscheidungen erleichtert und Systeme stabiler macht –
			ohne Aufmerksamkeit zu fordern, ohne zu manipulieren.
		</p>
	</div>

	<!-- Werte-Kacheln -->
	<div class="mt-20 grid w-full max-w-6xl gap-10 md:grid-cols-3">
		<!-- Wert 1 -->
		<div
			class="bg-base-200 rounded-xl p-6 text-left shadow-md transition-all duration-300 hover:shadow-lg"
		>
			<ShieldCheck class="text-primary mb-4 h-8 w-8" />
			<h3 class="mb-2 text-lg font-semibold">Datenschutz by Design</h3>
			<p class="text-base-content/70 text-sm leading-relaxed">
				Unsere Systeme verarbeiten personenbezogene Daten nur, wenn es absolut nötig ist –
				verschlüsselt, lokal und nachvollziehbar.
			</p>
		</div>

		<!-- Wert 2 -->
		<div
			class="bg-base-200 rounded-xl p-6 text-left shadow-md transition-all duration-300 hover:shadow-lg"
		>
			<ServerCog class="text-primary mb-4 h-8 w-8" />
			<h3 class="mb-2 text-lg font-semibold">Kontrollierbare Architektur</h3>
			<p class="text-base-content/70 text-sm leading-relaxed">
				Klare Strukturen, modulare Systeme, revisionsfähig – vollständig unter Ihrer Kontrolle, auch
				On-Premise möglich.
			</p>
		</div>

		<!-- Wert 3 -->
		<div
			class="bg-base-200 rounded-xl p-6 text-left shadow-md transition-all duration-300 hover:shadow-lg"
		>
			<Scale class="text-primary mb-4 h-8 w-8" />
			<h3 class="mb-2 text-lg font-semibold">Europäische Ethik</h3>
			<p class="text-base-content/70 text-sm leading-relaxed">
				Menschlich, gesetzeskonform und zukunftsfähig – wir handeln nach Prinzipien, nicht nach
				Opportunitäten.
			</p>
		</div>
	</div>

	<!-- Abschluss-Statement -->
	<p class="text-base-content/60 mt-20 max-w-2xl text-center text-sm italic">
		Wir glauben an Klarheit, Würde und Kontrolle. Wir bauen Systeme, denen man vertrauen kann – und
		die Vertrauen verdienen.
	</p>
</section>
