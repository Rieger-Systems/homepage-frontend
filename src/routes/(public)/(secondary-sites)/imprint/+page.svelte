<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';

	$: t = $locale === 'en' ? en : de;
</script>

<svelte:head>
	<title>{t.legalPages.imprint.title} | Rieger Systems</title>
	<meta
		name="description"
		content={$locale === 'de'
			? 'Impressum von Rieger Systems e.U. - Software- und KI-Entwicklung in Tirol, Österreich.'
			: 'Legal disclosure for Rieger Systems e.U.  Software and AI development based in Tyrol, Austria.'}
	/>
</svelte:head>

<section class="prose mx-auto max-w-3xl px-4 py-12">
	<h1>{t.legalPages.imprint.title}</h1>
	{@html t.legalPages.imprint.content}
</section>
