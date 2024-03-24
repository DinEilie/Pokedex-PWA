import { z } from 'zod';

export const PokemonTypeSchema = z.object({
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});
