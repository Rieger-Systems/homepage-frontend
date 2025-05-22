<template>
  <form class="space-y-6" @submit.prevent="handleSubmit" novalidate>
    <div v-motion="'fade-bottom'" :delay="50" class="form-control">
      <label for="name" class="label font-medium">{{
        t("contact.form.nameLabel")
      }}</label>
      <input
        id="name"
        type="text"
        v-model="form.name"
        class="input input-bordered w-full"
        :placeholder="t('contact.form.namePlaceholder')"
        required
        autocomplete="name"
      />
    </div>

    <div v-motion="'fade-bottom'" :delay="100" class="form-control">
      <label for="email" class="label font-medium">{{
        t("contact.form.emailLabel")
      }}</label>
      <input
        id="email"
        type="email"
        v-model="form.email"
        class="input input-bordered w-full"
        placeholder="max@mustermann.com"
        required
        autocomplete="email"
      />
    </div>

    <div v-motion="'fade-bottom'" :delay="150" class="form-control">
      <label for="message" class="label font-medium">{{
        t("contact.form.messageLabel")
      }}</label>
      <textarea
        id="message"
        v-model="form.message"
        class="textarea textarea-bordered w-full min-h-[140px]"
        :placeholder="t('contact.form.messagePlaceholder')"
        required
        autocomplete="off"
      />
    </div>

    <div
      v-motion="'fade-bottom'"
      :delay="200"
      class="space-y-3 text-sm text-gray-500 mt-4"
    >
      <label class="cursor-pointer flex items-start gap-3">
        <input
          type="checkbox"
          class="checkbox checkbox-primary mt-1"
          v-model="form.consent"
        />
        <span>
          {{ t("contact.form.privacyConsentPart1") }}
          <NuxtLink :to="localePath('/privacy')" class="underline text-primary">
            {{ t("contact.form.privacyConsentLink") }}
          </NuxtLink>
          {{ t("contact.form.privacyConsentPart2") }}
        </span>
      </label>

      <p class="leading-snug">
        {{ t("contact.form.currentEmailClientInfo") }}
      </p>

      <p>
        {{ t("contact.form.alternative") }}
        <a
          :href="`mailto:${AppConfig.contact.email}`"
          class="underline text-primary"
        >
          {{ AppConfig.contact.email }}
        </a>
      </p>

      <p v-if="errorMessage" class="text-error text-sm text-center">
        {{ errorMessage }}
      </p>
    </div>

    <div v-motion="'fade-bottom'" :delay="250" class="pt-4">
      <button class="btn btn-primary btn-block font-semibold" type="submit">
        {{ t("contact.form.sendButton") }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"; // reactive und ref importieren
import { useI18n } from "vue-i18n"; // useI18n importieren
import { AppConfig } from "~/config/app.config"; // AppConfig importieren
import { useLocalePath } from "#i18n";

const { t } = useI18n();
const localePath = useLocalePath();

const form = reactive({
  name: "",
  email: "",
  message: "",
  consent: false,
});

const errorMessage = ref("");

function handleSubmit() {
  if (!form.consent) {
    errorMessage.value = t("contact.form.errorConsentRequired"); // Fehlermeldung übersetzen
    return;
  }

  errorMessage.value = "";

  // Die Mailto-Link-Generierung verwendet jetzt auch übersetzte Teile
  const subject = encodeURIComponent(
    `${t("contact.form.subjectPrefix")} ${form.name}`
  );
  const body = encodeURIComponent(
    `${t("contact.form.mailBodyPrefix")}: ${form.name}\n${t(
      "contact.form.mailBodyEmail"
    )}: ${form.email}\n\n${t("contact.form.mailBodyMessage")}:\n${
      form.message
    }\n\n${t("contact.form.mailBodyConsent")}`
  );
  const mailtoLink = `mailto:${AppConfig.contact.email}?subject=${subject}&body=${body}`; // E-Mail aus AppConfig

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
