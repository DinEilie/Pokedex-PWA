import { create } from 'zustand';

type FilterType = {
  currentType: string;
  currentPokemon: string;
  totalPokemons: number;
  maxPokemons: number;
  setCurrentType: (type: string) => void;
  setCurrentPokemon: (pokemon: string) => void;
  setTotalPokemons: (totalPokemons: number) => void;
  setMaxPokemons: (maxPokemons: number) => void;
};

export const useStore = create<FilterType>((set) => ({
  currentType: 'all',
  currentPokemon: '',
  totalPokemons: 0,
  maxPokemons: 150,
  setCurrentType: (type: string) => set({ currentType: type }),
  setCurrentPokemon: (pokemon: string) => set({ currentPokemon: pokemon }),
  setTotalPokemons: (totalPokemons: number) => set({ totalPokemons: totalPokemons }),
  setMaxPokemons: (maxPokemons: number) => set({ maxPokemons: maxPokemons }),
}));
