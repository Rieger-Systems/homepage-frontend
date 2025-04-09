<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import Footer from './Footer.en.svelte';
	import { en } from '$lib/i18n/en';
</script>

<section id="contact" class="bg-base-100 text-base-content flex min-h-screen snap-start flex-col">
	<div class="mx-auto flex max-w-2xl flex-1 flex-col justify-center px-6 py-12 text-center">
		<h2 class="mb-6 text-3xl font-semibold">{en.contact.title}</h2>
		<p class="text-base-content/80 mb-8 text-lg">
			{en.contact.text} <strong>kontakt@rieger-systems.eu</strong>.
		</p>

		<div class="mt-6">
			<a
				href="mailto:kontakt@rieger-systems.eu"
				class="btn btn-primary flex items-center gap-2 transition-all duration-200"
			>
				<Mail class="h-5 w-5" />
				{en.contact.button}
			</a>
		</div>
	</div>

	<Footer />
</section>
