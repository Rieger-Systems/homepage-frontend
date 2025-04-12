<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';

	$: t = $locale === 'en' ? en : de;
</script>

<svelte:head>
	<title>{t.legalPages.privacy.title} | Rieger Systems</title>
	<meta
		name="description"
		content={$locale === 'de'
			? 'Datenschutzerklärung von Rieger Systems e.U. - Erfahren Sie, wie wir mit Ihren Daten umgehen.'
			: 'Privacy Policy of Rieger Systems e.U. - Learn how we handle your data.'}
	/>
</svelte:head>

<section class="prose mx-auto max-w-3xl px-4 py-12">
	<h1>{t.legalPages.privacy.title}</h1>
	{@html t.legalPages.privacy.content}
</section>
