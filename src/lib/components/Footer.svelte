<script lang="ts">
	import { Mail, Globe, ShieldCheck } from 'lucide-svelte';
</script>

<footer
	class="footer sm:footer-horizontal bg-base-200 text-base-content border-base-300 border-t p-10"
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
		<a class="link link-hover">Datenschutz & Transparenz</a>
		<a class="link link-hover">Menschzentrierte Systeme</a>
		<a class="link link-hover">Europäische Verantwortung</a>
		<a class="link link-hover">Technologische Exzellenz</a>
	</nav>

	<!-- Kontakt -->
	<nav>
		<h6 class="footer-title">Kontakt</h6>
		<a class="link link-hover flex items-center gap-1">
			<Mail class="h-4 w-4" /> kontakt@riegersystems.eu
		</a>
		<a class="link link-hover flex items-center gap-1">
			<Globe class="h-4 w-4" /> Europa-basiert
		</a>
		<a class="link link-hover flex items-center gap-1">
			<ShieldCheck class="h-4 w-4" /> DSGVO-konform
		</a>
	</nav>

	<!-- Rechtliches -->
	<nav>
		<h6 class="footer-title">Rechtliches</h6>
		<a class="link link-hover" href="/impressum">Impressum</a>
		<a class="link link-hover" href="/datenschutz">Datenschutzerklärung</a>
		<a class="link link-hover" href="/nutzungsbedingungen">Nutzungsbedingungen</a>
	</nav>
</footer>

<div class="text-base-content/50 mt-4 mb-6 text-center text-xs">
	© {new Date().getFullYear()} Rieger Systems GmbH · Alle Rechte vorbehalten.
</div>
