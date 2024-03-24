import { z } from 'zod';
import { TypesTypeSchema } from '../../HomePage/types/TypesTypeSchema';

export const DataTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  base_experience: z.number(),
  height: z.number(),
  weight: z.number(),
  types: z.array(TypesTypeSchema),
  sprites: z.object({
    front_default: z.string().nullable(),
    front_shiny: z.string().nullable(),
    back_default: z.string().nullable(),
    back_shiny: z.string().nullable(),
    front_female: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
    back_female: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
  }),
  abilities: z.array(
    z.object({
      is_hidden: z.boolean(),
      slot: z.number(),
      ability: z.object({
        name: z.string(),
        url: z.string().optional(),
      }),
    }),
  ),
  held_items: z.array(
    z.object({
      item: z.object({
        name: z.string(),
        url: z.string().optional(),
      }),
    }),
  ),
  species: z.object({
    name: z.string(),
    url: z.string(),
  }),
});
