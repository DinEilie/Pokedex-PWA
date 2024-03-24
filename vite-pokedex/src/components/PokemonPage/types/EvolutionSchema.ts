import { z } from 'zod';

export const EvolutionSchema = z.object({
  chain: z.object({
    species: z.object({
      name: z.string(),
    }),
    evolves_to: z.array(z.any()),
  }),
});
