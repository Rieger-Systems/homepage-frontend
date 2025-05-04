<template>
  <!-- Kontaktformular -->
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <!-- Name -->
    <div class="form-control">
      <label class="label font-medium">Name</label>
      <input
        type="text"
        v-model="form.name"
        class="input w-full border border-primary/30 focus:border-primary focus:outline-none"
        placeholder="Max Mustermann"
        required
      />
    </div>

    <!-- E-Mail -->
    <div class="form-control">
      <label class="label font-medium">E-Mail</label>
      <input
        type="email"
        v-model="form.email"
        class="input w-full border border-primary/30 focus:border-primary focus:outline-none"
        placeholder="max@beispiel.at"
        required
      />
    </div>

    <!-- Nachricht -->
    <div class="form-control">
      <label class="label font-medium">Nachricht</label>
      <textarea
        v-model="form.message"
        class="textarea w-full border border-primary/30 focus:border-primary focus:outline-none min-h-[140px]"
        placeholder="Worum geht’s?"
        required
      />
    </div>

    <!-- Datenschutz -->
    <div class="form-control">
      <label class="cursor-pointer flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          class="checkbox checkbox-primary mt-1"
          v-model="form.consent"
          required
        />
        <span>
          Ich habe die
          <NuxtLink to="/privacy" class="underline text-primary">
            Datenschutzerklärung
          </NuxtLink>
          gelesen und stimme der Verarbeitung meiner Daten zu.
        </span>
      </label>
    </div>

    <!-- Button + Feedback -->
    <div class="space-y-3 pt-2">
      <button class="btn btn-primary btn-block font-semibold" type="submit">
        Nachricht absenden
      </button>

      <transition name="fade">
        <div
          v-if="success"
          class="flex items-center gap-3 text-sm bg-success/10 border border-success/40 text-success px-4 py-3 rounded-lg shadow-sm"
        >
          <svg
            class="w-5 h-5 text-success shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span
            >Vielen Dank! Deine Nachricht wurde erfolgreich übermittelt.</span
          >
        </div>
      </transition>

      <transition name="fade">
        <div
          v-if="error"
          class="flex items-center gap-3 text-sm bg-error/10 border border-error/40 text-error px-4 py-3 rounded-lg shadow-sm"
        >
          <svg
            class="w-5 h-5 text-error shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span
            >Leider ist ein Fehler aufgetreten. Bitte versuche es erneut.</span
          >
        </div>
      </transition>
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

const success = ref(false);
const error = ref(false);

function handleSubmit() {
  try {
    console.log("Formulardaten:", { ...form });
    success.value = true;
    error.value = false;

    // Reset nach 5 Sekunden
    setTimeout(() => (success.value = false), 5000);

    // Felder zurücksetzen
    Object.assign(form, {
      name: "",
      email: "",
      message: "",
      consent: false,
    });
  } catch (e) {
    success.value = false;
    error.value = true;
  }
}
</script>
