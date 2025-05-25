export default {
  title: "Jährlich Betroffene (12-Monats-Prävalenz) – DACH, EU & weltweit",
  labels: ["Deutschland", "Österreich", "Schweiz", "EU", "Weltweit"],
  data: [23.4, 2.25, 1.9, 112, 1030], // in Millionen
  percent: [27.8, 25, 22, 25, 13], // Prozentangaben
  unit: "Mio.",
  unitPercent: "%",
  years: [2022, 2022, 2022, 2022, 2022],
  sources: [
    {
      name: "DGPPN, 2022 (Deutschland)",
      url: "https://www.dgppn.de/schwerpunkte/psychische-gesundheit/psychische-erkrankungen.html",
    },
    {
      name: "OECD/European Observatory, 2021 (Österreich)",
      url: "https://www.euro.who.int/en/countries/austria/data-and-statistics",
    },
    {
      name: "Obsan Bulletin 2/2017 (Schweiz)",
      url: "https://www.obsan.admin.ch/sites/default/files/publications/2017/obsan_bulletin_2017-02_d.pdf",
    },
    {
      name: "WHO, 2022 (EU & Welt)",
      url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
    },
    {
      name: "Eurostat, 2022 (Bevölkerung EU)",
      url: "https://ec.europa.eu/eurostat/databrowser/view/tps00001/default/table?lang=en",
    },
    {
      name: "World Bank, 2022 (Weltbevölkerung)",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
    },
  ],
  explanation:
    "Die Grafik zeigt, wie viele Menschen jährlich (12-Monats-Prävalenz) in Deutschland, Österreich, der Schweiz, der gesamten EU und weltweit mindestens einmal an einer psychischen Erkrankung leiden – sowohl in Millionen als auch prozentual zur Bevölkerung.",
  note: "Alle Zahlen sind Näherungswerte und basieren auf offiziellen Prävalenzschätzungen und aktuellen Bevölkerungszahlen. Unterschiede in Diagnosemethoden und Erhebungsjahr können leichte Abweichungen verursachen.",
};
