<script lang="ts">
	import { locale } from '$lib/stores/locale';
</script>

<header
	class="border-base-200 bg-base-100/80 fixed top-0 left-0 z-[9999] w-full shadow-sm backdrop-blur"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-3">
			<span class="text-base-content hidden text-base font-semibold tracking-wide sm:inline">
				Rieger Systems
			</span>
		</a>

		<nav class="flex items-center gap-4 text-sm">
			<button
				on:click={() => {
					locale.set('de');
					localStorage.setItem('lang', 'de');
				}}
				class={`link link-hover ${$locale === 'de' ? 'font-bold underline' : ''}`}
			>
				DE
			</button>
			<span class="text-base-content/40">|</span>
			<button
				on:click={() => {
					locale.set('en');
					localStorage.setItem('lang', 'en');
				}}
				class={`link link-hover ${$locale === 'en' ? 'font-bold underline' : ''}`}
			>
				EN
			</button>
		</nav>
	</div>
</header>
