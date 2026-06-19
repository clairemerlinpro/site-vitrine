export type Formation = {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
  type?: string;
};

export const FORMATIONS: Formation[] = [
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
