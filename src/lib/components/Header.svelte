<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import { navigationLinks } from '$lib/config/navigation';
	import { page } from '$app/state';

	let open = false;
</script>

<header class="bg-base-100 border-base-200 sticky top-0 z-50 border-b shadow-sm">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Branding -->
		<a href="/" class="flex items-center gap-3">
			<span class="text-base-content hidden text-base font-semibold tracking-wide sm:inline">
				Rieger Systems
			</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="text-base-content/70 hidden gap-6 text-sm md:flex">
			{#each navigationLinks as { path, label }}
				<a
					href={path}
					class="link link-hover transition-colors {page.url.pathname.startsWith(path)
						? 'text-primary font-semibold'
						: ''}"
					aria-current={page.url.pathname === path ? 'page' : undefined}
				>
					{label}
				</a>
			{/each}
		</nav>

		<!-- Mobile Toggle -->
		<button class="md:hidden" on:click={() => (open = !open)} aria-label="Menü öffnen">
			<Menu class="text-base-content h-6 w-6" />
		</button>
	</div>

	<!-- Mobile Navigation -->
	{#if open}
		<nav class="bg-base-100 border-base-200 space-y-2 border-t px-6 pb-4 md:hidden">
			{#each navigationLinks as { path, label }}
				<a
					href={path}
					class="link link-hover block transition-colors {page.url.pathname.startsWith(path)
						? 'text-primary font-semibold'
						: ''}"
					aria-current={page.url.pathname === path ? 'page' : undefined}
				>
					{label}
				</a>
			{/each}
		</nav>
	{/if}
</header>
