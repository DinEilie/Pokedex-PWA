import { TypesType } from './TypesType';

export type ResultType = {
  name: string;
  url: string;
  data: {
    id: number;
    sprites: {
      front_default: string;
      front_shiny: string;
      front_female: string;
      front_shiny_female: string;
      back_default: string;
      back_shiny: string;
      back_female: string;
      back_shiny_female: string;
    };
    types: TypesType[];
  };
};
