<script lang="ts">
	import { Sections } from '$components/sections';
	import { locale } from '$lib/stores/locale';
	import { derived } from 'svelte/store';

	const current = derived(locale, ($locale) => Sections[$locale] ?? Sections['de']);
</script>

<svelte:component this={$current.Hero} />
<svelte:component this={$current.Now} />
<svelte:component this={$current.Values} />
<svelte:component this={$current.WeBuild} />
<svelte:component this={$current.Contact} />
