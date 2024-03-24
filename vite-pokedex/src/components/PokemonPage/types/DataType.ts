import { TypesType } from '../../HomePage/types/TypesType';

export type DataType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: TypesType[];
  sprites: {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
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
