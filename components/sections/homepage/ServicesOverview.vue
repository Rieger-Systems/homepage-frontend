<template>
  <section class="py-16 bg-base-200">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-semibold">Unsere Leistungen</h2>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4"
    >
      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h3 class="card-title">Hosting</h3>
          <p>Selbstbestimmtes, DSGVO-konformes App-Hosting</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h3 class="card-title">Webentwicklung</h3>
          <p>Maßgeschneiderte Frontends – schnell, klar, responsiv</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h3 class="card-title">Softwareentwicklung</h3>
          <p>APIs & Backends – dokumentiert & modular</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h3 class="card-title">KI-Systeme</h3>
          <p>Erklärbare, ethische KI – kein Tracking, keine Blackbox</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <NuxtLink to="/products" class="btn btn-secondary"
        >Zu den Produkten</NuxtLink
      >
    </div>
  </section>
</template>
