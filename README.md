<p>‌</p>
<p align="center">
  <img alt="Preview" src="https://raw.githubusercontent.com/cyntler/hamburger-react/master/docs/static/preview.gif" height="96" width="640">
</p>
<p>‌</p>
<p align="center">
<h1 align="center">Animated hamburger menu icons for Qwik</h1>
</p>
<p align="center">
<a href="https://hamburger-qwik.netlify.app">Hamburger menu icons</a> for Qwik, with CSS-driven transitions. Created to be as elegant and performant as possible. This means no JavaScript animations, no transitions on non-cheap properties and a small size.
</p>

This package is a port of [hamburger-react](https://github.com/cyntler/hamburger-react).

## Installation

```sh
pnpm add hamburger-qwik
```

or

```sh
npm install hamburger-qwik
```

## Size

When using one hamburger, ~1.5 KB will be added to your bundle (min + gzip).

## Usage

[Visit the website](https://hamburger-qwik.netlify.app) for full documentation, API and examples. A basic implementation looks as follows:

```js
import Hamburger from 'hamburger-qwik';
```

```js
const isOpen = useSignal(false);
```

```jsx
<Hamburger toggle={isOpen} />
```

Or without providing your own state:

```jsx
<Hamburger onToggle$={toggled => ...} />
```

## Yet another hamburger library?

Yes. Since the creation of these burgers in 2015 a lot of similar ones have appeared, with one or more of the following downsides:

- Animations that don't feel natural
- Transitions on expensive properties (jerky animations)
- No Qwik support
- Size (additional dependencies besides Qwik or no tree shaking)
- Not customizable, or too customizable (no sensible defaults)
- Doing too much

## Accessibility

It is recommended to have a tap/click area of at least 48x48 pixels. Therefore, padding will be added around the icon to create a surface of exactly this size.

Keyboard interaction is provided with the `enter` key, and the icon element has the recommended accessibility attributes (such as `role`). You can use the `label` property to supply an ARIA label for the icon.

## Support

The icons are hooks-based, and will work with Qwik 1.0.0 ('the one with hooks') or higher.
