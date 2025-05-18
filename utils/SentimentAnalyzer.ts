// utils/SentimentAnalyzer.ts

export type SentimentResult = {
  label: "Positiv" | "Negativ" | "Neutral" | "Unsicher";
  emoji: string;
  score: number;
  detail: string;
};

// Verstärker, die die Wertung intensivieren
const intensifiers = [
  "sehr",
  "extrem",
  "total",
  "wirklich",
  "echt",
  "absolut",
  "besonders",
  "mega",
  "ultra",
];

// Schwächer ("etwas", "ein bisschen") – für Zukunft/Bonus
// const weakeners = ["etwas", "ein bisschen", "leicht", "kaum"];

// Sarkasmus-Phrasen, die ein positives Wort negativ machen können
const sarcasmPatterns = [
  /super.*nicht/i,
  /klasse.*nicht/i,
  /richtig gut.*nicht/i,
  /toll.*nicht/i,
  /genial.*nicht/i,
  /na klar/i,
  /herzlichen glückwunsch/i,
];

// Typische Konjunktion für "aber..."-Wendungen
const contrastWords = ["aber", "jedoch", "allerdings", "dennoch", "trotzdem"];

const positiveWords = [
  "danke",
  "super",
  "gluecklich",
  "glücklich",
  "zufrieden",
  "toll",
  "gut",
  "prima",
  "liebe",
  "stark",
  "positiv",
  "begeistert",
  "genial",
  "empfohlen",
  "schoen",
  "schön",
  "hilfreich",
  "freundlich",
  "top",
  "empfehlen",
  "exzellent",
  "hervorragend",
  "perfekt",
  "ausgezeichnet",
  "kompetent",
  "schnell",
  "zuverlässig",
  "fair",
  "begeisterung",
  "lob",
  "zugewandt",
  "empfehlenswert",
];

const negativeWords = [
  "schlecht",
  "problem",
  "traurig",
  "unzufrieden",
  "stress",
  "wut",
  "boese",
  "böse",
  "haesslich",
  "hässlich",
  "negativ",
  "kritik",
  "enttäuscht",
  "enttaeuscht",
  "mist",
  "fehler",
  "genervt",
  "schrecklich",
  "alarm",
  "warnung",
  "langsam",
  "ignoriert",
  "unfreundlich",
  "unzuverlässig",
  "schwach",
  "ärgerlich",
  "kritisiert",
  "hass",
  "enttäuschung",
  "katastrophe",
  "nervig",
  "nervt",
  "unverschämt",
  "furchtbar",
  "mangelhaft",
  "ausfall",
  "abzocke",
  "dreck",
  "grausam",
];

const negationWords = ["nicht", "kein", "keine", "wenig", "nie", "niemals"];

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss");
}

// Hilfsfunktion: Satzweises Analysieren, für "aber"-Kontraste
function splitSentences(text: string): string[] {
  // Trennt an . ! ? und an "aber"/"jedoch"/usw. (beibehalten)
  return text
    .replace(/[\.\!\?]/g, "|")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function analyzeSentiment(text: string): SentimentResult {
  // 1. Check auf Sarkasmus
  for (const pattern of sarcasmPatterns) {
    if (pattern.test(text)) {
      return {
        label: "Negativ",
        emoji: "🙃",
        score: -2,
        detail:
          "Sarkasmus/Phrasen erkannt – positives Wort durch Negation aufgehoben.",
      };
    }
  }

  // 2. Satzweise analysieren, "aber"/"jedoch" stärker gewichten
  const norm = normalizeText(text);
  const sentences = splitSentences(norm);

  let globalScore = 0;
  let globalPos = 0;
  let globalNeg = 0;
  let details: string[] = [];

  for (let s = 0; s < sentences.length; s++) {
    let sentence = sentences[s];

    // Kontraste: Wenn "aber", "jedoch" usw. vorkommen, nach "aber" analysieren und vorher abwerten
    let contrastFound = false;
    for (const contrast of contrastWords) {
      if (sentence.includes(` ${contrast} `)) {
        const parts = sentence.split(` ${contrast} `);
        // Alles nach "aber" ist entscheidend!
        sentence = parts[parts.length - 1];
        contrastFound = true;
        details.push(
          `Kontrast erkannt ("${contrast}"): Nach dem Kontrast bewertet.`
        );
        break;
      }
    }

    // Tokenisiere
    const tokens = sentence.split(/\s+/).filter(Boolean);

    let posScore = 0;
    let negScore = 0;
    let lastIntensifier = 1;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      // Intensifier (starke Bewertung)
      if (intensifiers.includes(token)) {
        lastIntensifier = 2;
        continue;
      }

      // Verneinungserkennung
      let isNegated = false;
      if (i > 0 && negationWords.includes(tokens[i - 1])) isNegated = true;
      if (i > 1 && negationWords.includes(tokens[i - 2])) isNegated = true;

      // Sentiment-Wertung
      if (positiveWords.includes(token)) {
        if (isNegated) {
          negScore += lastIntensifier;
          details.push(
            `"${tokens
              .slice(Math.max(0, i - 2), i + 1)
              .join(" ")}" als negativ erkannt (Verneinung).`
          );
        } else {
          posScore += lastIntensifier;
          details.push(
            `"${token}" als positiv${
              lastIntensifier > 1 ? " (verstärkt)" : ""
            } erkannt.`
          );
        }
        lastIntensifier = 1;
      } else if (negativeWords.includes(token)) {
        if (isNegated) {
          posScore += lastIntensifier;
          details.push(
            `"${tokens
              .slice(Math.max(0, i - 2), i + 1)
              .join(" ")}" als positiv erkannt (Verneinung).`
          );
        } else {
          negScore += lastIntensifier;
          details.push(
            `"${token}" als negativ${
              lastIntensifier > 1 ? " (verstärkt)" : ""
            } erkannt.`
          );
        }
        lastIntensifier = 1;
      }
    }

    // Satz mit Kontrast: Wertung verstärken
    if (contrastFound) {
      posScore *= 2;
      negScore *= 2;
      details.push(`Kontrast-Wertung verstärkt (nach "aber", "jedoch" etc.).`);
    }

    globalPos += posScore;
    globalNeg += negScore;
    globalScore += posScore - negScore;
  }

  // Gesamteinschätzung
  let label: SentimentResult["label"];
  let emoji: string;
  let score = globalScore;

  if (globalPos === 0 && globalNeg === 0) {
    label = "Neutral";
    emoji = "🤔";
    details.push("Keine typischen Stimmungswörter erkannt.");
  } else if (globalPos > 0 && globalNeg === 0) {
    label = "Positiv";
    emoji = globalPos > 2 ? "😃" : "🙂";
    details.push(`Mehr positive als negative Wörter (${globalPos}x positiv).`);
  } else if (globalNeg > 0 && globalPos === 0) {
    label = "Negativ";
    emoji = globalNeg > 2 ? "😡" : "🙁";
    details.push(`Mehr negative als positive Wörter (${globalNeg}x negativ).`);
  } else if (Math.abs(globalScore) <= 1) {
    label = "Unsicher";
    emoji = "😐";
    details.push(
      `Sowohl positive als auch negative Wörter erkannt (Positiv: ${globalPos}, Negativ: ${globalNeg}).`
    );
  } else if (globalScore > 1) {
    label = "Positiv";
    emoji = "🙂";
    details.push(
      `Leicht positiv (Positiv: ${globalPos}, Negativ: ${globalNeg}, Score: ${globalScore}).`
    );
  } else {
    label = "Negativ";
    emoji = "🙁";
    details.push(
      `Leicht negativ (Positiv: ${globalPos}, Negativ: ${globalNeg}, Score: ${globalScore}).`
    );
  }

  // Zeige Hauptgrund im Detail
  return {
    label,
    emoji,
    score,
    detail: details.join(" "),
  };
}
