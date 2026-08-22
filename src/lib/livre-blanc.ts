// Les livres blancs délivrés contre un lead : pages Notion publiques + textes du
// formulaire et de l'API. Ajouter un livret = ajouter une entrée ici, créer sa
// page sous /livres-blancs, et ajouter sa valeur au select "Livre blanc" de la
// base Notion "Leads · Livre blanc" (les valeurs doivent correspondre exactement).

export type LivretSlug =
  | "kit-alternance"
  | "cout-alternant"
  | "lettre-motivation"
  | "cv"
  | "page-reference"
  | "negociation-salaire"
  | "trouve-les-offres"
  | "metiers-de-la-vente"
  | "convaincre-entretien"
  | "fiche-de-poste"
  | "histoire-alternance";

export type Livret = {
  slug: LivretSlug;
  titre: string;
  // Date de publication (ISO), affichée sur le hub ; le plus récent porte le badge Nouveau.
  publie: string;
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
    publie: "2026-07-20",
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
  "negociation-salaire": {
    slug: "negociation-salaire",
    titre: "Négocie ton salaire sans te saborder",
    publie: "2026-08-11",
    url: "https://formation-boris-ha.notion.site/N-gocie-ton-salaire-sans-te-saborder-3b928a764b9781fc92cec1d8345162c7",
    notionSelect: "Négociation salaire",
    sourceDefaut: "hiersoboris.fr/livres-blancs/negociation-salaire",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "Le vocabulaire du package une fois pour toutes : fixe, variable, OTE, commission, equity, brut et net, et les pièges de chacun",
      "Les BSPCE enfin expliqués : vesting, cliff, prix d'exercice, les 7 questions à poser avant d'accepter, et la règle d'arbitrage fixe contre equity",
      "Ta fourchette en trois chiffres (plancher dur, cible, ancrage) et les sources à croiser pour la construire",
      "Le script en quatre temps pour annoncer un chiffre et le tenir, plus les 8 objections avec la réponse à chacune",
      "Alternant ou premier poste : pourquoi lâcher le fixe et aller chercher le variable, avec les ordres de grandeur qui passent",
      "Les 12 questions à poser sur un variable avant de signer, la réévaluation en poste, et les 7 pièges qui coûtent cher",
    ],
    ui: {
      cta: "Recevoir le guide",
      ouvrir: "Ouvrir le guide",
      succesTitre: "C'est à toi.",
      succes:
        "Le guide s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Garde-le sous la main avant chaque entretien.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (alternance, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir le guide », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer le guide et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
  "page-reference": {
    slug: "page-reference",
    titre: "Ta page de référence : ton autobiographie en KPIs",
    publie: "2026-08-10",
    url: "https://formation-boris-ha.notion.site/Ta-page-de-r-f-rence-ton-autobiographie-en-KPIs-3b128a764b97819eb89ce3235ca954ea",
    notionSelect: "Page de référence",
    sourceDefaut: "hiersoboris.fr/livres-blancs/page-reference",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "Pourquoi tu oublies ce que tu fais : l'oubli, le sentiment d'imposture (70 % de la population) et le travail de l'ombre que personne ne compte",
      "La règle qui rend la page utile : elle ne se partage jamais, c'est ta fiche de carrière et pas un document de candidature",
      "Ce qui en sort et où ça va : ton CV, ton profil LinkedIn, ta lettre, tes réponses en entretien, ta demande d'augmentation",
      "« Mais je n'ai rien à mettre » : le tableau de traduction pour infirmière, opérateur, jobs d'été, bénévolat, congé parental ou trois stages",
      "Le gabarit complet à dupliquer : pitch, compétences, preuves par expérience, fil rouge et formulations verrouillées",
      "Le prompt qui empêche ton IA d'inventer un chiffre, et l'exercice guidé pour construire ta page en 45 minutes",
    ],
    ui: {
      cta: "Recevoir le modèle",
      ouvrir: "Ouvrir le modèle",
      succesTitre: "C'est à toi.",
      succes:
        "Le modèle s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Duplique-le, il est fait pour être rempli.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (alternance, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir le modèle », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer le modèle et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
  cv: {
    slug: "cv",
    titre: "Rends ton CV impossible à rejeter",
    publie: "2026-08-06",
    url: "https://formation-boris-ha.notion.site/Rends-ton-CV-impossible-rejeter-37b28a764b978160985fd6942da85353",
    notionSelect: "CV",
    sourceDefaut: "hiersoboris.fr/livres-blancs/cv",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "Les deux routes de ton CV : ATS puis humain dans un grand groupe, humain seul en start-up et en approche directe, avec le tableau qui te dit laquelle des deux versions envoyer",
      "Ce que l'œil capte en 7 secondes : le titre à l'intitulé visé, l'accroche en vous, moi, nous, et où placer tes coordonnées",
      "Le tableau des KPIs commerciaux à aller chercher (résultat, efficacité, périmètre, activité, impact) et la règle du croisement échelle x pertinence",
      "Comment transformer un job étudiant en argument commercial, avec 5 exemples réécrits ligne à ligne",
      "Les verbes qui te cachent et ceux qui te montrent, plus la liste noire de ce qui te grille en une ligne",
      "Un CV par poste visé, illustré par mes trois CV réels, et les 3 prompts IA : diagnostic, réécriture chiffrée, double test ATS et humain",
    ],
    ui: {
      cta: "Recevoir la méthode",
      ouvrir: "Ouvrir la méthode",
      succesTitre: "C'est à toi.",
      succes:
        "La méthode s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Garde-le, la page est enrichie régulièrement.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (alternance, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir la méthode », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer la méthode et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
  "lettre-motivation": {
    slug: "lettre-motivation",
    titre: "La lettre de motivation qu'on lit jusqu'au bout",
    publie: "2026-08-05",
    url: "https://formation-boris-ha.notion.site/Lettre-de-motivation-3b128a764b9780ebb243c014492477cc",
    notionSelect: "Lettre de motivation",
    sourceDefaut: "hiersoboris.fr/livres-blancs/lettre-motivation",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "La structure AIDA posée sur vous, nous, moi : quatre blocs courts, une page max, une accroche qui parle d'eux avant de parler de toi",
      "Les 6 leviers d'une lettre vivante : l'histoire au microscope, le point de rencontre, l'émotion assumée, écrire comme tu parles",
      "La chasse aux formules carpette : le tableau des reformulations qui te remettent en position d'acteur (fini le « m'a permis de »)",
      "La liste noire : accroches bateau, adjectifs creux et politesses pompeuses qui te grillent en une ligne",
      "Le mail de motivation en 10 phrases, souvent préféré à la longue lettre par les recruteurs",
      "L'IA copilote et pas rédacteur : l'utiliser sans te faire repérer, plus l'exercice guidé en 3 étapes et ta grille d'auto-contrôle",
    ],
    ui: {
      cta: "Recevoir l'atelier",
      ouvrir: "Ouvrir l'atelier",
      succesTitre: "C'est à toi.",
      succes:
        "L'atelier s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Garde-le, la page est enrichie régulièrement.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (alternance, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir l'atelier », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer l'atelier et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
    publie: "2026-08-04",
    url: "https://formation-boris-ha.notion.site/Combien-co-te-vraiment-un-alternant-en-2026-3a428a764b97815a9154efa99456a91a",
    notionSelect: "Coût alternant 2026",
    sourceDefaut: "hiersoboris.fr/livres-blancs/cout-alternant",
    registre: "vous",
    profilDefaut: "Entreprise",
    contenu: [
      "Les grilles de rémunération 2026 : pourcentages du SMIC par âge et année de contrat, et le piège du salaire conventionnel",
      "L'aide de l'État, la 1re année seulement : de 2 000 € (Bac+3 à Bac+5) à 5 000 € (CAP, Bac) selon le diplôme et la taille d'entreprise, versée chaque mois avant la paie",
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
  "trouve-les-offres": {
    slug: "trouve-les-offres",
    titre: "Trouve les offres : cherche un job comme un commercial prospecte",
    publie: "2026-08-24",
    url: "https://formation-boris-ha.notion.site/3b928a764b97813ab8fdcc9bb393a445",
    notionSelect: "Trouve les offres",
    sourceDefaut: "hiersoboris.fr/livres-blancs/trouve-les-offres",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "Le vrai poids du marché caché : ce que disent l'Apec et la DARES, et les deux portes à ouvrir sur chaque entreprise",
      "La science des liens faibles (étude Science, 2022, 20 millions de personnes suivies) : pourquoi ton prochain poste viendra d'un contact lointain",
      "Les 6 canaux et ce que chacun rapporte vraiment, des job boards à la cooptation, avec les bonnes plateformes selon ce que tu cherches",
      "Ta liste de 50 entreprises nommées, classées en 3 groupes, et les 5 critères pour la construire",
      "Le mini-CRM en 6 colonnes pour ne plus perdre aucune relance, et le rythme d'une bonne semaine de recherche",
      "Automatiser sans devenir un robot : les 3 niveaux, le prompt de tri IA à copier, et la ligne rouge à ne jamais franchir",
    ],
    ui: {
      cta: "Recevoir le guide",
      ouvrir: "Ouvrir le guide",
      succesTitre: "C'est à toi.",
      succes:
        "Le guide s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Garde-le, il te sert toute la recherche.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (placement, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir le guide », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer le guide et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
  "metiers-de-la-vente": {
    slug: "metiers-de-la-vente",
    titre: "Les métiers de la vente décodés (et les vraies fourchettes 2026)",
    publie: "2026-08-25",
    url: "https://formation-boris-ha.notion.site/3b928a764b978130a16ddb0b7e22fb25",
    notionSelect: "Métiers de la vente 2026",
    sourceDefaut: "hiersoboris.fr/livres-blancs/metiers-de-la-vente",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "La chaîne de valeur commerciale en 6 étapes : générer, closer, développer, faire réussir, outiller, piloter, et les postes qui occupent chacune",
      "Le décodeur français / start-up : BDR, SDR, Account Executive, Account Manager, Key Account Manager, Head of Sales, et ce qui n'est pas exactement pareil",
      "Les 3 segments de closing (SMB, Mid-Market, Enterprise) et les métiers de l'ombre qui montent : Sales Ops, RevOps, Sales Engineer",
      "Les fourchettes réelles 2026, par poste et par séniorité, Paris et régions, tech et marché général (Smile Talent, Uptoo)",
      "Les 3 chemins d'évolution (expertise, management, construction) et ce que chacun demande vraiment",
      "Les 6 pièges de lecture d'une offre, du titre gonflé à l'OTE présenté comme un salaire",
    ],
    ui: {
      cta: "Recevoir le décodeur",
      ouvrir: "Ouvrir le décodeur",
      succesTitre: "C'est à toi.",
      succes:
        "Le décodeur s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Garde-le sous la main à chaque offre que tu lis.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (placement, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir le décodeur », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer le décodeur et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
  "convaincre-entretien": {
    slug: "convaincre-entretien",
    titre: "Convaincre en entretien : questions, cas pratiques et mises en situation",
    publie: "2026-08-26",
    url: "https://formation-boris-ha.notion.site/3b928a764b9781ccb336fccaa2d1e478",
    notionSelect: "Convaincre en entretien",
    sourceDefaut: "hiersoboris.fr/livres-blancs/convaincre-entretien",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "Ce que dit la science du recrutement (Schmidt, Sackett 2022) sur ce qui prédit vraiment ta performance, et pourquoi ça change ta préparation",
      "La fiche entreprise en 8 blocs, à faire en 4 moments précis, pour arriver préparé sans jamais réciter",
      "La méthode STAR sans la réciter, et les 3 erreurs qui tuent une réponse, avec le contre-exemple à chaque fois",
      "Les 20 questions classiques et costaud, ce qu'elles cherchent vraiment, et comment répondre à une question illégale sans te griller",
      "Le business case et la mise en situation : les 3 formats, la grille sur laquelle on te note, et 2 prompts pour t'entraîner seul",
      "Les questions à poser pour reprendre la main, et ce qu'on ne demande jamais au premier entretien",
    ],
    ui: {
      cta: "Recevoir le guide",
      ouvrir: "Ouvrir le guide",
      succesTitre: "C'est à toi.",
      succes:
        "Le guide s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. Relis-le la veille de ton prochain entretien.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (placement, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir le guide », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer le guide et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
  "fiche-de-poste": {
    slug: "fiche-de-poste",
    titre: "La fiche de poste qui attire : ma trame, commentée",
    publie: "2026-08-27",
    url: "https://formation-boris-ha.notion.site/3b928a764b97816c94f3de130518b496",
    notionSelect: "Fiche de poste qui attire",
    sourceDefaut: "hiersoboris.fr/livres-blancs/fiche-de-poste",
    registre: "vous",
    profilDefaut: "Entreprise",
    contenu: [
      "Les 12 blocs d'une fiche de poste qui filtre avant l'entretien plutôt qu'après, dans l'ordre qui fait la différence",
      "La date de démarrage, bien plus souple que vous ne croyez : la fenêtre légale de 6 mois et les 45 jours de période d'essai à ne pas laisser filer",
      "Afficher la rémunération : pourquoi cela rapporte 40 % de candidatures en plus, et comment construire un variable qui ne coûte que s'il rapporte",
      "Un exemple complet à copier, bloc par bloc, avec la grille de rémunération détaillée d'une alternance commerciale",
      "Ce qu'il faut enlever : les formules qui ne rapportent rien et les exigences incohérentes qui vous font perdre de bons profils",
      "Votre grille d'auto-contrôle en 12 points avant de publier",
    ],
    ui: {
      cta: "Recevoir la trame",
      ouvrir: "Ouvrir la trame",
      succesTitre: "C'est à vous.",
      succes:
        "La trame s'ouvre juste en dessous, et je viens aussi de vous envoyer le lien par mail. Gardez-la : elle sert à chaque nouvelle annonce.",
      aideEmail: "Votre adresse pro ou perso, comme vous préférez.",
      labelNewsletter:
        "Je souhaite recevoir les prochains livres blancs par email dès leur sortie. En août, cela peut aller jusqu'à un par jour ; désinscription en un clic depuis n'importe quel email.",
      labelContact:
        "Je souhaite que Boris me recontacte (recrutement d'un alternant, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : votre numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et vous recevez aussi le lien par mail. En cliquant sur « Recevoir la trame », vous acceptez que Boris Hierso Alphandéry conserve ces informations pour vous envoyer la trame et, si vous l'avez demandé, vous recontacter au sujet du recrutement d'un alternant. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Vous pouvez y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
  "histoire-alternance": {
    slug: "histoire-alternance",
    titre: "D'où vient l'alternance : mille ans d'histoire de l'éducation",
    publie: "2026-08-28",
    url: "https://formation-boris-ha.notion.site/3b928a764b9781d19222eef513d35929",
    notionSelect: "Histoire de l'alternance",
    sourceDefaut: "hiersoboris.fr/livres-blancs/histoire-alternance",
    registre: "tu",
    profilDefaut: "Étudiant",
    contenu: [
      "Le mythe Charlemagne démonté, et ce qu'il a vraiment fait : la Renaissance carolingienne, pas l'école pour tous",
      "La construction de l'école française en 5 lois, de Guizot (1833) à Haby (1975)",
      "L'autre histoire, celle de l'apprentissage : supprimé en 1791, réinventé en 1851, structuré par la loi Astier de 1919, ouvert au bac+5 seulement en 1987",
      "D'où viennent tes diplômes un par un : le bac (1808), le CAP (1911), le BTS (1959), la licence pro et le LMD (1999-2002)",
      "Le tour du monde de l'alternance en 6 régions et une trentaine de pays, du modèle dual allemand aux dérives documentées ailleurs",
      "Ce qui est acquis en 2026 et ce qui reste fragile : ton statut de salarié, ta formation financée, et pourquoi ce ne sont pas des droits garantis à vie",
    ],
    ui: {
      cta: "Recevoir le récit",
      ouvrir: "Ouvrir le récit",
      succesTitre: "C'est à toi.",
      succes:
        "Le récit s'ouvre juste en dessous, et je viens aussi de t'envoyer le lien par mail. De quoi répondre à qui te dit que l'alternance est un plan B.",
      aideEmail: "Ton adresse perso marche très bien.",
      labelNewsletter:
        "Je veux recevoir les prochains livres blancs par email dès leur sortie. En août, ça peut aller jusqu'à un par jour ; tu te désinscris en un clic depuis n'importe quel email.",
      labelContact: "Je souhaite que Boris me recontacte (placement, offres, questions).",
      noteTel:
        "Je rappelle par téléphone, c'est plus rapide qu'un mail : ton numéro devient donc nécessaire.",
      consentement:
        "Gratuit, accès immédiat, et tu reçois aussi le lien par mail. En cliquant sur « Recevoir le récit », tu acceptes que Boris Hierso Alphandéry conserve ces informations pour t'envoyer le récit et te proposer des offres d'alternance. Elles ne sont ni revendues ni transmises à un tiers, et sont supprimées après 3 ans sans contact. Tu peux y accéder, les corriger, les récupérer ou demander leur suppression à tout moment en écrivant à",
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
};

export function getLivret(slug: unknown): Livret {
  if (typeof slug === "string" && slug in LIVRETS) return LIVRETS[slug as LivretSlug];
  return LIVRETS["kit-alternance"];
}

// Compat : le kit historique, encore importé par /alternance.
export const KIT_URL = LIVRETS["kit-alternance"].url;
export const KIT_CONTENU = LIVRETS["kit-alternance"].contenu;
