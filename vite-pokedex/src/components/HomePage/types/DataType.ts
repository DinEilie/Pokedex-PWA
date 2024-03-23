import { ResultType } from './ResultType';

export type DataType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultType[];
};
