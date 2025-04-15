<script lang="ts">
	import { locale } from '$lib/stores/locale';
	// Abonniert den aktuellen Locale-Wert
	$: currentLang = $locale;
</script>

<header
	class="border-base-200 bg-base-100/80 fixed top-0 left-0 z-[9999] w-full shadow-sm backdrop-blur"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-3" aria-label="Startseite">
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
				class="link link-hover"
				aria-label="Sprache auf Deutsch umstellen"
				aria-current={currentLang === 'de' ? 'page' : undefined}
			>
				<span class={currentLang === 'de' ? 'font-bold underline' : ''}>DE</span>
			</button>
			<span class="text-base-content/40">|</span>
			<button
				on:click={() => {
					locale.set('en');
					localStorage.setItem('lang', 'en');
				}}
				class="link link-hover"
				aria-label="Switch language to English"
				aria-current={currentLang === 'en' ? 'page' : undefined}
			>
				<span class={currentLang === 'en' ? 'font-bold underline' : ''}>EN</span>
			</button>
		</nav>
	</div>
</header>
