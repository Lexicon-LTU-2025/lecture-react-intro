import type { ReactElement } from 'react';
import { List } from './List';

export const Ingredients = (): ReactElement => {
  return (
    <article className="left-side ingredients-container">
      <h3>Ingredienser</h3>
      <h4>Till botten</h4>
      <List className="ingredients-list-bottm" type="ul">
        <li>15st digistivekex</li>
        <li>Lite Smör</li>
      </List>
      <h4>Till smeten</h4>
      <List className="ingredients-list-paste" type="ul">
        <li>3st ägg</li>
        <li>1,5dl strösocker</li>
        <li>3tsk vaniljsocker</li>
        <li>3dl vispgrädde</li>
        <li>400g naturell philadelphiaost</li>
      </List>
    </article>
  );
};
