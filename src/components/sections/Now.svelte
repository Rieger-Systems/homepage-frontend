<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';

	$: t = $locale === 'en' ? en : de;

	// Projekte extrahieren und in Array umwandeln
	$: projects = Object.entries(t.projects).map(([slug, project]) => ({
		...project,
		slug
	}));
</script>

<section
	id="now"
	class="bg-base-100 text-base-content flex min-h-screen snap-start items-center px-6 py-24"
>
	<div class="mx-auto w-full max-w-6xl">
		<FadeInOnScroll>
			<h2 class="mb-16 text-center text-4xl font-bold tracking-tight">{t.now.title}</h2>

			<div class="grid gap-10 md:grid-cols-2">
				{#each projects as project}
					<div
						class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
					>
						{#if project.badge}
							<span class="badge badge-info mb-3">{project.badge}</span>
						{/if}
						<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
						<p class="text-base-content/80 mb-4">{project.desc}</p>
						{#if 'button' in project && project.button}
							<a href="/{project.slug}" class="btn btn-sm btn-primary">{project.button}</a>
						{/if}
					</div>
				{/each}
			</div>
		</FadeInOnScroll>
	</div>
</section>
