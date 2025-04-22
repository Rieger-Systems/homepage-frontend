<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';
	import { ShieldCheck, ServerCog, Scale } from 'lucide-svelte';

	interface ValueItem {
		title: string;
		text: string;
		icon: keyof typeof icons;
	}

	const icons = {
		shield: ShieldCheck,
		server: ServerCog,
		scale: Scale
	};

	$: t = $locale === 'en' ? en : de;
</script>

<section
	id="values"
	class="bg-base-100 text-base-content flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 sm:px-8 lg:px-16"
>
	<FadeInOnScroll once>
		<!-- Headline & Lead -->
		<div class="mx-auto mb-20 max-w-5xl text-center">
			<h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
				{t.values.title}
			</h2>
			<p class="text-base-content/80 mx-auto mt-4 max-w-2xl text-lg leading-relaxed">
				{t.values.lead}
			</p>
		</div>

		<!-- Value Cards -->
		<div class="grid w-full max-w-6xl gap-10 md:grid-cols-3">
			{#each t.values.items as item (item.title)}
				<article
					class="group bg-base-200 ring-base-300/20 hover:ring-primary/30 rounded-2xl p-8 shadow-md ring-1 transition-all duration-300 hover:shadow-xl"
				>
					<!-- Icon Badge -->
					{#if icons[item.icon as keyof typeof icons]}
						<div
							class="bg-primary/10 mb-6 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
						>
							<div class="tooltip" data-tip={item.title}>
								<svelte:component
									this={icons[item.icon as keyof typeof icons]}
									class="text-primary h-7 w-7"
									aria-hidden="true"
								/>
							</div>
						</div>
					{/if}

					<h3
						class="group-hover:text-primary mb-3 text-lg leading-tight font-semibold transition-colors duration-200"
					>
						{item.title}
					</h3>
					<p class="text-base-content/70 text-sm leading-relaxed">
						{item.text}
					</p>
				</article>
			{/each}
		</div>

		<!-- Footer Note -->
		<div class="mx-auto mt-24 max-w-2xl text-center">
			<p class="text-base-content/60 text-sm italic">{t.values.closing}</p>
		</div>
	</FadeInOnScroll>
</section>
