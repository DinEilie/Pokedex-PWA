import { z } from 'zod';
export const TypesTypeSchema = z.object({
  slot: z.number().optional(),
  type: z.object({
    name: z.string(),
    url: z.string().optional(),
  }),
});
