import { DataType } from '../types/DataType';

// React query fetch function
export async function fetchPokemons({ pageParam = 'https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0' }) {
  const response = await fetch(pageParam);
  const responseData: DataType = await response.json();
  // Fetch additional data for each result
  const updatedResults = await Promise.all(
    responseData.results.map(async (result) => {
      const resultResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`);
      const resultData = await resultResponse.json();
      return { ...result, data: resultData };
    }),
  );
  responseData.results = updatedResults;
  return responseData;
}
