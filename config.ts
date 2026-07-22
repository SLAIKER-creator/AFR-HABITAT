// ============================================================================
// CONFIG — seul fichier à modifier pour dupliquer ce site sur un nouveau
// client artisan (plombier, chauffagiste, électricien...).
//
// Pour créer un nouveau site : copier ce dossier entier (voir NOUVEAU-CLIENT.md),
// puis ne modifier QUE ce fichier avec les données réelles du client
// (issues de phase-0/contenu/). Aucun composant dans /components ne doit
// être touché pour une simple duplication — y compris le thème visuel
// (couleurs, police), qui se règle entièrement ci-dessous dans `theme`.
// ============================================================================

export interface Review {
  name: string;
  text: string;
}

export interface ServiceItem {
  icon: string; // emoji ou caractère unique
  title: string;
  description: string;
  bullets: string; // ex: "✔ Point 1 • ✔ Point 2 • ✔ Point 3"
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  theme: {
    colors: {
      primary: string; // couleur principale — CTA, liens, accents (ex: bleu-600)
      primaryHover: string; // état survol des éléments en primary (ex: bleu-700)
      primaryLight: string; // touches claires — highlight Hero, focus ring, badges (ex: bleu-400)
      primaryDark: string; // fond sombre teinté — dégradé Hero (ex: bleu-950)
    };
    fonts: {
      // URL Google Fonts CSS2 (laisser vide "" pour utiliser uniquement les polices système)
      googleFontsUrl: string;
      heading: string; // font-family CSS complète pour les titres (h1/h2/h3)
      body: string; // font-family CSS complète pour le texte courant
    };
  };

  business: {
    brandFirst: string; // ex: "Martin" (partie neutre du logo)
    brandAccent: string; // ex: "Plomberie" (partie colorée du logo)
    trade: string; // ex: "Plombier-Chauffagiste"
    city: string; // ex: "Tours"
    siret: string;
    phone: {
      display: string; // ex: "06 12 34 56 78"
      href: string; // ex: "tel:0612345678"
    };
    email: string;
    address: string; // adresse complète, utilisée aussi pour la carte
  };

  seo: {
    title: string;
    description: string;
  };

  nav: NavLink[];

  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    proofLine: string;
  };

  about: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
    ctaLabel: string;
    image: {
      src: string;
      alt: string;
    };
  };

  services: {
    heading: string;
    subtitle: string;
    items: ServiceItem[];
  };

  zone: {
    heading: string;
    intro: string;
    cities: string[];
    seoText: string;
  };

  map: {
    heading: string;
    subtitle: string;
  };

  reviews: {
    heading: string;
    subtitle: string;
    items: Review[];
    googleReviewsUrl: string;
    ctaLabel: string;
  };

  contact: {
    heading: string;
    subtitle: string;
    urgentCtaPrefix: string; // ex: "📞 Appeler maintenant —"
    requestTypePlaceholder: string;
    requestTypes: string[];
    reassuranceLine: string;
  };

  footer: {
    description: string;
    legalLinks: NavLink[];
  };
}

// ============================================================================
// DONNÉES REÉLLES — AFR HABITAT (Frédéric Rigault)
// ============================================================================

export const config: SiteConfig = {
  theme: {
    colors: {
      // Thème Cyan / Bleu Océan (Plomberie & Chauffage)
      primary: "#0891b2",       // Cyan 600
      primaryHover: "#0e7490",  // Cyan 700
      primaryLight: "#22d3ee",  // Cyan 400
      primaryDark: "#083344",   // Cyan 950
    },
    fonts: {
      googleFontsUrl:
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      heading: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
      body: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
    },
  },

  business: {
    brandFirst: "AFR",
    brandAccent: "HABITAT",
    trade: "Plombier-Chauffagiste",
    city: "Poitiers & Mignaloux-Beauvoir",
    siret: "81059757500010",
    phone: {
      display: "06 61 31 41 72",
      href: "tel:0661314172",
    },
    email: "afr-habitat@hotmail.com",
    address: "20 Allée des Cavaliers, 86550 Mignaloux-Beauvoir",
  },

  seo: {
    title: "Plombier-chauffagiste à Poitiers | AFR Habitat",
    description:
      "AFR Habitat (Frédéric Rigault), artisan plombier-chauffagiste à Mignaloux-Beauvoir et Poitiers. Dépannage rapide, déplacement gratuit (10km). 06 61 31 41 72.",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Zone d’intervention", href: "#zone" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    badge: "💧 Artisan Plombier-Chauffagiste • Déplacement Gratuit (<10km) • Décennale April",
    titleLine1: "Plombier-chauffagiste à Poitiers —",
    titleHighlight: "Dépannage & Installation Rapide",
    subtitle:
      "AFR Habitat intervient à Mignaloux-Beauvoir, Poitiers et alentours. Déplacement gratuit dans un rayon de 10 km, devis clair, tarifs étudiés au plus juste et assurance décennale.",
    primaryCtaLabel: "📞 06 61 31 41 72",
    secondaryCtaLabel: "Demander un devis gratuit",
    secondaryCtaHref: "#contact",
    proofLine: "✔ Titre d'Artisan • ✔ Assurance Décennale April • ✔ Déplacement gratuit < 10km",
  },

  about: {
    heading: "Frédéric Rigault (AFR Habitat), votre artisan de proximité",
    paragraphs: [
      "Artisan installé à Mignaloux-Beauvoir aux portes de Poitiers, Frédéric Rigault (AFR Habitat) met son savoir-faire et sa rigueur au service de vos travaux de plomberie, de chauffage et de rénovation sanitaire.",
      "Chez AFR Habitat, pas d'intermédiaire : vous échangez directement avec votre artisan. Nous prenons le temps de vous expliquer le travail à envisager pour vous garantir des prestations durables et des tarifs étudiés au plus juste.",
      "Couvert par une assurance décennale chez April (N° 0085269 / 33817), AFR Habitat assure un suivi rigoureux de ses chantiers et un service après-vente réactif pour votre entière sérénité.",
    ],
    bullets: [
      "✔ Déplacement gratuit dans un rayon de 10 km autour de Poitiers",
      "✔ Assurance Décennale April (Contrat N° 0085269 / 33817)",
      "✔ Tarifs étudiés au juste prix & explications claires",
      "✔ Titre d'Artisan & service après-vente assuré",
    ],
    ctaLabel: "📞 Contacter Frédéric Rigault",
    image: {
      src: "/images/photo-artisan.jpg",
      alt: "Frédéric Rigault, artisan plombier-chauffagiste AFR Habitat à Mignaloux-Beauvoir",
    },
  },

  services: {
    heading: "Nos prestations en plomberie et chauffage",
    subtitle: "Des interventions soignées et réactives sur Poitiers et le Grand Poitiers",
    items: [
      {
        icon: "💧",
        title: "Dépannage Plomberie",
        description: "Intervention rapide sur les problèmes sérieux (fuite d'eau, canalisations bouchées) pour éviter tout dégât des eaux.",
        bullets: "✔ Recherche de fuite • ✔ Débouchage canalisation • ✔ Pose de vannes & robinetterie",
      },
      {
        icon: "🛁",
        title: "Sanitaires & Rénovation",
        description: "Installation et rénovation complète de vos équipements sanitaires et salles de bains sur-mesure.",
        bullets: "✔ Remplacement WC, douche & baignoire • ✔ Pose de lavabos & vasques • ✔ Éviers de cuisine",
      },
      {
        icon: "🔥",
        title: "Chauffage",
        description: "Installation et remplacement de vos éléments de chauffage pour un confort optimal dans votre logement.",
        bullets: "✔ Remplacement d'équipements • ✔ Installation chauffage • ✔ Conseils d'optimisation",
      },
    ],
  },

  zone: {
    heading: "Intervention à Mignaloux-Beauvoir, Poitiers et en Vienne (86)",
    intro:
      "Basé à Mignaloux-Beauvoir, AFR Habitat intervient sur Poitiers et l'ensemble des communes environnantes, avec déplacement offert dans un rayon de 10 km.",
    cities: [
      "Mignaloux-Beauvoir",
      "Poitiers",
      "Saint-Benoît",
      "Biard",
      "Buxerolles",
      "Ligugé",
      "Chasseneuil-du-Poitou",
      "Fontaine-le-Comte",
    ],
    seoText:
      "Besoin d'un plombier-chauffagiste réactif dans le Grand Poitiers ? AFR Habitat se déplace gratuitement jusqu'à 10 km autour de Poitiers pour vos dépannages d'urgence, rénovations sanitaires et installations de chauffage.",
  },

  map: {
    heading: "Zone d’intervention",
    subtitle: "Atelier à Mignaloux-Beauvoir (86550) — Déplacement gratuit dans un rayon de 10 km",
  },

  reviews: {
    heading: "La satisfaction client, notre priorité",
    subtitle: "Gage de confiance, conseils personnalisés et service après-vente assuré",
    items: [
      {
        name: "Client Mignaloux-Beauvoir",
        text: "Intervention rapide pour une fuite d'eau urgente. M. Rigault a pris le temps de m'expliquer le travail nécessaire avant d'intervenir. Tarif très correct et artisan très professionnel.",
      },
      {
        name: "Propriétaire Poitiers",
        text: "Rénovation de nos équipements sanitaires réalisée avec soin. Le travail est propre, les délais respectés et le devis sans mauvaise surprise. Je recommande les yeux fermés.",
      },
    ],
    googleReviewsUrl: "#contact",
    ctaLabel: "Demander un devis à AFR Habitat",
  },

  contact: {
    heading: "Contactez AFR Habitat à Mignaloux-Beauvoir / Poitiers",
    subtitle: "Une urgence plomberie ou un projet sanitaire/chauffage ? Frédéric Rigault vous réponds rapidement.",
    urgentCtaPrefix: "📞 Appeler le 06 61 31 41 72 —",
    requestTypePlaceholder: "Nature de votre besoin",
    requestTypes: [
      "Dépannage plomberie d'urgence",
      "Rénovation sanitaire / Salle de bains",
      "Installation / Remplacement Chauffage",
      "Autre demande de devis",
    ],
    reassuranceLine: "✔ Déplacement gratuit (<10km) • ✔ Devis clair sans surprise • ✔ Assurance décennale April",
  },

  footer: {
    description:
      "AFR Habitat (Frédéric Rigault) — Artisan Plombier-Chauffagiste à Mignaloux-Beauvoir et Poitiers (86). Dépannage, sanitaires, chauffage. Assurance Décennale April (N° 0085269).",
    legalLinks: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    ],
  },
};