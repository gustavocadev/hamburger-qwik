import { component$, useSignal } from '@builder.io/qwik';
import { Rotate } from '../Rotate';

export const Example = component$(() => {
  const isOpen = useSignal(false);
  console.log('isOpen', isOpen.value);

  return (
    <div>
      <Rotate
        toggle={isOpen}
        onToggle$={(toggled) => {
          console.log(toggled);
        }}
      />
      <h1>Example</h1>
    </div>
  );
});
