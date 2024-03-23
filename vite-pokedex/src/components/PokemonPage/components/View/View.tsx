import { Suspense } from 'react';
import ViewSkeleton from './ViewSkeleton';

type PropsType = {
  name?: string;
  url?: string;
};

export default function View(props: PropsType) {
  return (
    <Suspense fallback={<ViewSkeleton />}>
      <div className='h-56 w-56 overflow-hidden rounded-lg bg-sky-300 bg-gradient-to-t from-blue-500'>
        <img
          alt={props.name ?? 'unknown'}
          src={props.url ?? 'unknown'}
          className='h-56 w-56 duration-200 group-hover/hover:drop-shadow-[0_10px_8px_rgba(255,255,255,0.75)]'
        />
      </div>
    </Suspense>
  );
}
