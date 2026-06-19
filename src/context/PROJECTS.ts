export type Project = {
  id: number;
  name: string;
  description: string;
  image?: string;
  url?: string;
  techStack: string[];
};

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Mutuelle des Motards x Vipali',
    description:
      "Application de prévention santé à destination des adhérents.\n Développement de l'application mobile en collaboration avec Vipali, startup lilloise spécialisée dans la prévention santé.",
    image: require('../assets/projects/MotoXP.png'),
    techStack: ['React Native', 'Go'],
  },
  {
    id: 2,
    name: 'Auchan',
    description:
      "Application mobile grand public (drive, catalogue, fidélité).\n Développement de nouvelles fonctionnalités sur l'app grand public en Swift.\n Migration progressive de composants UIKit vers SwiftUI.\n Participation active aux rituels Agile et renfort du Product Owner sur le découpage de features.",
    image: require('../assets/projects/Auchan.png'),
    url: 'https://apps.apple.com/fr/app/auchan-fr-courses-fid%C3%A9lit%C3%A9/id393068659',
    techStack: ['Swift', 'SwiftUI'],
  },
  {
    id: 3,
    name: 'Vivelys',
    description:
      "Monitoring de capteurs de cuve à vin.\n Développement d'une app mobile de récupération et synchronisation des données capteurs en mode offline-first.\n Mise en place de graphiques de visualisation des remontées de données.",
    image: require('../assets/projects/Vivelys.png'),
    url: 'https://apps.apple.com/fr/app/kyp-mobile/id1555685597',
    techStack: ['React Native'],
  },
  {
    id: 4,
    name: 'Atelier des Lumières',
    description:
      "Refonte complète de l'application.\n Lead technique et gestion de projet sur la refonte de l'application.\n Mise à jour du back-office web.\n Coordination d'une équipe pluridisciplinaire (développement et design).",
    image: require('../assets/projects/Lumieres.png'),
    url: 'https://apps.apple.com/fr/app/les-centres-dart-des-lumi%C3%A8res/id1498630996',
    techStack: ['React Native', 'React', 'TypeScript'],
  },
  {
    id: 5,
    name: 'Iparcus',
    description:
      "Gestion et visualisation de périmètre de sécurité.\n Développement de l'application web avec assistance IA (Cursor, Claude).",
    image: require('../assets/projects/Iparcus.png'),
    url: 'https://www.iparcus.fr/',
    techStack: ['React', 'TypeScript', 'Cursor', 'Claude'],
  },
  {
    id: 6,
    name: 'Application web marque blanche',
    description:
      "Gestion d'assurances auto.\n Développement d'une application web de gestion de contrats d'assurance automobile.",
    techStack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 7,
    name: 'Le Bon Home',
    description:
      "Outil de gestion à destination de bailleurs de logements.\n Développement de l'application web et mobile de gestion locative.",
    image: require('../assets/projects/LeBonHome.jpg'),
    techStack: ['React', 'React Native', 'TypeScript'],
  },
  {
    id: 8,
    name: 'Saint-Maclou',
    description:
      "Application web progressive à destination des professionnels en magasin.\n Développement d'une PWA responsive avec architecture Back For Front.",
    techStack: ['React', 'TypeScript', 'BFF'],
  },
  {
    id: 9,
    name: 'CurryCulum',
    description:
      "Outil de mise en forme automatique de CV.\n Développement d'un outil de génération et formatage de CV avec assistance IA.",
    techStack: ['React', 'TypeScript', 'Replit'],
  },
  {
    id: 10,
    name: 'Angelo',
    description:
      "Gestion des présences, feuilles de temps et aide au management.\n Développement d'un outil interne de suivi des présences, gestion des feuilles de temps et support au management avec assistance IA.",
    techStack: ['React', 'TypeScript', 'Replit'],
  },
  {
    id: 11,
    name: 'Running Care',
    description:
      'Développement d’une application mobile en Swift à destination des coureurs blessés afin de les aider dans leur guérison grâce à des programmes de rééducation conçus avec des médecins du sport et des coachs sportifs.\n Participation active aux ateliers design.\n Travail en mode Scrum. Animation de rétrospectives.',
    image: require('../assets/projects/RunningCare.png'),
    techStack: ['Swift'],
  },
  {
    id: 12,
    name: '7digital',
    description: 'Développement d’applications mobiles de streaming musical.',
    image: require('../assets/projects/7digital.png'),
    url: 'https://fr.7digital.com/',
    techStack: ['React Native'],
  },
];

export default PROJECTS;
