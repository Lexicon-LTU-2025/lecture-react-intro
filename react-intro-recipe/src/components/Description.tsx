import type { ReactElement } from 'react';

export function Description(): ReactElement {
  return (
    <article className="left-side description-container">
      <h1>Frozen Cheescake</h1>
      <div className="time-container">
        <span className="material-symbols-outlined">av_timer</span>
        <span>60+ min</span>
      </div>
      <p className="description">
        Fryst cheesecake är en perfekt dessert för stora kalas eller middagar eftersom du kan göra
        den i förväg och frysa in. Ta fram cheesecaken en stund innan servering och garnera med dina
        favoritfrukter och bär.
      </p>
    </article>
  );
}
