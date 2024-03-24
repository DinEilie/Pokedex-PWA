import { DataType } from '../types/DataType';
import { DataTypeSchema } from '../types/DataTypeSchema';
import { EvolutionSchema } from '../types/EvolutionSchema';

export async function fetchPokemon(pokemon: string) {
  // Fetch data
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  const data: DataType = await response.json();

  // Validate data integrity type with Zod
  const parsedData = DataTypeSchema.parse(data);

  // Check for valid evolutions
  let evolutionArray;
  try {
    const responseSpecies = await fetch(parsedData.species.url);
    const speciesData = await responseSpecies.json();
    const responseEvolution = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await responseEvolution.json();

    // Validate evolution data integrity type with Zod
    const parsedEvolutionData = EvolutionSchema.parse(evolutionData);

    evolutionArray = [parsedEvolutionData.chain.species.name];
    let evolves_to = parsedEvolutionData.chain.evolves_to;
    while (evolves_to.length > 0) {
      evolutionArray.push(evolves_to[0].species.name);
      evolves_to = evolves_to[0]?.evolves_to;
    }
  } catch (error) {
    //Error validating evolution
    console.error('An error occured while validating evolution process: ', error);
  }

  return { ...parsedData, evolutionArray };
}
