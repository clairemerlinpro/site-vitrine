import {
  GlobeIcon,
  GraduationCapIcon,
  Icon,
  LecternIcon,
  PersonSimpleRunIcon,
} from '@phosphor-icons/react';

export type Project = {
  id: number;
  name: string;
  description: string;
  image?: string;
  url?: string;
  techStack: string[];
};

export const PROJECTS_FR: Project[] = [
  {
    id: 1,
    name: 'Mutuelle des Motards x Vipali',
    description:
      'Application de prévention santé pour les adhérents, développée en collaboration avec Vipali, startup lilloise spécialisée en prévention santé.',
    image: require('../assets/projects/MotoXP.png'),
    techStack: ['React Native', 'Go'],
  },
  {
    id: 2,
    name: 'Auchan',
    description:
      "Refonte et évolution de l'app grand public (drive, catalogue, fidélité) : migration progressive vers SwiftUI et participation active aux rituels Agile pour livrer de nouvelles fonctionnalités en continu.",
    image: require('../assets/projects/Auchan.png'),
    url: 'https://apps.apple.com/fr/app/auchan-fr-courses-fid%C3%A9lit%C3%A9/id393068659',
    techStack: ['Swift', 'SwiftUI'],
  },
  {
    id: 3,
    name: 'Vivelys',
    description:
      'App de monitoring de cuves à vin en mode offline-first : récupération et synchronisation des données de capteurs, avec visualisation claire des remontées via des graphiques.',
    image: require('../assets/projects/Vivelys.png'),
    url: 'https://apps.apple.com/fr/app/kyp-mobile/id1555685597',
    techStack: ['React Native'],
  },
  {
    id: 4,
    name: 'Atelier des Lumières',
    description:
      "Lead technique sur la refonte complète de l'application et du back-office web, en coordonnant une équipe pluridisciplinaire développement/design jusqu'à la livraison.",
    image: require('../assets/projects/Lumieres.png'),
    url: 'https://apps.apple.com/fr/app/les-centres-dart-des-lumi%C3%A8res/id1498630996',
    techStack: ['React Native', 'React', 'TypeScript'],
  },
  {
    id: 5,
    name: 'Iparcus',
    description:
      "Application web de gestion et visualisation de périmètres de sécurité, développée avec l'appui d'outils IA (Cursor, Claude) pour accélérer la livraison sans compromettre la qualité.",
    image: require('../assets/projects/Iparcus.png'),
    url: 'https://www.iparcus.fr/',
    techStack: ['React', 'TypeScript', 'Cursor', 'Claude'],
  },
  {
    id: 6,
    name: 'Application web marque blanche',
    description:
      "Application web de gestion de contrats d'assurance automobile, conçue pour simplifier le suivi des dossiers clients.",
    techStack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 7,
    name: 'Le Bon Home',
    description:
      'Outil web et mobile de gestion locative pour bailleurs, pensé pour centraliser et simplifier le suivi de leur parc immobilier.',
    image: require('../assets/projects/LeBonHome.jpg'),
    techStack: ['React', 'React Native', 'TypeScript'],
  },
  {
    id: 8,
    name: 'Saint-Maclou',
    description:
      'PWA responsive pour les professionnels en magasin, développée avec une architecture Back For Front pour des performances optimales en conditions réelles.',
    techStack: ['React', 'TypeScript', 'BFF'],
  },
  {
    id: 9,
    name: 'CurryCulum',
    description:
      'Outil de génération et de mise en forme automatique de CV, développé avec assistance IA pour gagner un temps précieux sur une tâche répétitive.',
    image: require('../assets/projects/CurryCulum.JPG'),
    techStack: ['React', 'TypeScript', 'Replit'],
  },
  {
    id: 10,
    name: 'Angelo',
    description:
      'Outil interne de gestion des présences et feuilles de temps, conçu pour simplifier le suivi RH et soutenir les équipes de management au quotidien.',
    image: require('../assets/projects/Angelo.JPG'),
    techStack: ['React', 'TypeScript', 'Replit'],
  },
  {
    id: 11,
    name: 'Running Care',
    description:
      "Application mobile en Swift accompagnant les coureurs blessés dans leur rééducation, conçue avec des médecins du sport et coachs sportifs lors d'ateliers design dédiés.",
    image: require('../assets/projects/RunningCare.png'),
    techStack: ['Swift'],
  },
  {
    id: 12,
    name: '7digital',
    description:
      "Applications mobiles de streaming musical, développées pour offrir une expérience d'écoute fluide à grande échelle.",
    image: require('../assets/projects/7digital.png'),
    url: 'https://fr.7digital.com/',
    techStack: ['React Native'],
  },
];

export const PROJECTS_EN: Project[] = [
  {
    id: 1,
    name: 'Mutuelle des Motards x Vipali',
    description:
      'Health prevention application for members, developed in collaboration with Vipali, a Lille startup specializing in health prevention.',
    image: require('../assets/projects/MotoXP.png'),
    techStack: ['React Native', 'Go'],
  },
  {
    id: 2,
    name: 'Auchan',
    description:
      'Redesign and evolution of the general public app (drive, catalog, loyalty): gradual migration to SwiftUI and active participation in Agile rituals to continuously deliver new features.',
    image: require('../assets/projects/Auchan.png'),
    url: 'https://apps.apple.com/fr/app/auchan-fr-courses-fid%C3%A9lit%C3%A9/id393068659',
    techStack: ['Swift', 'SwiftUI'],
  },
  {
    id: 3,
    name: 'Vivelys',
    description:
      'App for monitoring wine vats in offline-first mode: recovery and synchronization of sensor data, with clear visualization of feedback via graphs.',
    image: require('../assets/projects/Vivelys.png'),
    url: 'https://apps.apple.com/fr/app/kyp-mobile/id1555685597',
    techStack: ['React Native'],
  },
  {
    id: 4,
    name: 'Atelier des Lumières',
    description:
      'Technical lead on the complete overhaul of the application and web back-office, coordinating a multidisciplinary development/design team until delivery.',
    image: require('../assets/projects/Lumieres.png'),
    url: 'https://apps.apple.com/fr/app/les-centres-dart-des-lumi%C3%A8res/id1498630996',
    techStack: ['React Native', 'React', 'TypeScript'],
  },
  {
    id: 5,
    name: 'Iparcus',
    description:
      'Web application for management and visualization of security perimeters, developed with the support of AI tools (Cursor, Claude) to accelerate delivery without compromising quality.',
    image: require('../assets/projects/Iparcus.png'),
    url: 'https://www.iparcus.fr/',
    techStack: ['React', 'TypeScript', 'Cursor', 'Claude'],
  },
  {
    id: 6,
    name: 'White label web application',
    description:
      'Web application for managing automobile insurance contracts, designed to simplify the monitoring of customer files.',
    techStack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 7,
    name: 'Le Bon Home',
    description:
      'Web and mobile rental management tool for landlords, designed to centralize and simplify the monitoring of their real estate portfolio.',
    image: require('../assets/projects/LeBonHome.jpg'),
    techStack: ['React', 'React Native', 'TypeScript'],
  },
  {
    id: 8,
    name: 'Saint-Maclou',
    description:
      'Responsive PWA for in-store professionals, developed with Back For Front architecture for optimal performance in real conditions.',
    techStack: ['React', 'TypeScript', 'BFF'],
  },
  {
    id: 9,
    name: 'CurryCulum',
    description:
      'Automatic CV generation and formatting tool, developed with AI assistance to save precious time on a repetitive task.',
    image: require('../assets/projects/CurryCulum.JPG'),
    techStack: ['React', 'TypeScript', 'Replit'],
  },
  {
    id: 10,
    name: 'Angelo',
    description:
      'Internal attendance and timesheet management tool, designed to simplify HR monitoring and support management teams on a daily basis.',
    image: require('../assets/projects/Angelo.JPG'),
    techStack: ['React', 'TypeScript', 'Replit'],
  },
  {
    id: 11,
    name: 'Running Care',
    description:
      'Mobile application in Swift supporting injured runners in their rehabilitation, designed with sports doctors and sports coaches during dedicated design workshops.',
    image: require('../assets/projects/RunningCare.png'),
    techStack: ['Swift'],
  },
  {
    id: 12,
    name: '7digital',
    description:
      'Mobile music streaming apps, developed to deliver a seamless listening experience at scale.',
    image: require('../assets/projects/7digital.png'),
    url: 'https://fr.7digital.com/',
    techStack: ['React Native'],
  },
];

export type Company = {
  id: number;
  name: string;
  date: string;
  location: string;
  description?: string;
  icon: Icon;
};

export const COMPANIES_FR: Company[] = [
  {
    id: 1,
    name: 'FREELANCE',
    date: 'DEPUIS AVRIL 2026',
    location: 'LILLE & REMOTE',
    icon: GlobeIcon,
  },
  {
    id: 2,
    name: 'La Mobilery',
    date: 'NOV 2021 - DÉC 2025',
    location: 'WASQUEHAL',
    description: 'Agence de conseil et de développement web et mobile.',
    icon: GlobeIcon,
  },
  {
    id: 3,
    name: 'Premedit',
    date: 'SEPT 2019 - OCT 2021',
    location: 'Loos',
    description: 'Startup dans le domaine du sport santé',
    icon: PersonSimpleRunIcon,
  },
  {
    id: 4,
    name: 'Stage • 7Digital',
    date: 'AVR 2018 - AOÛT 2018',
    location: 'La Madeleine',
    description: 'Société de streaming musical.',
    icon: GraduationCapIcon,
  },
  {
    id: 5,
    name: 'FORMATRICE WEB chez Epitech',
    date: 'JUIL 2017',
    location: 'Lille',
    icon: LecternIcon,
  },
];

export const COMPANIES_EN: Company[] = [
  {
    id: 1,
    name: 'FREELANCE',
    date: 'SINCE APRIL 2026',
    location: 'LILLE & REMOTE',
    icon: GlobeIcon,
  },
  {
    id: 2,
    name: 'La Mobilery',
    date: 'NOV 2021 - DEC 2025',
    location: 'WASQUEHAL',
    description: 'Web and mobile consulting and development agency.',
    icon: GlobeIcon,
  },
  {
    id: 3,
    name: 'Premedit',
    date: 'SEPT 2019 - OCT 2021',
    location: 'Loos',
    description: 'Startup in the field of sports health',
    icon: PersonSimpleRunIcon,
  },
  {
    id: 4,
    name: 'Stage • 7Digital',
    date: 'APR 2018 - AUGUST 2018',
    location: 'La Madeleine',
    description: 'Music streaming company.',
    icon: GraduationCapIcon,
  },
  {
    id: 5,
    name: 'WEB TRAINER at Epitech',
    date: 'JUL 2017',
    location: 'Lille',
    icon: LecternIcon,
  },
];
