<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';

	$: t = $locale === 'en' ? en : de;
</script>

<section
	id="now"
	class="bg-base-100 text-base-content flex min-h-screen snap-start items-center px-6 py-24"
>
	<div class="mx-auto w-full max-w-6xl">
		<FadeInOnScroll>
			<h2 class="mb-16 text-center text-4xl font-bold tracking-tight">{t.now.title}</h2>

			<div class="grid gap-10 md:grid-cols-2">
				<!-- AmaraCall -->
				<div
					class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
				>
					<span class="badge badge-info mb-3">{t.now.projects.amaracall.badge}</span>
					<h3 class="mb-2 text-xl font-semibold">{t.now.projects.amaracall.title}</h3>
					<p class="text-base-content/80 mb-4">{t.now.projects.amaracall.desc}</p>
					<a href="/" class="btn btn-sm btn-primary">{t.now.projects.amaracall.button}</a>
				</div>

				<!-- A.M.A.R.A. -->
				<div
					class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
				>
					<span class="badge badge-accent mb-3">{t.now.projects.amara.badge}</span>
					<h3 class="mb-2 text-xl font-semibold">{t.now.projects.amara.title}</h3>
					<p class="text-base-content/80">{t.now.projects.amara.desc}</p>
				</div>

				<!-- Interne Infrastruktur -->
				<div
					class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
				>
					<span class="badge badge-warning mb-3">{t.now.projects.infrastructure.badge}</span>
					<h3 class="mb-2 text-xl font-semibold">{t.now.projects.infrastructure.title}</h3>
					<p class="text-base-content/80">{t.now.projects.infrastructure.desc}</p>
				</div>

				<!-- AmaraWell -->
				<div
					class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
				>
					<span class="badge badge-accent mb-3">{t.now.projects.amarawell.badge}</span>
					<h3 class="mb-2 text-xl font-semibold">{t.now.projects.amarawell.title}</h3>
					<p class="text-base-content/80">{t.now.projects.amarawell.desc}</p>
				</div>
			</div>
		</FadeInOnScroll>
	</div>
</section>
