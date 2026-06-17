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
import golangIcon from '../assets/techStacks/golang.svg';

export type TechStack = { id: number; name: string; icon: string };

export const TECHSTACKS: TechStack[] = [
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
  { id: 11, name: 'Golang', icon: golangIcon },
];
