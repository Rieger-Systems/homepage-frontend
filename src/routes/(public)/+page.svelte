<script lang="ts">
	import { Sections } from '$components/sections';
	import LazySection from '$lib/components/LazySection.svelte';
</script>

<!-- Hero direkt laden -->
<svelte:component this={Sections.Hero} />

<!-- Lazy-Load die anderen Sections -->
<LazySection load={() => import('$components/sections').then(m => ({ default: m.Sections.Now }))} />
<LazySection
	load={() => import('$components/sections').then(m => ({ default: m.Sections.Values }))}
/>
<LazySection
	load={() => import('$components/sections').then(m => ({ default: m.Sections.WeBuild }))}
/>
<LazySection
	load={() => import('$components/sections').then(m => ({ default: m.Sections.Contact }))}
/>
