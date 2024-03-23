import { useQuery } from 'react-query';
import { getTypeColor } from '../../utilities/getTypeColor';
import { useStore } from '../../../../stores/filter';
import logo from '../../../../assets/International_Pokémon_logo.svg';
import hamburger from '../../../../assets/pokeball.svg';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu';
export default function Navbar() {
  // React query fetch function
  async function fetchTypes() {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    const responseData: { results: { name: string; url: string }[] } = await response.json();
    return responseData;
  }

  // State management store
  const filter = useStore();

  const { data, status } = useQuery('types', fetchTypes);
  return status === 'loading' ? (
    <div className='sticky top-0 z-50 flex w-full items-center justify-start bg-white py-6 shadow-lg'>
      <img alt='Pokemon logo.' src={logo} className='w-48' />
    </div>
  ) : status === 'error' ? (
    <div className='sticky top-0 z-50 flex w-full items-center justify-start bg-white py-6 shadow-lg'>
      <img alt='Pokemon logo.' src={logo} className='w-48' />
    </div>
  ) : (
    <div className='sticky top-0 z-50 bg-white shadow-lg'>
      <div className='bg-gradient-to-r from-blue-600 to-sky-400 p-1'></div>
      <div className='mx-auto flex items-center justify-around gap-10 bg-white py-3 md:w-11/12 md:justify-between lg:w-10/12 lg:gap-20 2xl:w-8/12'>
        <img alt='Pokemon logo.' src={logo} className='w-32' />
        <div className='hidden md:inline-block'>
          <label htmlFor='types'>Type: </label>
          <select
            onChange={(e) => filter.setCurrentType(e.target.value)}
            defaultValue={filter.currentType}
            name='types'
            id='types'
            className='mx-2 border-2 text-center capitalize'>
            <option value='all'>All</option>
            {data?.results.map((data, i) => (
              <option
                key={i}
                value={data.name}
                className={`w-24 rounded-md px-2 py-0 text-center text-sm font-medium capitalize text-white ${getTypeColor(data.name)}`}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className='hidden md:inline-block'>
          <label htmlFor='search'>Filter by ID or name: </label>
          <input
            onChange={(e) => filter.setCurrentPokemon(e.target.value)}
            type='search'
            id='search'
            name='search'
            className='mx-2 border-2'
          />
        </div>
        <div className='hidden md:inline-block'>
          <span className='text-lg font-semibold text-blue-600'>{filter.totalPokemons}</span> results.
        </div>
        <MobileMenu data={data} />
      </div>
    </div>
  );
}
