<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import { Mail } from 'lucide-svelte';
	import { Sections } from '$components/sections';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';

	// Reaktive Übersetzung basierend auf der aktuellen Locale
	$: t = $locale === 'en' ? en : de;
	$: Footer = Sections.Footer;

	// Konstante E-Mail-Adresse
	const email = 'kontakt@rieger-systems.eu';
</script>

<section id="contact" class="bg-base-100 text-base-content flex min-h-screen snap-start flex-col">
	<div class="mx-auto flex max-w-2xl flex-1 flex-col justify-center px-6 py-12 text-center">
		<FadeInOnScroll once>
			<h2 class="mb-6 text-3xl font-semibold">{t.contact.title}</h2>
			<p class="text-base-content/80 mb-8 text-lg">
				{t.contact.text} <strong>{email}</strong>.
			</p>
			<div class="mt-6">
				<a
					href={`mailto:${email}`}
					class="btn btn-primary flex items-center gap-2 transition-all duration-200"
					aria-label={`E-Mail senden an ${email}`}
				>
					<Mail class="h-5 w-5" />
					{t.contact.button}
				</a>
			</div>
		</FadeInOnScroll>
	</div>

	<svelte:component this={Footer} />
</section>
