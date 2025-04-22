<script lang="ts">
	import ModalWrapper from '$lib/components/ModalWrapper.svelte';
	import { Settings } from 'lucide-svelte';

	export let color: string;
	export let particleCount: number;
	export let autoRotate: boolean;
	export let autoRotateSpeed: number;

	let show = false;

	let localColor: string;
	let localParticleCount: number;
	let localAutoRotate: boolean;
	let localAutoRotateSpeed: number;

	function openPanel() {
		localColor = color;
		localParticleCount = particleCount;
		localAutoRotate = autoRotate;
		localAutoRotateSpeed = autoRotateSpeed;
		show = true;
	}

	function applyChanges() {
		color = localColor;
		particleCount = localParticleCount;
		autoRotate = localAutoRotate;
		autoRotateSpeed = localAutoRotateSpeed;
		show = false;
	}
</script>

<!-- ⚙️ Trigger -->
<div class="absolute top-2 left-2 z-40">
	<button
		class="btn btn-sm btn-circle btn-ghost hover:bg-base-300"
		title="Visualisierung konfigurieren"
		on:click={openPanel}
	>
		<Settings
			class="text-primary h-5 w-5 transition-transform hover:rotate-12"
			stroke-width="2.5"
		/>
	</button>
</div>

<!-- 🧱 Modal -->
<ModalWrapper open={show} onClose={() => (show = false)}>
	<h3 class="text-base-content mb-6 text-lg font-bold tracking-tight">Visualisierung</h3>

	<!-- Farbe -->
	<div class="form-control mb-5">
		<label class="label">
			<span class="label-text text-sm font-medium">Farbe</span>
		</label>
		<div class="flex items-center gap-3">
			<input
				type="color"
				bind:value={localColor}
				class="border-base-300 h-9 w-16 cursor-pointer rounded border bg-transparent"
			/>
			<div
				class="border-base-content/30 h-4 w-4 rounded-full border"
				style="background-color: {localColor};"
			></div>
		</div>
	</div>

	<!-- Auto-Rotation -->
	<div class="form-control mb-5">
		<div class="label justify-between">
			<span class="label-text text-sm font-medium">Auto-Rotation</span>
			<input
				type="checkbox"
				defaultChecked
				class="checkbox bg-primary"
				bind:checked={localAutoRotate}
			/>
		</div>
	</div>

	<!-- Speed -->
	<div class="form-control mb-5">
		<label class="label">
			<span class="label-text text-sm font-medium">Drehgeschwindigkeit</span>
			<span class="label-text-alt text-base-content/50 text-xs">
				{typeof localAutoRotateSpeed === 'number' ? localAutoRotateSpeed.toFixed(4) : '–'}
			</span>
		</label>
		<input
			type="range"
			min="0"
			max="0.01"
			step="0.0005"
			bind:value={localAutoRotateSpeed}
			class="range range-xs accent-primary"
		/>
	</div>

	<!-- Partikel -->
	<div class="form-control mb-5">
		<label class="label">
			<span class="label-text text-sm font-medium">Partikelanzahl</span>
			<span class="label-text-alt text-base-content/50 text-xs">
				{typeof localParticleCount === 'number' ? localParticleCount : '–'}
			</span>
		</label>
		<input
			type="range"
			min="50"
			max="500"
			step="10"
			bind:value={localParticleCount}
			class="range range-xs accent-primary primary"
		/>
	</div>

	<!-- Aktionen -->
	<div class="flex justify-end gap-2 pt-4">
		<button class="btn btn-sm btn-primary" on:click={applyChanges}> Übernehmen </button>
		<button class="btn btn-sm btn-ghost" on:click={() => (show = false)}> Abbrechen </button>
	</div>
</ModalWrapper>
