import { z } from 'zod';
import { ResultTypeSchema } from './ResultTypeSchema';

export const DataTypeSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(ResultTypeSchema),
});
