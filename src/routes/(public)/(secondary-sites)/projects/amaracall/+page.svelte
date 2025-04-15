<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import { Mail } from 'lucide-svelte';

	// Reaktive Übersetzung
	$: t = $locale === 'en' ? en : de;
	$: project = t.projects.amaracall;
</script>

<svelte:head>
	<title>{project.title} | Rieger Systems</title>
	<meta name="description" content={project.lead || project.desc} />
</svelte:head>

<section class="prose prose-lg prose-neutral mx-auto max-w-3xl px-6 py-16">
	<!-- Titel & Badge -->
	<header>
		<h1 class="mb-2 text-4xl font-bold text-balance">{project.title}</h1>
		{#if project.badge}
			<span
				class="badge badge-outline badge-primary mb-4 inline-block text-xs tracking-wide uppercase"
			>
				{project.badge}
			</span>
		{/if}
	</header>

	<!-- Lead -->
	{#if project.lead}
		<blockquote
			class="bg-base-200 text-base-content/80 mt-4 rounded-lg px-4 py-3 italic shadow-inner"
		>
			{project.lead}
		</blockquote>
	{/if}

	<!-- Hauptbeschreibung -->
	<article class="mt-8 space-y-5">
		{@html project.description}
	</article>

	<!-- Status -->
	{#if project.status}
		<aside class="border-primary mt-14 border-l-4 pl-4">
			<h2 class="text-xl font-semibold">{project.status.title}</h2>
			<div class="text-base-content/80 mt-2 space-y-4">
				{@html project.status.text}
			</div>
		</aside>
	{/if}

	<!-- Call-to-Action -->
	<div class="bg-primary/5 border-primary mt-16 rounded-xl border p-6">
		<h3 class="text-primary text-lg font-semibold">{project.ctaTitle}</h3>
		<p class="text-base-content/80 mb-4">{project.ctaText}</p>
		<a
			href="mailto:kontakt@rieger-systems.eu?subject=Kooperationsanfrage%20AmaraCall"
			class="btn btn-primary"
			aria-label="Send email regarding AmaraCall cooperation inquiry"
		>
			<Mail class="mr-2 h-4 w-4" />
			{project.ctaButton}
		</a>
	</div>

	<!-- Rücksprung zur Übersicht -->
	<div class="mt-10">
		<a href="/" class="btn btn-outline">
			{$locale === 'en' ? '← Back to Homepage' : '← Zurück zur Startseite'}
		</a>
	</div>
</section>
