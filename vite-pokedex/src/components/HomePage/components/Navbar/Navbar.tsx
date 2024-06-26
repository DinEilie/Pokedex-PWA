import { useQuery } from 'react-query';
import { getTypeColor } from '../../utilities/getTypeColor';
import { useStore } from '../../../../stores/filter';
import logo from '../../../../assets/International_Pokémon_logo.svg';
import MobileMenu from './components/MobileMenu';
import { fetchPokemonTypes } from './utilities/fetchPokemonTypes';
export default function Navbar() {
  // State management store
  const filter = useStore();

  const { data, status } = useQuery('types', fetchPokemonTypes);
  return status === 'loading' ? (
    <div className='sticky top-0 z-50 bg-white shadow-lg'>
      <div className='bg-gradient-to-r from-blue-600 to-sky-400 p-1'></div>
      <div className='mx-auto flex items-center justify-around gap-10 bg-white py-3 md:w-11/12 md:justify-between lg:gap-20 xl:w-10/12 2xl:w-8/12'>
        <img alt='Pokemon logo.' src={logo} className='w-32' />
      </div>
    </div>
  ) : status === 'error' ? (
    <div className='sticky top-0 z-50 bg-white shadow-lg'>
      <div className='bg-gradient-to-r from-blue-600 to-sky-400 p-1'></div>
      <div className='mx-auto flex items-center justify-around gap-10 bg-white py-3 md:w-11/12 md:justify-between lg:gap-20 xl:w-10/12 2xl:w-8/12'>
        <img alt='Pokemon logo.' src={logo} className='w-32' />
        <div>An error occured while loding filter options, please again later.</div>
        <div></div>
      </div>
    </div>
  ) : (
    <div className='sticky top-0 z-50 bg-white shadow-lg'>
      <div className='bg-gradient-to-r from-blue-600 to-sky-400 p-1'></div>
      <div className='mx-auto flex items-center justify-around gap-10 bg-white py-3 md:w-11/12 md:justify-between lg:gap-20 xl:w-10/12 2xl:w-8/12'>
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
            {data?.results.map((data: { name: string; url: string }, i: number) => (
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
