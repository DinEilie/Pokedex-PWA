import { TypesType } from '../../HomePage/types/TypesType';

export type DataType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: TypesType[];
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_female: string;
    back_shiny_female: string;
  };
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url?: string;
    };
  }[];
  held_items: {
    item: {
      name: string;
      url?: string;
    };
  }[];
  species: {
    name: string;
    url: string;
  };
};
