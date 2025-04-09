<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';

	import { ShieldCheck, ServerCog, Scale } from 'lucide-svelte';

	const icons: Record<string, typeof ShieldCheck> = {
		shield: ShieldCheck,
		server: ServerCog,
		scale: Scale
	};

	$: t = $locale === 'en' ? en : de;
</script>

<section
	id="values"
	class="bg-base-100 text-base-content flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24"
>
	<FadeInOnScroll>
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-6 text-4xl font-bold tracking-tight">{t.values.title}</h2>
			<p class="text-base-content/80 mx-auto max-w-3xl text-lg leading-relaxed">{t.values.lead}</p>
		</div>

		<div class="mt-20 grid w-full max-w-6xl gap-10 md:grid-cols-3">
			{#each t.values.items as item}
				<div
					class="bg-base-200 rounded-xl p-6 text-left shadow-md transition-all duration-300 hover:shadow-lg"
				>
					<svelte:component this={icons[item.icon]} class="text-primary mb-4 h-8 w-8" />
					<h3 class="mb-2 text-lg font-semibold">{item.title}</h3>
					<p class="text-base-content/70 text-sm leading-relaxed">{item.text}</p>
				</div>
			{/each}
		</div>
		<div class="mx-auto mt-20 max-w-2xl text-center">
			<p class="text-base-content/60 text-sm italic">
				{t.values.closing}
			</p>
		</div>
	</FadeInOnScroll>
</section>
