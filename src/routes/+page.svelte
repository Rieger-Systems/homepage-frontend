<script lang="ts">
	let count = 0;
</script>

<div class="bg-base-200 min-h-screen p-10">
	<h1 class="text-primary mb-6 text-center text-3xl font-bold">DaisyUI & Tailwind Test</h1>

	<div class="flex flex-col items-center space-y-4">
		<button class="btn btn-primary" on:click={() => count++}> DaisyUI Button – Klick mich! </button>

		<div class="bg-neutral text-neutral-content rounded-lg p-4 shadow-md">
			<p class="text-lg">Tailwind Utility Box</p>
			<p class="text-sm opacity-75">Anzahl Klicks: {count}</p>
		</div>
	</div>
</div>
