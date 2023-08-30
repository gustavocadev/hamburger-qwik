import { component$, useSignal } from '@builder.io/qwik';
import { Burger } from './Burger';
import type { CommonBurgerProps } from '..';

export const Cross = component$<CommonBurgerProps>((props) => {
  const toggleInternal = useSignal(false);

  return (
    <Burger {...props} lines={2} toggleInternal={toggleInternal}>
      {(o) => (
        <div
          class="hamburger-react"
          aria-label={o.label}
          aria-expanded={o.isToggled}
          data-testid="cross"
          onClick$={o.handler}
          onKeyUp$={(e) => e.key === 'Enter' && o.handler()}
          role="button"
          style={o.burgerStyles}
          tabIndex={0}
        >
          <div
            data-testid="bar-one"
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
            data-testid="bar-two"
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
