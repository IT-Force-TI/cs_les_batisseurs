// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'cs-les-batisseurs-dapaong',
  logo: '/logo-cs-les-batisseurs.png',
  settings: {
    name: 'CS LES BÂTISSEURS',
    shortName: 'CS LES BÂTISSEURS',
    slogan: 'BÂTIR L’AVENIR ENSEMBLE',
    address: 'Secteur de Kounkoaré — Dapaong, Togo',
    email: 'itplesbatisseurs@gmail.com',
    phone: '+228 70 09 01 22',
    phone2: '+228 70 09 01 23',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 65000,
    canteenFee: 300,
    badgeFee: 500,
    uniformFee: 3000,
    apeFee: 1500,
  },
  footerText:
    'Un complexe scolaire privé laïc à Dapaong, qui accompagne les élèves de la maternelle au collège et jusqu’aux formations techniques du bâtiment.',
  hero: {
    eyebrow: 'SAVOIR - TRAVAIL - RÉUSSITE',
    titleLines: ['Complexe', 'Scolaire'],
    highlight: 'LES BÂTISSEURS',
    intro:
      'Bienvenue sur le site officiel du Complexe Scolaire LES BÂTISSEURS, à Kounkoaré (Dapaong) : un établissement privé laïc d’enseignement général, technique et professionnel, de la maternelle au collège et jusqu’aux métiers du bâtiment.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du Complexe Scolaire LES BÂTISSEURS',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Bâtir des savoirs,', 'bâtir des avenirs.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Au Complexe Scolaire LES BÂTISSEURS, nous croyons qu’une éducation solide se construit pierre après pierre. Notre ambition est d’accompagner chaque enfant dès la maternelle, puis de lui ouvrir les portes du collège et des métiers techniques.',
      'Notre équipe éducative suit les élèves avec exigence et attention, en lien étroit avec les familles de Kounkoaré et de toute la région des Savanes, pour qu’ils deviennent à leur tour les bâtisseurs de leur avenir.',
    ],
    signature: 'TAME Vagbandja — Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire LES BÂTISSEURS est un établissement privé laïc d’enseignement général, technique et professionnel, situé dans le secteur de Kounkoaré à Dapaong, au nord du Togo. Il accompagne les élèves de la région des Savanes de la maternelle jusqu’au collège et aux formations techniques.',
      'Conscients des attentes des familles dans leur recherche d’un établissement scolaire de qualité, nous avons bâti une école qui allie excellence académique et épanouissement personnel, en offrant un cadre d’apprentissage stimulant, sécurisé et adapté aux besoins de chaque élève.',
      'En plus de l’enseignement général (maternelle, primaire et collège), l’établissement abrite l’Institut Technique et Professionnel LES BÂTISSEURS (ITP Les Bâtisseurs), avec des filières orientées vers le BTP (Bâtiment et Travaux Publics), pour former les jeunes aux métiers dont la région a besoin.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Nous visons l’excellence dans tous les domaines d’apprentissage.' },
    { icon: 'idea', title: 'Savoir-faire', text: 'Des formations techniques pour apprendre les métiers du bâtiment.' },
    { icon: 'heart', title: 'Respect', text: 'Une école laïque, ouverte à tous, dans le respect de chacun.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles des Savanes.' },
  ],
  faq: [
    {
      q: 'Proposez-vous des formations techniques ?',
      a: 'Oui. En plus de l’enseignement général de la maternelle au collège, l’établissement abrite l’Institut Technique et Professionnel LES BÂTISSEURS (ITP), avec des filières orientées vers le BTP (Bâtiment et Travaux Publics).',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Dapaong desservis.',
    },
    {
      q: 'Les frais de scolarité au Complexe Scolaire LES BÂTISSEURS s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle constitue la première étape du parcours scolaire. Elle favorise l’éveil, la socialisation, l’autonomie et les premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et expression corporelle',
        'Développement du langage',
        'Découverte des nombres et des formes',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Musique et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Découvrir, expérimenter et apprendre en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux et développe la curiosité. Chaque élève progresse dans un cadre structuré et bienveillant.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Ouverture aux sciences et au monde',
        'Maîtrise du français et initiation à l’anglais',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et mathématiques au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'users',
          title: 'Sport et coopération',
          text: 'Apprendre le respect, l’esprit d’équipe et l’autonomie.',
        },
      ],
    },
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (sauf pour enfant entrant en Maternelle 1)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
