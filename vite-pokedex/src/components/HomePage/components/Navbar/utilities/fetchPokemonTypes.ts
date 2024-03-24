import { PokemonTypeSchema } from '../types/PokemonTypeSchema';

// React query fetch function
export async function fetchPokemonTypes() {
  const response = await fetch('https://pokeapi.co/api/v2/type');
  const rawData = await response.json();

  // Validate data integrity type with Zod
  const responseData = PokemonTypeSchema.parse(rawData);
  return responseData;
}
