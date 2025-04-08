<script lang="ts">
	import AiVisualization from '../threejs/AiVisualization.svelte';
</script>

<section
	class="rounded-box border-base-300 bg-base-200 relative mt-20 overflow-hidden border shadow-md"
>
	<!-- Hintergrund-Visual -->
	<div class="pointer-events-none absolute inset-0 opacity-20">
		<AiVisualization />
	</div>

	<!-- Inhalt -->
	<div class="relative z-10 px-6 py-16 pt-100 text-center">
		<p class="text-base-content/60 mb-2 text-sm tracking-wide uppercase">Powered by</p>
		<h2 class="text-primary text-2xl font-bold">A.M.A.R.A</h2>
		<p class="text-base-content/80 mx-auto mt-2 max-w-xl text-base">
			Unsere menschenzentrierte KI - verantwortungsvoll, lokal betrieben und tief integriert in
			alles, was wir tun.
		</p>
	</div>
</section>
