<script lang="ts">
	import { Mail, Globe, ShieldCheck } from 'lucide-svelte';
</script>

<div class="bg-base-200 border-base-300 border-t">
	<footer
		class="footer sm:footer-horizontal text-base-content container mx-auto max-w-screen-xl p-10"
	>
		<!-- Logo & Statement -->
		<aside>
			<img src="/short-logo.jpg" alt="Rieger Logo" class="mb-2 w-36 rounded-2xl" />
			<p>
				<strong class="text-lg">Rieger Systems GmbH</strong><br />
				Technologie, die Verantwortung trägt.<br />
				Made in Europe.
			</p>
		</aside>

		<!-- Werte -->
		<nav>
			<h6 class="footer-title">Wofür wir stehen</h6>
			<p>Datenschutz & Transparenz</p>
			<p>Menschzentrierte Systeme</p>
			<p>Europäische Verantwortung</p>
			<p>Technologische Exzellenz</p>
		</nav>

		<!-- Kontakt -->
		<nav>
			<h6 class="footer-title">Kontakt</h6>
			<a href="mailto:kontakt@rieger-systems.eu" class="flex items-center gap-1">
				<Mail class="h-4 w-4" /> kontakt@rieger-systems.eu
			</a>
			<p class="flex items-center gap-1">
				<Globe class="h-4 w-4" /> Europa-basiert
			</p>
			<p class="flex items-center gap-1">
				<ShieldCheck class="h-4 w-4" /> DSGVO-konform
			</p>
		</nav>

		<!-- Rechtliches -->
		<nav>
			<h6 class="footer-title">Rechtliches</h6>
			<a class="link link-hover" href="/imprint">Impressum</a>
			<a class="link link-hover" href="/privacy-policy">Datenschutzerklärung</a>
		</nav>
	</footer>

	<div class="text-base-content/50 mt-4 mb-6 text-center text-xs">
		© {new Date().getFullYear()} Rieger Systems GmbH · Alle Rechte vorbehalten.
	</div>
</div>
