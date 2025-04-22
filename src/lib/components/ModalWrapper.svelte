<script lang="ts">
	export let open = false;
	export let onClose;
</script>

{#if open}
	<!-- Overlay -->
	<div
		class="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center"
	>
		<!-- Modal Box -->
		<div class="bg-base-100 w-full max-w-sm rounded-xl p-6 shadow-xl sm:mx-auto sm:mb-0">
			<slot />
		</div>
	</div>
{/if}
