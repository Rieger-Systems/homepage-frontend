<script lang="ts">
	import { Mail, Globe, ShieldCheck } from 'lucide-svelte';
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';

	$: t = $locale === 'en' ? en : de;
</script>

<div class="bg-base-200 border-base-300 border-t">
	<footer
		class="footer sm:footer-horizontal text-base-content container mx-auto max-w-screen-xl p-10"
	>
		<!-- Logo & Statement -->
		<aside>
			<img src="/short-logo.jpg" alt="Rieger Logo" class="mb-2 w-36 rounded-2xl" />
			<p>
				<strong class="text-lg">{t.footer.company.title}</strong><br />
				{t.footer.company.desc}<br />
				{t.footer.company.tagline}
			</p>
		</aside>

		<!-- Werte -->
		<nav>
			<h6 class="footer-title">{t.footer.values.title}</h6>
			{#each t.footer.values.items as item}
				<p>{item}</p>
			{/each}
		</nav>

		<!-- Kontakt -->
		<nav>
			<h6 class="footer-title">{t.footer.contact.title}</h6>
			<a href="mailto:{t.footer.contact.email}" class="flex items-center gap-1">
				<Mail class="h-4 w-4" />
				{t.footer.contact.email}
			</a>
			<p class="flex items-center gap-1">
				<Globe class="h-4 w-4" />
				{t.footer.contact.location}
			</p>
			<p class="flex items-center gap-1">
				<ShieldCheck class="h-4 w-4" />
				{t.footer.contact.dsgvo}
			</p>
		</nav>

		<!-- Rechtliches -->
		<nav>
			<h6 class="footer-title">{t.footer.legal.title}</h6>
			<a class="link link-hover" href="/imprint">{t.footer.legal.imprint}</a>
			<a class="link link-hover" href="/privacy-policy">{t.footer.legal.privacy}</a>
		</nav>
	</footer>

	<div class="text-base-content/50 mt-4 mb-6 text-center text-xs">
		© {new Date().getFullYear()} Rieger Systems GmbH · {t.footer.copyright}
	</div>
</div>
