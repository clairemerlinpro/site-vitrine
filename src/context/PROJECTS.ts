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
      "Application de prévention santé à destination des adhérents. Développement de l'application mobile en collaboration avec Vipali, startup lilloise spécialisée dans la prévention santé.",
    image: require('../assets/projects/MotoXP.png'),
    techStack: ['React Native', 'Go'],
  },
  {
    id: 2,
    name: 'Auchan',
    description:
      "Application mobile grand public (drive, catalogue, fidélité). Développement de nouvelles fonctionnalités sur l'app grand public en Swift. Migration progressive de composants UIKit vers SwiftUI. Participation active aux rituels Agile et renfort du Product Owner sur le découpage de features.",
    image: require('../assets/projects/Auchan.png'),
    url: 'https://apps.apple.com/fr/app/auchan-fr-courses-fid%C3%A9lit%C3%A9/id393068659',
    techStack: ['Swift', 'SwiftUI'],
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Description 3',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    url: 'https://project3.com',
    techStack: ['Swift', 'SwiftUI'],
  },
  {
    id: 4,
    name: 'Project 4',
    description: 'Description 4',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    url: 'https://project4.com',
    techStack: ['Swift', 'SwiftUI'],
  },
];

export default PROJECTS;
