import { DataType } from '../types/DataType';

export async function fetchPokemon(pokemon: string) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  const data: DataType = await response.json();

  // Check for valid evolutions
  let evolutionArray;
  try {
    const responseSpecies = await fetch(data.species.url);
    const speciesData: { evolution_chain: { url: string } } = await responseSpecies.json();
    const responseEvolution = await fetch(speciesData.evolution_chain.url);
    const evolution = await responseEvolution.json();
    evolutionArray = [evolution.chain.species.name];
    let evolves_to = evolution.chain.evolves_to;
    while (evolves_to.length > 0) {
      evolutionArray.push(evolves_to[0].species.name);
      evolves_to = evolves_to[0]?.evolves_to;
    }
  } catch (error) {} //Error validating evolution

  return { ...data, evolutionArray };
}
