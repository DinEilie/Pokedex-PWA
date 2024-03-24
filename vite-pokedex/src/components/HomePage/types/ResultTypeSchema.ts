import { z } from 'zod';
import { ResultDataTypeSchema } from './ResultDataTypeSchema';
export const ResultTypeSchema = z.object({
  name: z.string(),
  url: z.string(),
  data: ResultDataTypeSchema.optional(),
});
