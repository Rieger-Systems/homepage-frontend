<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';

	// Definiere das Interface für ein Projekt
	interface Project {
		title: string;
		desc: string;
		badge?: string;
		button?: string;
		slug: string;
	}

	// Reaktive Übersetzungsobjekte anhand der aktuellen Locale
	$: t = $locale === 'en' ? en : de;

	// Extrahiere die Projekte aus den Übersetzungsdaten und verwandle sie in ein Array
	$: projects = Object.entries(t.projects).map(
		([slug, project]): Project => ({
			...project,
			slug
		})
	);
</script>

<section
	id="now"
	class="bg-base-100 text-base-content flex min-h-screen snap-start items-center px-6 py-24"
>
	<div class="mx-auto w-full max-w-6xl">
		<!-- FadeInOnScroll mit dem Parameter "once", sodass die Animation nur einmal abläuft -->
		<FadeInOnScroll once>
			<h2 class="mb-16 text-center text-4xl font-bold tracking-tight">
				{t.now.title}
			</h2>

			<div class="grid gap-10 md:grid-cols-2">
				{#each projects as project (project.slug)}
					<div
						class="bg-base-200 hover:bg-base-300 transform rounded-xl p-6 shadow-xl transition duration-300 hover:-translate-y-1"
					>
						{#if project.badge}
							<span class="badge badge-info mb-3" aria-label="Badge">
								{project.badge}
							</span>
						{/if}
						<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
						<p class="text-base-content/80 mb-4">{project.desc}</p>
						{#if project.button}
							<a
								href={`/projects/${project.slug}`}
								class="btn btn-sm btn-primary"
								aria-label={`Zum Projekt ${project.title}`}
							>
								{project.button}
							</a>
						{/if}
					</div>
				{/each}
			</div>
		</FadeInOnScroll>
	</div>
</section>
