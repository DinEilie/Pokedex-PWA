import { Suspense } from 'react';
import ViewSkeleton from './ViewSkeleton';
import logo from '../../../../assets/International_Pokémon_logo.svg';
type PropsType = {
  name?: string;
  url?: string | null;
};

export default function View(props: PropsType) {
  return (
    <Suspense fallback={<ViewSkeleton />}>
      <div className='h-28 w-28 overflow-hidden rounded-lg bg-sky-300 bg-gradient-to-t from-blue-500 md:h-36 md:w-36 lg:h-48 lg:w-48 xl:h-56 xl:w-56'>
        <img
          alt={props.name ?? 'unknown'}
          src={props.url ?? logo}
          className='h-28 w-28 duration-200 group-hover/hover:drop-shadow-[0_10px_8px_rgba(255,255,255,0.75)] md:h-36 md:w-36 lg:h-48 lg:w-48 xl:h-56 xl:w-56'
        />
      </div>
    </Suspense>
  );
}
