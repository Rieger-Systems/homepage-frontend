// ~/data/statistics/amarawell/prevalence.js

export default {
  data: [23.4, 2.25, 1.9, 112, 1030], // in Millionen
  percent: [27.8, 25, 22, 25, 13], // Prozentangaben
  years: [2022, 2022, 2022, 2022, 2022],
  sources: [
    {
      key: "dgppn",
      url: "https://www.dgppn.de/schwerpunkte/psychische-gesundheit/psychische-erkrankungen.html",
    },
    {
      key: "oecd",
      url: "https://www.euro.who.int/en/countries/austria/data-and-statistics",
    },
    {
      key: "obsan",
      url: "https://www.obsan.admin.ch/sites/default/files/publications/2017/obsan_bulletin_2017-02_d.pdf",
    },
    {
      key: "who",
      url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
    },
    {
      key: "eurostat",
      url: "https://ec.europa.eu/eurostat/databrowser/view/tps00001/default/table?lang=en",
    },
    {
      key: "worldbank",
      url: "https://data.worldbank.org/indicator/SP.POP.TOTL",
    },
  ],
};
