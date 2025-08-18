import type { ReactElement } from 'react';
import recipeImg from '../assets/frozen-cheesecake.jpg';

export const RecipeImage = (): ReactElement => {
  return (
    <figure className="right-side">
      <img src={recipeImg} alt="A slice of frozen cheesecake" />
    </figure>
  );
};
