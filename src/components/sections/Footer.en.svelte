<script lang="ts">
	import { Mail, Globe, ShieldCheck } from 'lucide-svelte';
	import { en } from '$lib/i18n/en';
</script>

<div class="bg-base-200 border-base-300 border-t">
	<footer
		class="footer sm:footer-horizontal text-base-content container mx-auto max-w-screen-xl p-10"
	>
		<!-- Logo & Statement -->
		<aside>
			<img src="/short-logo.jpg" alt="Rieger Logo" class="mb-2 w-36 rounded-2xl" />
			<p>
				<strong class="text-lg">{en.footer.company.title}</strong><br />
				{en.footer.company.desc}<br />
				{en.footer.company.tagline}
			</p>
		</aside>

		<!-- Values -->
		<nav>
			<h6 class="footer-title">{en.footer.values.title}</h6>
			{#each en.footer.values.items as item}
				<p>{item}</p>
			{/each}
		</nav>

		<!-- Contact -->
		<nav>
			<h6 class="footer-title">{en.footer.contact.title}</h6>
			<a href="mailto:{en.footer.contact.email}" class="flex items-center gap-1">
				<Mail class="h-4 w-4" />
				{en.footer.contact.email}
			</a>
			<p class="flex items-center gap-1">
				<Globe class="h-4 w-4" />
				{en.footer.contact.location}
			</p>
			<p class="flex items-center gap-1">
				<ShieldCheck class="h-4 w-4" />
				{en.footer.contact.dsgvo}
			</p>
		</nav>

		<!-- Legal -->
		<nav>
			<h6 class="footer-title">{en.footer.legal.title}</h6>
			<a class="link link-hover" href="/imprint">{en.footer.legal.imprint}</a>
			<a class="link link-hover" href="/privacy-policy">{en.footer.legal.privacy}</a>
		</nav>
	</footer>

	<div class="text-base-content/50 mt-4 mb-6 text-center text-xs">
		© {new Date().getFullYear()} Rieger Systems GmbH · {en.footer.copyright}
	</div>
</div>
