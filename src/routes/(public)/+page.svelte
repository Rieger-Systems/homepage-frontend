<script lang="ts">
	import { Sections } from '$components/sections';
	import LazySection from '$lib/components/LazySection.svelte';
</script>

<svelte:component this={Sections.Hero} />

<LazySection load={() => import('$components/sections/Now.svelte')} />
<LazySection load={() => import('$components/sections/Values.svelte')} />
<LazySection load={() => import('$components/sections/WeBuild.svelte')} />
<LazySection load={() => import('$components/sections/Contact.svelte')} />
