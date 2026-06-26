# Claire Merlin — Site vitrine

Site vitrine professionnel de **Claire Merlin**, développeuse freelance web & mobile. Présentation de son parcours, de ses compétences techniques, de ses réalisations et d'un formulaire de contact.

## Description

Application React single-page (SPA) responsive, pensée pour mettre en avant une expertise en développement **React**, **React Native** et **Swift**, avec un soin particulier porté à l'**accessibilité** (RGAA / WCAG) et à l'expérience utilisateur.

### Pages

| Route | Contenu |
|---|---|
| `/` | Accueil — présentation, stack technique, projets mis en avant, appel à l'action |
| `/portfolio` | Réalisations |
| `/about` | Parcours, expériences, formations, téléchargement du CV |
| `/contact` | Coordonnées et formulaire de contact |
| `/legal-notice` | Mentions légales |

### Fonctionnalités

- **Internationalisation** (français / anglais) via i18next
- **Thème clair / sombre** avec persistance de la préférence
- **Formulaire de contact** via [Web3Forms](https://web3forms.com)
- **Accessibilité** : lien d'évitement, landmarks sémantiques, attributs `lang`, carousel accessible, navigation clavier
- **Carousel** des compétences techniques avec défilement automatique (pause disponible)
- **Bouton retour en haut** de page
- **Téléchargement du CV** (FR / EN selon la langue active)

## Stack technique

| Catégorie | Technologies |
|---|---|
| Framework | React 19, TypeScript |
| UI | Mantine 9, Phosphor Icons |
| Routing | React Router 7 |
| i18n | i18next, react-i18next |
| Carousel | Embla Carousel |
| Build | Create React App (react-scripts) |
| Formatage | Prettier |

## Prérequis

- **Node.js** 18+
- **npm** 9+

## Installation

```bash
git clone <url-du-repo>
cd site-vitrine
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` est nécessaire en raison d'un conflit de peer dependencies entre `react-scripts` et TypeScript 6.

## Configuration

Copiez le fichier d'exemple et renseignez votre clé Web3Forms :

```bash
cp .env.example .env
```

```env
REACT_APP_WEB3FORMS_ACCESS_KEY=votre_cle_ici
```

La clé est obtenue gratuitement sur [web3forms.com](https://web3forms.com). L'adresse e-mail de réception est celle configurée lors de la création de la clé.

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm start` | Lance le serveur de développement sur [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Génère le build de production dans `build/` |
| `npm test` | Lance les tests (Jest + Testing Library) |
| `npm run format` | Formate le code avec Prettier |
| `npm run format:check` | Vérifie le formatage sans modifier les fichiers |

## Structure du projet

```
src/
├── assets/           # Images, icônes, CV (PDF)
├── components/       # Composants réutilisables (Header, Footer, boutons…)
├── context/          # Données statiques (projets, formations, stack)
├── i18n/             # Configuration i18next et traductions FR / EN
├── pages/            # Pages de l'application
├── services/         # Appels API (formulaire de contact)
└── utils/            # Utilitaires (scroll, thème, langue)
```

## Déploiement

Le build de production est généré dans le dossier `build/` :

```bash
npm run build
```

Le site est une SPA : configurez votre hébergeur pour rediriger toutes les routes vers `index.html` (rewrite).

## Auteure

**Claire Merlin** — Développeuse freelance web & mobile  
Swift · React Native · React · Next.js
