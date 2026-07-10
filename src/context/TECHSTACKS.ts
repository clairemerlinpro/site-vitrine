import swiftIcon from '../assets/techStacks/swift.svg';
import swiftUiIcon from '../assets/techStacks/swiftUi.svg';
import reactNativeIcon from '../assets/techStacks/reactNative.svg';
import expoIcon from '../assets/techStacks/expo.svg';
import reactIcon from '../assets/techStacks/react.svg';
import nextIcon from '../assets/techStacks/next.svg';
import accessibilityIcon from '../assets/techStacks/accessibility.svg';
import typescriptIcon from '../assets/techStacks/typescript.svg';
import javascriptIcon from '../assets/techStacks/javascript.svg';
import htmlIcon from '../assets/techStacks/html.svg';
import cssIcon from '../assets/techStacks/css.svg';
import tailwindIcon from '../assets/techStacks/tailwind.svg';
import vueJsIcon from '../assets/techStacks/vue.svg';
import golangIcon from '../assets/techStacks/golang.svg';

export type TechStack = { id: number; name: string; icon: string };

export const TECHSTACKS_FR: TechStack[] = [
  { id: 0, name: 'Swift', icon: swiftIcon },
  { id: 1, name: 'SwiftUI', icon: swiftUiIcon },
  { id: 2, name: 'React Native', icon: reactNativeIcon },
  { id: 3, name: 'Expo', icon: expoIcon },
  { id: 4, name: 'React', icon: reactIcon },
  { id: 5, name: 'Next.js', icon: nextIcon },
  { id: 6, name: 'Accessibilité RGAA/WCAG', icon: accessibilityIcon },
  { id: 7, name: 'TypeScript', icon: typescriptIcon },
  { id: 8, name: 'Javascript', icon: javascriptIcon },
  { id: 9, name: 'HTML', icon: htmlIcon },
  { id: 10, name: 'CSS', icon: cssIcon },
  { id: 11, name: 'Tailwind', icon: tailwindIcon },
  { id: 12, name: 'Vue.js', icon: vueJsIcon },
  { id: 13, name: 'Golang', icon: golangIcon },
];

export const TECHSTACKS_EN: TechStack[] = [
  { id: 0, name: 'Swift', icon: swiftIcon },
  { id: 1, name: 'SwiftUI', icon: swiftUiIcon },
  { id: 2, name: 'React Native', icon: reactNativeIcon },
  { id: 3, name: 'Expo', icon: expoIcon },
  { id: 4, name: 'React', icon: reactIcon },
  { id: 5, name: 'Next.js', icon: nextIcon },
  { id: 6, name: 'Accessibility RGAA/WCAG', icon: accessibilityIcon },
  { id: 7, name: 'TypeScript', icon: typescriptIcon },
  { id: 8, name: 'Javascript', icon: javascriptIcon },
  { id: 9, name: 'HTML', icon: htmlIcon },
  { id: 10, name: 'CSS', icon: cssIcon },
  { id: 11, name: 'Tailwind', icon: tailwindIcon },
  { id: 12, name: 'Vue.js', icon: vueJsIcon },
  { id: 13, name: 'Golang', icon: golangIcon },
];

export const AI_TOOLS: string[] = ['Cursor', 'Claude', 'Replit'];
export const CI_CD_TOOLS: string[] = ['GitHub', 'Gitlab', 'GitHub Actions', 'Testflight'];
export const METHODS_FR: string[] = [
  'Agile Scrum',
  'Animation rétrospectives',
  'Gestion de projet',
  'Code Review',
];

export const METHODS_EN: string[] = [
  'Agile Scrum',
  'Retrospective Animation',
  'Project Management',
  'Code Review',
];

export type Language = {
  id: number;
  name: string;
  gradient: { from: string; to: string; deg: number };
};

export const LANGUAGE_FR: Language[] = [
  { id: 0, name: 'Français', gradient: { from: 'blue', to: 'red', deg: 90 } },
  { id: 1, name: 'Anglais', gradient: { from: 'blue', to: 'red', deg: 45 } },
  { id: 2, name: 'Espagnol', gradient: { from: 'red', to: 'yellow', deg: 180 } },
  { id: 3, name: 'Hongrois', gradient: { from: 'red', to: 'green', deg: 180 } },
  { id: 4, name: 'Coréen', gradient: { from: 'blue', to: 'red', deg: 135 } },
];

export const LANGUAGE_EN: Language[] = [
  { id: 0, name: 'French', gradient: { from: 'blue', to: 'red', deg: 90 } },
  { id: 1, name: 'English', gradient: { from: 'blue', to: 'red', deg: 45 } },
  { id: 2, name: 'Spanish', gradient: { from: 'red', to: 'yellow', deg: 180 } },
  { id: 3, name: 'Hungarian', gradient: { from: 'red', to: 'green', deg: 180 } },
  { id: 4, name: 'Korean', gradient: { from: 'blue', to: 'red', deg: 135 } },
];
