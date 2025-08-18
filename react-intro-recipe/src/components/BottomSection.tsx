import type { ReactElement } from 'react';
import { Ingredients } from './Ingredients';
import { Instructions } from './Instructions';

export const BottomSection = (): ReactElement => {
  return (
    <section className="bottom-section">
      <Ingredients />
      <Instructions />
    </section>
  );
};
