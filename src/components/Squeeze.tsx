import { Burger } from './Burger';
import { CommonBurgerProps } from '..';
import { component$, useSignal } from '@builder.io/qwik';

export const Squeeze = component$<CommonBurgerProps>((props) => {
  const toggleInternal = useSignal(false);

  return (
    <Burger {...props} lines={2} toggleInternal={toggleInternal}>
      {(o) => (
        <div
          class="hamburger-react"
          aria-label={o.label}
          aria-expanded={o.isToggled}
          data-testid="squeeze"
          onClick$={o.handler}
          onKeyUp$={(e) => e.key === 'Enter' && o.handler()}
          role="button"
          style={o.burgerStyles}
          tabIndex={0}
        >
          <div
            data-testid="bar-wrap-one"
            style={{
              transition: `${o.time / 2}s ${o.easing} ${
                o.isToggled ? '0s' : `${o.time / 2}s`
              }`,
              transform: `${
                o.isToggled
                  ? `translateY(${o.barHeight / 2 + o.margin / 2}px)`
                  : 'none'
              }`,
            }}
          >
            <div
              data-testid="bar-one"
              style={{
                ...o.barStyles,
                width: `${o.width}px`,
                top: `${o.topOffset}px`,
                transition: `${o.time / 2}s ${o.easing} ${
                  o.isToggled ? `${o.time / 2}s` : '0s'
                }`,
                transform: `${o.isToggled ? `rotate(45deg)` : 'none'}`,
              }}
            />
          </div>

          <div
            data-testid="bar-wrap-three"
            style={{
              transition: `${o.time / 2}s ${o.easing} ${
                o.isToggled ? '0s' : `${o.time / 2}s`
              }`,
              transform: `${
                o.isToggled
                  ? `translateY(-${o.barHeight / 2 + o.margin / 2}px)`
                  : 'none'
              }`,
            }}
          >
            <div
              data-testid="bar-three"
              style={{
                ...o.barStyles,
                width: `${o.width}px`,
                top: `${o.topOffset + o.barHeight + o.margin}px`,
                transition: `${o.time / 2}s ${o.easing} ${
                  o.isToggled ? `${o.time / 2}s` : '0s'
                }`,
                transform: `${o.isToggled ? `rotate(-45deg)` : 'none'}`,
              }}
            />
          </div>
        </div>
      )}
    </Burger>
  );
});
