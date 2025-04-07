<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { tick } from 'svelte';

	const dispatch = createEventDispatcher();

	let name = '';
	let email = '';
	let message = '';
	let consent = false;
	let honeypot = '';
	let showSuccess = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		if (!name || !email || !message || !consent || honeypot.trim().length > 0) return;

		dispatch('submit', { name, email, message });
		showSuccess = true;
		await tick();

		setTimeout(() => (showSuccess = false), 5000);

		name = '';
		email = '';
		message = '';
		consent = false;
		honeypot = '';
	}
</script>

<section id="kontakt" class="bg-base-200 text-base-content px-6 py-20">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="mb-6 text-3xl font-semibold">Kontakt aufnehmen</h2>
		<p class="text-base-content/80 mb-8">
			Sie möchten mit uns sprechen oder ein Projekt anfragen? Schreiben Sie uns – wir freuen uns auf
			Ihre Nachricht.
		</p>

		{#if showSuccess}
			<div class="alert alert-success mb-6 shadow-lg">
				<span>Vielen Dank für Ihre Nachricht – wir melden uns in Kürze!</span>
			</div>
		{/if}

		<form class="grid gap-4 text-left" on:submit|preventDefault={handleSubmit}>
			<!-- Honeypot field (hidden from users) -->
			<input type="text" bind:value={honeypot} class="hidden" tabindex="-1" autocomplete="off" />

			<div>
				<label class="label">
					<span class="label-text">Name</span>
				</label>
				<input
					bind:value={name}
					type="text"
					placeholder="Ihr Name"
					class="input input-bordered w-full"
					required
				/>
			</div>

			<div>
				<label class="label">
					<span class="label-text">E-Mail</span>
				</label>
				<input
					bind:value={email}
					type="email"
					placeholder="Ihre E-Mail-Adresse"
					class="input input-bordered w-full"
					required
				/>
			</div>

			<div>
				<label class="label">
					<span class="label-text">Nachricht</span>
				</label>
				<textarea
					bind:value={message}
					placeholder="Ihre Nachricht..."
					class="textarea textarea-bordered w-full"
					rows="5"
					required
				></textarea>
			</div>

			<div class="form-control">
				<label class="label cursor-pointer">
					<input
						bind:checked={consent}
						type="checkbox"
						class="checkbox checkbox-primary"
						required
					/>
					<span class="label-text ml-3">
						Ich habe die <a href="#" class="link link-hover">Datenschutzerklärung</a> gelesen und akzeptiere
						sie.
					</span>
				</label>
			</div>

			<button
				type="submit"
				class="btn btn-primary mt-4"
				disabled={!name || !email || !message || !consent}
			>
				Absenden
			</button>
		</form>
	</div>
</section>
