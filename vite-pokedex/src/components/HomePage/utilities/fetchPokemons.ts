import { DataTypeSchema } from '../types/DataTypeSchema';
import { ResultDataTypeSchema } from '../types/ResultDataTypeSchema';
// React query fetch function
export async function fetchPokemons({ pageParam = 'https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0' }) {
  const response = await fetch(pageParam);
  const rawData = await response.json();

  // Validate data integrity type with Zod
  const responseData = DataTypeSchema.parse(rawData);

  // Fetch additional data for each result
  const updatedResults = await Promise.all(
    responseData.results.map(async (result) => {
      const resultResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`);
      const rawResultData = await resultResponse.json();

      // Validate result data integrity type with Zod
      const resultData = ResultDataTypeSchema.parse(rawResultData);
      return { ...result, data: resultData };
    }),
  );
  // responseData.results = updatedResults;
  // return responseData;
  return { ...responseData, results: updatedResults };
}
