// Diagnostic "Où en est ta machine commerciale ?" : 10 questions, 3 réponses
// chacune (0, 1 ou 2 points), score sur 20, 3 niveaux de résultat.
// Partagé entre la page /diagnostic (client) et l'API (calcul du score côté
// serveur : le client n'envoie que les indices de réponses).

export type Question = {
  q: string;
  // 3 options, dans l'ordre 0 / 1 / 2 points.
  options: [string, string, string];
};

export const QUESTIONS: Question[] = [
  {
    q: "Comment tes nouveaux clients arrivent-ils ?",
    options: [
      "Bouche-à-oreille uniquement",
      "Un peu de prospection, quand on a le temps",
      "Prospection régulière, outillée et mesurée",
    ],
  },
  {
    q: "Sais-tu précisément à qui tu vends ?",
    options: [
      "On vend à qui veut bien acheter",
      "Une cible en tête, jamais formalisée",
      "ICP et personas documentés, connus de toute l'équipe",
    ],
  },
  {
    q: "À quoi ressemble ton pipeline ?",
    options: [
      "Il n'y en a pas vraiment",
      "Un tableau tenu à la main, plus ou moins à jour",
      "Un CRM à jour, avec des étapes et des règles claires",
    ],
  },
  {
    q: "Peux-tu prédire ton chiffre d'affaires à 3 mois ?",
    options: [
      "Aucune idée",
      "Une intuition, souvent optimiste",
      "Un forecast pondéré, revu régulièrement",
    ],
  },
  {
    q: "Connais-tu tes taux de conversion ?",
    options: [
      "Non",
      "En gros, de tête",
      "Suivis par étape, du premier contact au closing",
    ],
  },
  {
    q: "Comment se passe un cycle de vente chez toi ?",
    options: [
      "Chacun vend à sa façon",
      "Des habitudes communes, rien d'écrit",
      "Un process documenté, appliqué et amélioré",
    ],
  },
  {
    q: "Ton outillage commercial ?",
    options: [
      "Excel, les emails et la mémoire",
      "Un CRM basique, sous-exploité",
      "CRM propre + automatisations qui tournent seules",
    ],
  },
  {
    q: "Et l'IA dans ta vente ?",
    options: [
      "Pas utilisée",
      "ChatGPT de temps en temps",
      "Intégrée au quotidien : ciblage, emails, préparation de RDV",
    ],
  },
  {
    q: "Les relances de prospects ?",
    options: [
      "On oublie souvent",
      "Au feeling, quand on y pense",
      "Une cadence définie : rien ne tombe entre les mailles",
    ],
  },
  {
    q: "Si ton meilleur vendeur part demain ?",
    options: [
      "Catastrophe : tout est dans sa tête",
      "On s'en remettrait, en quelques mois",
      "La machine continue de tourner : tout est documenté",
    ],
  },
];

export type Niveau = {
  min: number;
  titre: string;
  texte: string;
  recos: [string, string, string];
};

// Ordre décroissant : le premier niveau dont `min` est atteint s'applique.
export const NIVEAUX: Niveau[] = [
  {
    min: 15,
    titre: "Machine qui tourne",
    texte:
      "Ta vente repose sur un système, pas sur des individus. Le prochain palier : l'augmenter à l'IA pour vendre plus sans recruter plus, et la rendre totalement transmissible.",
    recos: [
      "Automatise le ciblage et l'enrichissement (signaux d'intention, scoring) pour concentrer l'humain sur les RDV",
      "Mets l'IA sur les tâches à faible valeur : préparation de RDV, comptes-rendus, relances personnalisées",
      "Documente la machine au point qu'un nouveau soit opérationnel en une semaine",
    ],
  },
  {
    min: 8,
    titre: "Machine en construction",
    texte:
      "Des briques existent, mais elles ne forment pas encore un système : la performance dépend encore trop des personnes et de l'énergie du moment.",
    recos: [
      "Formalise ton ICP et ton process de vente en un document que toute l'équipe applique",
      "Passe d'un pipeline suivi à la main à un CRM avec étapes, règles et taux de conversion mesurés",
      "Installe une cadence de prospection et de relance hebdomadaire, non négociable",
    ],
  },
  {
    min: 0,
    titre: "Vente artisanale",
    texte:
      "Ta vente repose sur le talent et le bouche-à-oreille : ça marche jusqu'au jour où ça s'arrête. La bonne nouvelle : c'est le stade où structurer rapporte le plus vite.",
    recos: [
      "Commence par écrire à qui tu vends (ICP) et pourquoi ils achètent : une page suffit",
      "Mets en place un pipeline simple (même un tableau à 5 colonnes) et tiens-le à jour chaque semaine",
      "Bloque 2 créneaux de prospection par semaine dans l'agenda, avant tout le reste",
    ],
  },
];

export const SCORE_MAX = QUESTIONS.length * 2;

export function calculerScore(reponses: number[]): number | null {
  if (reponses.length !== QUESTIONS.length) return null;
  let score = 0;
  for (const r of reponses) {
    if (r !== 0 && r !== 1 && r !== 2) return null;
    score += r;
  }
  return score;
}

export function niveauPour(score: number): Niveau {
  return NIVEAUX.find((n) => score >= n.min) ?? NIVEAUX[NIVEAUX.length - 1];
}
