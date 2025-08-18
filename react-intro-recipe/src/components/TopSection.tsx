import type { ReactElement } from 'react';
import { Description } from './Description';
import { RecipeImage } from './RecipeImage';

export const TopSection = (): ReactElement => {
  return (
    <section className="top-section">
      <Description />
      <RecipeImage />
    </section>
  );
};
