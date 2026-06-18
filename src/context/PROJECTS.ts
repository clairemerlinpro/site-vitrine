export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
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
];

export default PROJECTS;
