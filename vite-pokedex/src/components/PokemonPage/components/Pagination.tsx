import { Link } from 'react-router-dom';
import { useStore } from '../../../stores/filter';

type PropsType = {
  current: number;
};

export default function Pagination(props: PropsType) {
  const filter = useStore();
  return (
    <div className='absolute -bottom-5 flex w-full items-center justify-between text-lg font-thin text-blue-700 md:bottom-0'>
      <Link
        to={`../pokemon/${props.current - 1}`}
        className={`flex flex-col items-center ${props.current === 1 ? 'hidden' : ''}`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-10 w-10 md:h-6 md:w-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
        Previous
      </Link>
      <Link to={`../#home`} className={`flex flex-col items-center`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-10 w-10 md:h-6 md:w-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </svg>
        Home
      </Link>
      <Link
        to={`../pokemon/${props.current + 1}`}
        className={`flex flex-col items-center ${props.current === filter.maxPokemons ? 'hidden' : ''}`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-10 w-10 md:h-6 md:w-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
        Next
      </Link>
    </div>
  );
}
