import { Tilt as Hamburger } from './components/Tilt';
import type { JSX } from '@builder.io/qwik/jsx-runtime';

export { Cross } from './components/Cross';
export { Divide } from './components/Divide';
export { Fade } from './components/Fade';
export { Pivot } from './components/Pivot';
export { Rotate } from './components/Rotate';
export { Slant } from './components/Slant';
export { Sling } from './components/Sling';
export { Spin } from './components/Spin';
export { Spiral } from './components/Spiral';
export { Squash } from './components/Squash';
export { Squeeze } from './components/Squeeze';
export { Turn } from './components/Turn';
export { Twirl } from './components/Twirl';

import type {
  CSSProperties,
  PropFunction,
  QRL,
  Signal,
} from '@builder.io/qwik';

export default Hamburger;

export interface CommonBurgerProps {
  /** The color of the icon bars, accepts any CSS-parsable argument. */
  color?: string;
  /** The animation direction of the icon, left or right. */
  direction?: 'left' | 'right';
  /** The vertical distance between the lines. Small (sm), medium (md) or large (lg). */
  distance?: 'sm' | 'md' | 'lg';
  /** The duration of the animation. Can be set to zero if no animation is desired. */
  duration?: number;
  /** A valid `transition-timing-function` CSS value, for example 'ease-out'. */
  easing?: string;
  /** Hides the default browser focus style. */
  hideOutline?: boolean;
  /** An ARIA label to improve accessibility. */
  label?: string;
  /** A callback which receives a single boolean argument, indicating if the icon is toggled. */
  onToggle$?:
    | PropFunction<(toggled: boolean) => void>
    | ((toggled: boolean) => void);
  /** Specifies if the icon bars should be rounded. */
  rounded?: boolean;
  /** A number between 12 and 48, which sets the size of the icon. */
  size?: number;
  /** A way to provide your own state action. Has to be used together with a state value (the `toggled` prop). */
  toggle?: Signal<boolean>;
}

export interface RenderOptions {
  barHeight: number;
  barStyles: CSSProperties;
  burgerStyles: CSSProperties;
  handler: QRL<() => void>;
  isLeft: boolean;
  isToggled: boolean;
  label: string | undefined;
  margin: number;
  move: number;
  time: number;
  easing: string;
  topOffset: number;
  width: number;
}

export interface BurgerProps extends CommonBurgerProps {
  children: (o: RenderOptions) => JSX.Element;
  toggleInternal: Signal<boolean>;
  lines?: number;
}
