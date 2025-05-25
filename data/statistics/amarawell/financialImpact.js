export default {
  title: "Jährliche Kosten psychischer Erkrankungen pro Person",
  labels: ["Deutschland", "Österreich", "Schweiz", "EU", "Weltweit"],
  data: [764, 1244, 2370, 1100, 131], // In €
  unit: "€ pro Jahr",
  years: [2022, 2022, 2022, 2022, 2022],
  sources: [
    {
      name: "OECD/EU Health at a Glance, 2022",
      url: "https://www.oecd-ilibrary.org/sites/10e09f8d-en/index.html?itemId=/content/component/10e09f8d-en#section-d1e24449",
    },
    {
      name: "BAG/Obsan, Schweiz, 2022",
      url: "https://www.obsan.admin.ch/sites/default/files/publications/2022/obsan_bulletin_2022-04_d.pdf",
    },
    {
      name: "WHO, 2022 (Welt)",
      url: "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response",
    },
  ],
  explanation:
    "Die jährlichen Kosten psychischer Erkrankungen pro Person betragen in Deutschland rund 764 €, in Österreich 1.244 €, in der Schweiz sogar etwa 2.370 €. Der EU-Durchschnitt liegt bei 1.100 €, weltweit sind es ca. 130 €. Die Kosten umfassen sowohl direkte medizinische Behandlung als auch Produktivitätsausfälle und andere indirekte Belastungen.",
  note: "In der Schweiz sind die Kosten besonders hoch, da hier die Gesundheitsausgaben und das Lohnniveau über dem EU-Durchschnitt liegen. Weltweit variieren die Kosten sehr stark je nach Land und Einkommensniveau.",
};
