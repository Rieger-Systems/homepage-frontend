<script lang="ts">
	import { en } from '$lib/i18n/en';
</script>

<section
	id="now"
	class="bg-base-100 text-base-content flex min-h-screen snap-start items-center px-6 py-24"
>
	<div class="mx-auto w-full max-w-6xl">
		<h2 class="mb-16 text-center text-4xl font-bold tracking-tight">{en.now.title}</h2>

		<div class="grid gap-10 md:grid-cols-2">
			<!-- AmaraCall -->
			<div
				class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
			>
				<span class="badge badge-info mb-3">{en.now.projects.amaracall.badge}</span>
				<h3 class="mb-2 text-xl font-semibold">{en.now.projects.amaracall.title}</h3>
				<p class="text-base-content/80 mb-4">{en.now.projects.amaracall.desc}</p>
				<a href="/" class="btn btn-sm btn-primary">{en.now.projects.amaracall.button}</a>
			</div>

			<!-- A.M.A.R.A. -->
			<div
				class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
			>
				<span class="badge badge-accent mb-3">{en.now.projects.amara.badge}</span>
				<h3 class="mb-2 text-xl font-semibold">{en.now.projects.amara.title}</h3>
				<p class="text-base-content/80">{en.now.projects.amara.desc}</p>
			</div>

			<!-- Infrastructure -->
			<div
				class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
			>
				<span class="badge badge-warning mb-3">{en.now.projects.infrastructure.badge}</span>
				<h3 class="mb-2 text-xl font-semibold">{en.now.projects.infrastructure.title}</h3>
				<p class="text-base-content/80">{en.now.projects.infrastructure.desc}</p>
			</div>

			<!-- AmaraWell -->
			<div
				class="bg-base-200 hover:bg-base-300 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
			>
				<span class="badge badge-accent mb-3">{en.now.projects.amarawell.badge}</span>
				<h3 class="mb-2 text-xl font-semibold">{en.now.projects.amarawell.title}</h3>
				<p class="text-base-content/80">{en.now.projects.amarawell.desc}</p>
			</div>
		</div>
	</div>
</section>
