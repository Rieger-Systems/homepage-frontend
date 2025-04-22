<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';

	interface Project {
		title: string;
		desc: string;
		badge?: string;
		button?: string;
		slug: string;
		badgeSlug: string;
	}

	$: t = $locale === 'en' ? en : de;

	$: projects = Object.entries(t.projects).map(
		([slug, project]): Project => ({
			...project,
			slug
		})
	);
	export function getBadgeStyle(slug: string): string {
		const normalized = slug.toLowerCase().trim();

		const map: Record<string, string> = {
			// Deine aktuellen Projekte
			'partner-wanted': 'badge-info',
			concept: 'badge-accent',
			'in-progress': 'badge-warning',

			// Zusätzlich nützliche Slugs für spätere Projekte
			alpha: 'badge-secondary',
			beta: 'badge-primary',
			released: 'badge-success',
			legacy: 'badge-error',
			'on-hold': 'badge-ghost',
			experimental: 'badge-outline'
		};

		return map[normalized] ?? 'badge-outline';
	}
</script>

<section
	id="now"
	class="bg-base-100 text-base-content flex min-h-screen snap-start items-center px-6 py-24 sm:px-8 lg:px-16"
>
	<div class="mx-auto w-full max-w-7xl">
		<FadeInOnScroll once>
			<h2 class="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
				{t.now.title}
			</h2>

			<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects as project (project.slug)}
					<article
						class="group bg-base-200 ring-base-300/30 hover:bg-base-300 relative flex flex-col justify-between rounded-2xl p-6 shadow-md ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<!-- Badge oben rechts -->
						{#if project.badge}
							<span
								class={`badge badge-sm absolute top-4 right-4 font-medium tracking-wide ${getBadgeStyle(project.badgeSlug)}`}
								aria-label="Status-Badge"
							>
								{project.badge}
							</span>
						{/if}

						<div class="flex-1">
							<h3
								class="group-hover:text-primary mb-2 text-lg leading-snug font-semibold transition-colors duration-200 group-hover:underline"
							>
								{project.title}
							</h3>
							<p class="text-base-content/70 text-sm leading-relaxed">{project.desc}</p>
						</div>

						{#if project.button}
							<a
								href={`/projects/${project.slug}`}
								class="btn btn-sm btn-primary mt-6 w-fit opacity-90 transition-all duration-200 group-hover:scale-105 group-hover:opacity-100"
								aria-label={`Zum Projekt ${project.title}`}
							>
								{project.button}
							</a>
						{/if}
					</article>
				{/each}
			</div>
		</FadeInOnScroll>
	</div>
</section>

<style>
	.badge-outline {
		color: var(--color-primary);
		border-color: var(--color-primary);
		background-color: transparent;
	}
</style>
