import {
  useEffect,
  useState,
  type ChangeEventHandler,
  type ReactElement,
  type ReactNode,
} from 'react';
import { useCounter } from './hooks/useCounter';

interface IStarWarsCharacter {
  id: number;
  name: string;
  birth_year: string;
  homeworld: number;
  species_id: number;
}

export const UseEffectExample = (): ReactElement => {
  const [swCharacters, setSwCharacters] = useState<IStarWarsCharacter[]>([]);
  const [name, setName] = useState<string>('Niklas');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { count, setCountTo } = useCounter(2);

  const fetchSwCharacters = async (count: number): Promise<IStarWarsCharacter[]> => {
    if (count <= 0) return [];

    const res = await fetch('https://swapi.online/api/characters');
    const characters = (await res.json()) as IStarWarsCharacter[];
    return characters.slice(0, count);
  };

  const handleOnCountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setCountTo(Number(value));
  };

  const renderCharacters = (): ReactNode => {
    if (swCharacters.length === 0) return <p>No characters available..</p>;

    return swCharacters.map((swc) => (
      <article key={swc.id}>
        <h2>{swc.name}</h2>
        <p>Birth Year: {swc.birth_year}</p>
        <p>Homeworld: {swc.homeworld}</p>
        <p>Species: {swc.species_id}</p>
      </article>
    ));
  };

  /*
  Don't do this, the state update in this invocation will trigger a rerender of this component, which means the fetch will be invoked again and the process will repeat itself in all eternity... Unless you stop it.

  fetchSwCharacters(10).then((characters) => {
    console.log(characters);
    // setSwCharacters(characters);
  });
  */

  /*
  A useEffect with NO dependency array will run on the FIRST render of the component and EVERY rerender independant of on any state update. 

  useEffect(() => {
    console.log("useEffect was run")
    fetchSwCharacters(10).then((characters) => {
      console.log(characters);
      // setSwCharacters(characters);
    });
  });
  */

  /*
  A useEffect with an EMPTY dependency array will ONLY run on the FIRST render independant of on any state

  useEffect(() => {
    fetchSwCharacters(2).then((characters) => {
      console.log(characters);
      setSwCharacters(characters);
    });
  }, []);
  */

  /*
  A useEffect with an dependency array with dependencies will run on the first render and then on every render where the specific dependency is updated.
   */
  useEffect(() => {
    setIsLoading(true);

    fetchSwCharacters(count).then((characters) => {
      console.log(characters);
      setSwCharacters(characters);
      setIsLoading(false);
    });
  }, [count]);

  useEffect(() => {
    // Just to check when the component actually renders
    console.log('Component was rendered');
  });

  return (
    <main className="use-effect-example">
      <h1>Star Wars Characters - by {name}</h1>

      <section className="character-list">
        {isLoading && <div className="loader" />}
        {!isLoading && renderCharacters()}
      </section>
      <section className="actions">
        <div className="character-number">
          <p>Characters that will be fetched</p>
          <input onChange={handleOnCountChange} type="number" value={count} />
        </div>
        <div className="name-wrapper">
          <p>Your name is:</p>
          <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
        </div>
      </section>
    </main>
  );
};
