import { z } from 'zod';
import { TypesTypeSchema } from './TypesTypeSchema';

export const ResultDataTypeSchema = z.object({
  id: z.number(),
  sprites: z.object({
    front_default: z.string().nullable(),
    front_shiny: z.string().nullable(),
    front_female: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
    back_default: z.string().nullable(),
    back_shiny: z.string().nullable(),
    back_female: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
  }),
  types: z.array(TypesTypeSchema),
});
