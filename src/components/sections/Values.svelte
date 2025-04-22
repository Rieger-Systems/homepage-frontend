<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { de } from '$lib/i18n/de';
	import { en } from '$lib/i18n/en';
	import FadeInOnScroll from '$lib/components/FadeInOnScroll.svelte';
	import { ShieldCheck, ServerCog, Scale } from 'lucide-svelte';

	interface ValueItem {
		title: string;
		text: string;
		icon: keyof typeof icons; // Ensure the icon string is a valid key
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
		<div class="mx-auto mb-16 max-w-5xl text-center">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
				{t.values.title}
			</h2>
			<p class="text-base-content/80 mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
				{t.values.lead}
			</p>
		</div>

		<div class="grid w-full max-w-6xl gap-8 md:grid-cols-3">
			{#each t.values.items as item (item.title)}
				<div
					class="bg-base-200 rounded-xl p-8 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
				>
					{#if icons[item.icon as keyof typeof icons]}
						<div class="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
							<svelte:component
								this={icons[item.icon as keyof typeof icons]}
								class="text-primary h-6 w-6"
								aria-hidden="true"
							/>
						</div>
					{/if}
					<h3 class="mb-3 text-lg leading-tight font-semibold">{item.title}</h3>
					<p class="text-base-content/70 text-sm leading-relaxed">{item.text}</p>
				</div>
			{/each}
		</div>

		<div class="mx-auto mt-20 max-w-2xl text-center">
			<p class="text-base-content/60 text-sm italic">{t.values.closing}</p>
		</div>
	</FadeInOnScroll>
</section>
