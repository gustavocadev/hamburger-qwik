import { Burger } from './Burger';
import { CommonBurgerProps } from '..';
import { component$, useSignal } from '@builder.io/qwik';

export const Spiral = component$<CommonBurgerProps>((props) => {
  const toggleInternal = useSignal(false);

  return (
    <Burger {...props} lines={2} toggleInternal={toggleInternal}>
      {(o) => (
        <div
          class="hamburger-react"
          aria-label={o.label}
          aria-expanded={o.isToggled}
          data-testid="spiral"
          onClick$={o.handler}
          onKeyUp$={(e) => e.key === 'Enter' && o.handler()}
          role="button"
          style={{
            ...o.burgerStyles,
            transform: `${
              o.isToggled ? `rotate(${180 * (o.isLeft ? -1 : 1)}deg)` : 'none'
            }`,
          }}
          tabIndex={0}
        >
          <div
            style={{
              ...o.barStyles,
              width: `${o.width}px`,
              top: `${o.topOffset}px`,
              transition: `${o.time}s ${o.easing}`,
              transform: `${
                o.isToggled
                  ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${
                      o.move * (o.isLeft ? -1 : 1)
                    }px, ${o.move}px)`
                  : 'none'
              }`,
            }}
          />

          <div
            style={{
              ...o.barStyles,
              width: `${o.width}px`,
              top: `${o.topOffset + o.barHeight + o.margin}px`,
              transition: `${o.time}s ${o.easing}`,
              transform: `${
                o.isToggled
                  ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${
                      o.move * (o.isLeft ? -1 : 1)
                    }px, ${o.move * -1}px)`
                  : 'none'
              }`,
            }}
          />
        </div>
      )}
    </Burger>
  );
});
