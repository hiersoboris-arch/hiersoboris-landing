// Les livres blancs délivrés contre un lead : pages Notion publiques + textes du
// formulaire et de l'API. Ajouter un livret = ajouter une entrée ici, créer sa
// page sous /livres-blancs, et ajouter sa valeur au select "Livre blanc" de la
// base Notion "Leads · Livre blanc" (les valeurs doivent correspondre exactement).

export type LivretSlug = "kit-alternance" | "cout-alternant";

export type Livret = {
  slug: LivretSlug;
  titre: string;
  // Page Notion publique, délivrée après le formulaire (et par email).
  url: string;
  // Valeur écrite dans la propriété select "Livre blanc" de la base Notion.
  notionSelect: string;
  // Valeur par défaut de la colonne Source si le client n'en envoie pas.
  sourceDefaut: string;
  // Registre d'adresse : "tu" pour les étudiants, "vous" pour les dirigeants.
  registre: "tu" | "vous";
  profilDefaut: "Étudiant" | "École" | "Entreprise";
  // Ce que contient le livret, affiché à côté du formulaire.
  contenu: string[];
  // Textes du formulaire (côté client).
  ui: {
    cta: string;
    ouvrir: string;
    succesTitre: string;
    succes: string;
    aideEmail: string;
    labelNewsletter: string;
    labelContact: string;
    noteTel: string;
    // Mention RGPD affichée sous le bouton, jusqu'à "en écrivant à" (le
    // formulaire ajoute le mailto et le lien vers /rgpd).
    consentement: string;
  };
  // Messages de validation renvoyés par l'API.
  erreurs: {
    prenom: string;
    nom: string;
    email: string;
    emailInvalide: string;
    telManquant: string;
    telIncomplet: string;
  };
};

export const LIVRETS: Record<LivretSlug, Livret> = {
  "kit-alternance": {
    slug: "kit-alternance",
    titre: "Décroche ton alternance",
    url: "https://formation-boris-ha.notion.site/D-croche-ton-alternance-39c28a764b9780d591f9e6f12df1fb9f",
    notionSelect: "Kit alternance",
    sourceDefaut: "hiersoboris.fr/alternance",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "Les 8 réponses d'entretien à préparer : pitch 30 secondes, forces, défauts, prétentions salariales, projet à 3 ans",
      "La règle des 3 KPIs par expérience, et comment transformer un job étudiant en argument commercial",
      "Ton CV en deux versions : ATS pour les grands groupes, visuel pour les start-ups",
      "Un mini-CRM de candidatures à monter en 2 minutes",
      "La méthode des 3C pour transformer un non en discussion, et les bons horaires pour appeler un recruteur",
      "LinkedIn optimisé en 12 points, plus un template de préparation à dupliquer",
    ],
    ui: {
      cta: "Recevoir le kit",
      ouvrir: "Ouvrir le kit",
      succesTitre: "C'est à toi.",
      succes:
        "Le kit s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Garde-le, la page est mise à jour régulièrement.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (placement, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir le kit », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer le kit et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
    },
    erreurs: {
      prenom: "Indique ton prénom.",
      nom: "Indique ton nom.",
      email: "Indique ton adresse mail.",
      emailInvalide: "Cette adresse mail ne semble pas valide.",
      telManquant: "Ajoute ton numéro : c'est par téléphone que je rappelle.",
      telIncomplet: "Ce numéro ne semble pas complet.",
    },
  },
  "cout-alternant": {
    slug: "cout-alternant",
    titre: "Combien coûte vraiment un alternant en 2026",
    url: "https://formation-boris-ha.notion.site/Combien-co-te-vraiment-un-alternant-en-2026-3a428a764b97815a9154efa99456a91a",
    notionSelect: "Coût alternant 2026",
    sourceDefaut: "hiersoboris.fr/livres-blancs/cout-alternant",
    registre: "vous",
    profilDefaut: "Entreprise",
    contenu: [
      "Les grilles de rémunération 2026 : pourcentages du SMIC par âge et année de contrat, et le piège du salaire conventionnel",
      "L'aide de l'État jusqu'à 5 000 €, versée chaque mois avant la paie, et les aides Agefiph cumulables",
      "Trois exemples chiffrés, aides déduites : BTS, Master en 1re année, Master en 2e année",
      "Recruter un profil de plus de 30 ans : dérogations d'âge et contrat de professionnalisation",
      "Stage, périodes d'essai, participation formation de 750 € : ce qui change d'un contrat à l'autre",
      "Vos démarches dans l'ordre, avec les délais qui font perdre plusieurs milliers d'euros",
    ],
    ui: {
      cta: "Recevoir le guide",
      ouvrir: "Ouvrir le guide",
      succesTitre: "C'est à vous.",
      succes:
        "Le guide s'ouvre juste en dessous, et je viens aussi de vous envoyer le lien par mail. Gardez-le : la page est mise à jour à chaque changement réglementaire.",
      aideEmail: "Votre adresse pro ou perso, comme vous préférez.",
      labelNewsletter:
        "Je souhaite recevoir les prochains livres blancs par email dès leur sortie. En août, cela peut aller jusqu'à un par jour ; désinscription en un clic depuis n'importe quel email.",
      labelContact:
        "Je souhaite que Boris me recontacte (recrutement d'un alternant, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : votre numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et vous recevez aussi le lien par mail. En cliquant sur « Recevoir le guide », vous acceptez que Boris Hierso Alphandéry conserve ces informations pour vous envoyer le guide et, si vous l'avez demandé, vous recontacter au sujet du recrutement d'un alternant. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Vous pouvez y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
    },
    erreurs: {
      prenom: "Indiquez votre prénom.",
      nom: "Indiquez votre nom.",
      email: "Indiquez votre adresse mail.",
      emailInvalide: "Cette adresse mail ne semble pas valide.",
      telManquant: "Ajoutez votre numéro : c'est par téléphone que je rappelle.",
      telIncomplet: "Ce numéro ne semble pas complet.",
    },
  },
};

export function getLivret(slug: unknown): Livret {
  if (typeof slug === "string" && slug in LIVRETS) return LIVRETS[slug as LivretSlug];
  return LIVRETS["kit-alternance"];
}

// Compat : le kit historique, encore importé par /alternance.
export const KIT_URL = LIVRETS["kit-alternance"].url;
export const KIT_CONTENU = LIVRETS["kit-alternance"].contenu;
