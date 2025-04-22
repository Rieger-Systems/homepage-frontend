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
	}

	$: t = $locale === 'en' ? en : de;

	$: projects = Object.entries(t.projects).map(
		([slug, project]): Project => ({
			...project,
			slug
		})
	);
</script>

<section
	id="now"
	class="bg-base-100 text-base-content flex min-h-screen snap-start items-center px-6 py-24 sm:px-8 lg:px-16"
>
	<div class="mx-auto w-full max-w-7xl">
		<FadeInOnScroll once>
			<h2 class="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
				{t.now.title}
			</h2>

			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects as project (project.slug)}
					<div
						class="group bg-base-200 hover:bg-primary/5 relative rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
					>
						<div class="p-6">
							{#if project.badge}
								<span
									class="badge badge-sm badge-outline mb-3 text-xs font-semibold tracking-wider"
									aria-label="Badge"
								>
									{project.badge}
								</span>
							{/if}

							<h3 class="mb-2 text-lg leading-tight font-semibold">{project.title}</h3>
							<p class="text-base-content/70 text-sm leading-relaxed">{project.desc}</p>
						</div>

						{#if project.button}
							<div class="p-6 pt-0">
								<a
									href={`/projects/${project.slug}`}
									class="btn btn-sm btn-primary self-start opacity-80 transition-opacity duration-200 group-hover:scale-105 group-hover:opacity-100"
									aria-label={`Zum Projekt ${project.title}`}
								>
									{project.button}
								</a>
							</div>
						{/if}
					</div>
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
