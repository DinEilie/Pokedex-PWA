import { useEffect, useState } from 'react';
import { useStore } from '../../../../../stores/filter';
import { getTypeColor } from '../../../utilities/getTypeColor';
type PropsType = {
  data?: { results: { name: string; url: string }[] };
};

export default function MobileMenu(props: PropsType) {
  const filter = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isSlide, setIsSlide] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsHidden(false);
      setTimeout(() => {
        setIsSlide(true);
      }, 10);
    } else {
      setIsSlide(false);
      setTimeout(() => {
        setIsHidden(true);
      }, 200);
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={`${isSlide ? 'translate-y-20' : '-translate-y-20'} ${isHidden ? 'hidden' : ''} fixed top-0 -z-10 w-full bg-white px-2 py-5 shadow-lg duration-200 md:hidden`}>
        <div className='mb-4'>
          <label htmlFor='types'>Type: </label>
          <select
            onChange={(e) => filter.setCurrentType(e.target.value)}
            defaultValue={filter.currentType}
            name='types'
            id='types'
            className='mx-2 w-1/3 border-2 text-center capitalize'>
            <option value='all'>All</option>
            {props.data?.results.map((data, i) => (
              <option
                key={i}
                value={data.name}
                className={`w-1/2 rounded-md px-2 py-0 text-center text-sm font-medium capitalize text-white ${getTypeColor(data.name)}`}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-5'>
          <label htmlFor='search'>Filter: </label>
          <input
            onChange={(e) => filter.setCurrentPokemon(e.target.value)}
            type='search'
            id='search'
            name='search'
            className='mx-2 border-2'
          />
        </div>
        <div className='text-center'>
          <span className='text-center text-lg font-semibold text-blue-600'>{filter.totalPokemons}</span> results.
        </div>
      </div>
      <button className='fixed rounded-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-10 w-10'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </button>
      <button className='rounded-lg border-2 md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-10 w-10'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </button>
    </>
  );
}
