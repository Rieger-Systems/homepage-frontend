<template>
  <form class="space-y-6" @submit.prevent="handleSubmit" novalidate>
    <!-- Name -->
    <div class="form-control">
      <label for="name" class="label font-medium">Name</label>
      <input
        id="name"
        type="text"
        v-model="form.name"
        class="input input-bordered w-full"
        placeholder="Max Mustermann"
        required
        autocomplete="name"
      />
    </div>

    <!-- E-Mail -->
    <div class="form-control">
      <label for="email" class="label font-medium">E-Mail</label>
      <input
        id="email"
        type="email"
        v-model="form.email"
        class="input input-bordered w-full"
        placeholder="max@beispiel.at"
        required
        autocomplete="email"
      />
    </div>

    <!-- Nachricht -->
    <div class="form-control">
      <label for="message" class="label font-medium">Nachricht</label>
      <textarea
        id="message"
        v-model="form.message"
        class="textarea textarea-bordered w-full min-h-[140px]"
        placeholder="Worum geht's?"
        required
        autocomplete="off"
      />
    </div>

    <!-- Datenschutz + Hinweis -->
    <div class="space-y-3 text-sm text-gray-500 mt-4">
      <label class="cursor-pointer flex items-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary mt-1"
          v-model="form.consent"
        />
        <span>
          Ich habe die
          <NuxtLink to="/privacy" class="underline text-primary">
            Datenschutzerklärung
          </NuxtLink>
          gelesen und stimme der Verarbeitung meiner Angaben zu.
        </span>
      </label>

      <!-- Hinweis auf aktuellen Zustand -->
      <p class="leading-snug">
        Aktuell öffnet das Formular dein E-Mail-Programm. Eine direkte
        Übermittlung wird bald ergänzt.
      </p>

      <!-- Fallback-Kontakt -->
      <p>
        Alternativ:
        <a
          href="mailto:kontakt@rieger-systems.eu"
          class="underline text-primary"
        >
          kontakt@rieger-systems.eu
        </a>
      </p>

      <!-- Fehleranzeige -->
      <p v-if="errorMessage" class="text-error text-sm text-center">
        {{ errorMessage }}
      </p>
    </div>

    <!-- Submit -->
    <div class="pt-4">
      <button class="btn btn-primary btn-block font-semibold" type="submit">
        Nachricht senden
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  name: "",
  email: "",
  message: "",
  consent: false,
});

const errorMessage = ref("");

function handleSubmit() {
  if (!form.consent) {
    errorMessage.value = "Bitte bestätige die Datenschutzerklärung.";
    return;
  }

  errorMessage.value = "";

  const subject = encodeURIComponent(`Kontaktanfrage von ${form.name}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nE-Mail: ${form.email}\n\nNachricht:\n${form.message}\n\n[✓] Absender hat der Datenschutzerklärung zugestimmt.`
  );
  const mailtoLink = `mailto:kontakt@rieger-systems.eu?subject=${subject}&body=${body}`;

  const link = document.createElement("a");
  link.href = mailtoLink;
  link.target = "_blank";
  link.click();

  // Felder zurücksetzen
  form.name = "";
  form.email = "";
  form.message = "";
  form.consent = false;
}
</script>
