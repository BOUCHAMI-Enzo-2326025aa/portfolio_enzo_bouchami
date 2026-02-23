// ========================================
// CONFIGURATION DE VOTRE PORTFOLIO
// ========================================
// Modifiez les informations ci-dessous pour personnaliser votre portfolio

export const personalInfo = {
  // Informations personnelles
  firstName: "Enzo",
  lastName: "Bouchami",
  title: "Étudiant en Développement Informatique",
  bio: "Étudiant passionné en développement informatique à la recherche d'opportunités pour développer mes compétences et contribuer à des projets innovants.",
  availability:
    "Je suis actuellement à la recherche d'opportunités d'alternance à partir de Août 2026. N'hésitez pas à me contacter.",

  // Contact
  email: "enzo.bouchami@gmail.com",
  phone: "+33 7 78 57 57 42",
  location: "Brignoles (83170), France",
  linkedin: "https://www.linkedin.com/in/enzo-bouchami/",
  github: "https://github.com/BOUCHAMI-Enzo-2326025aa",

  // Image de profil (optionnel)
  profileImage:
    "https://images.unsplash.com/photo-1516889454133-d3cd87326a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwYmx1ZXxlbnwxfHx8fDE3NzE4NjUzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

// ========================================
// SECTION À PROPOS
// ========================================
export const aboutFeatures = [
  {
    title: "Qui suis-je ?",
    description:
      "Étudiant motivé et passionné par l'informatique, je cherche constamment à apprendre et à me perfectionner.",
  },
  {
    title: "Mes objectifs",
    description:
      "Intégrer une école d'ingénieurs où je pourrai développer mes compétences et contribuer à des projets ambitieux.",
  },
  {
    title: "Ma valeur ajoutée",
    description:
      "Une approche créative, une capacité d'adaptation rapide et une forte volonté d'apprendre et d'innover.",
  },
];

export const aboutParagraphs = [
  "Passionné(e) par [domaine d'intérêt], j'ai développé au fil de mes études et expériences une expertise solide dans [compétences principales]. Mon parcours m'a permis d'acquérir une vision globale et une approche méthodique des projets.",
  "Je suis constamment à la recherche de nouveaux défis qui me permettront de mettre en pratique mes connaissances tout en continuant à apprendre. Ma curiosité naturelle et mon esprit d'analyse me permettent de m'adapter rapidement à de nouveaux environnements.",
  "Mon objectif est d'intégrer une structure qui valorise l'innovation, le travail d'équipe et le développement continu des compétences.",
];

// ========================================
// COMPÉTENCES
// ========================================
export const skillCategories = [
  {
    title: "Développement",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Python",
      "Java",
    ],
  },
  {
    title: "Design",
    skills: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "UI/UX",
    ],
  },
  {
    title: "Bases de données",
    skills: [
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "MySQL",
    ],
  },
  {
    title: "Web",
    skills: [
      "SEO",
      "Responsive Design",
      "APIs",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Outils",
    skills: ["Git", "VS Code", "Docker", "Agile", "Jira"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Travail d'équipe",
      "Adaptabilité",
      "Créativité",
      "Organisation",
    ],
  },
];

// ========================================
// PROJETS
// ========================================
export const projects = [
  {
    title: "Projet E-commerce",
    description:
      "Développement d'une plateforme e-commerce complète avec système de paiement intégré et gestion des stocks.",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NzE4NDgyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    demoLink: "#", // Lien vers la démo du projet
    githubLink: "#", // Lien vers le code GitHub
  },
  {
    title: "Application Mobile",
    description:
      "Conception et développement d'une application mobile de gestion de tâches avec synchronisation cloud.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1516889454133-d3cd87326a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwYmx1ZXxlbnwxfHx8fDE3NzE4NjUzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Dashboard Analytique",
    description:
      "Création d'un tableau de bord interactif pour la visualisation de données complexes en temps réel.",
    tags: ["Vue.js", "D3.js", "Python"],
    image:
      "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzcxODAxMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    demoLink: "#",
    githubLink: "#",
  },
];

// ========================================
// FORMATION (ÉDUCATION)
// ========================================
export const education = [
  {
    year: "2023 - 2026",
    title: "BUT Informatique",
    institution: "IUT Aix-Marseille",
    location : "Aix-en-Provence",
    description: "Parcours A : Réalisation d’applications : conception, développement, validation",
  },
  {
    year: "2023",
    title: "Baccalauréat Général - Mention Bien",
    institution: "Lycée Maurice Janetti",
    location : "Saint-Maximin-la-Sainte-Baume",
    description: "Spécialité Numérique et Sciences informatiques (NSI) et Mathématiques",
  },
];

// ========================================
// EXPÉRIENCE PROFESSIONNELLE
// ========================================
export const experience = [
  {
    year: "Mars 2026 - Juillet 2026",
    title: "Stage en développement informatique",
    company: "Métropole Aix-Marseille-Provence",
    location: "Marseille",
    description:
      "Stage à venir",
  },
  {
    year: "Avril 2025 - Juin 2025",
    title: "Stage en développement informatique",
    company: "Caisse nationale militaire de sécurité sociale (CNMSS)",
    location: "Toulon",
    description:
      "Modifications des applications web interne, développement de nouvelles fonctionnalités et correction de bugs.",
  },
  {
    year: "Septembre 2025 - Janvier 2026",
    title: "Projet Universitaire VA-Productions",
    company: "VA-Productions",
    location: "Aix-en-Provence",
    description:
      "Développement d'un CRM pour une PME de production de magazines publicitaires, allant de la prospection à la facturation en collaboration avec une équipe de 5 étudiants.",
  },
];