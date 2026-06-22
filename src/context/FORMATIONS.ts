export type Formation = {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
  type?: string;
};

export const FORMATIONS_FR: Formation[] = [
  {
    id: 0,
    name: 'ACCESSIBILITÉ WEB & CONFORMITÉ RGAA / WCAG',
    description:
      'Formation et certification permetantde comprendre et de tenir compte des besoins des personnes handicapées sur le web et de garantir la conformité aux normes RGAA / WCAG.',
    location: 'ACCESS42',
    date: 'OBTENTION EN JUIN 2026',
    type: 'Certification',
  },
  {
    id: 1,
    name: 'MASTER EXPERT IN INFORMATION TECHNOLOGIES',
    description:
      "Cheffe de projet de fin d'étude en groupe de 6 étudiants.\nCours sur le management interculturel & Flutter.",
    location: 'EPITECH / PARIS',
    date: '2018 - 2020',
    type: 'Master',
  },
  {
    id: 2,
    name: 'ERASMUS',
    description:
      "Computer Science Program at University of Pécs in Hungary.\nCours sur l'intelligence Artificielle, le Web & le réseaux.",
    location: 'UNIVERSITY OF PECS / HONGRIE',
    date: '2018 - 2019',
  },
  {
    id: 3,
    name: 'BACHELOR EXPERT IN INFORMATION TECHNOLOGIES',
    description:
      "Membre du bureau de E-mma (association visant à promouvoir la mixité dans le monde du numérique).\nExemple de projet réalisés :\nJeu de belote en réseaux en Java\nIntelligence artificielle pour trouver la sortie d'un labyrinthe en C.",
    location: 'EPITECH / LILLE',
    date: '2015 - 2018',
    type: 'Bachelor',
  },
  {
    id: 4,
    name: 'BAC S SCIENCES DE L’INGENIEUR - SPÉCIALITÉ INFORMATIQUE',
    description: 'Option Théâtre & Danse',
    location: 'LYCEE GAMBETTA / ARRAS',
    date: '2015',
    type: 'Baccalauréat',
  },
];

export const FORMATIONS_EN: Formation[] = [
  {
    id: 0,
    name: 'WEB ACCESSIBILITY & RGAA/WCAG COMPLIANCE',
    description:
      'Training and certification to understand and take into account the needs of people with disabilities on the web and to ensure compliance with RGAA / WCAG standards.',
    location: 'ACCESS42',
    date: 'OBTAINED IN JUNE 2026',
    type: 'Certification',
  },
  {
    id: 1,
    name: 'MASTER EXPERT IN INFORMATION TECHNOLOGIES',
    description:
      'End-of-study project manager in a group of 6 students.\nCourse on intercultural management & Flutter.',
    location: 'EPITECH / PARIS',
    date: '2018 - 2020',
    type: 'Master',
  },
  {
    id: 2,
    name: 'ERASMUS',
    description:
      'Computer Science Program at University of Pécs in Hungary.\nCourse on Artificial Intelligence, Web & Networks.',
    location: 'UNIVERSITY OF PECS / HUNGARY',
    date: '2018 - 2019',
  },
  {
    id: 3,
    name: 'BACHELOR EXPERT IN INFORMATION TECHNOLOGIES',
    description:
      'Member of the E-mma office (association aiming to promote diversity in the digital world).\nExample of projects carried out:\nNetwork belote game in Java\nArtificial intelligence to find the exit from a labyrinth in C.',
    location: 'EPITECH / LILLE',
    date: '2015 - 2018',
    type: 'Bachelor',
  },
  {
    id: 4,
    name: 'BAC S ENGINEERING SCIENCES - COMPUTER SPECIALTY',
    description: 'Theater & Dance Option',
    location: 'LYCEE GAMBETTA / ARRAS',
    date: '2015',
    type: 'Bachelor',
  },
];
