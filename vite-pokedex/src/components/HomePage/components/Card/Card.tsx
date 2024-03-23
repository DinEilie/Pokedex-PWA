import { Suspense } from 'react';
import CardSkeleton from './CardSkeleton';
import { TypesType } from '../../types/TypesType';
import { getTypeColor } from '../../utilities/getTypeColor';

type CardProps = {
  id: number;
  name: string;
  sprite: string;
  types: TypesType[];
};

export default function Card(props: CardProps) {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <div className='group/hover font-pixelify w-fit bg-white p-5 shadow-xl duration-200 hover:scale-[107%] hover:cursor-pointer'>
        <div className='relative mx-auto h-56 w-56 overflow-hidden rounded-lg bg-sky-300 bg-gradient-to-t from-blue-500'>
          <div className='absolute z-10 w-28 -translate-x-10 translate-y-4 -rotate-45 bg-sky-100 text-center text-sm font-semibold text-zinc-500'>
            # {props.id}
          </div>
          <img
            alt={props.name}
            src={props.sprite}
            className='h-56 w-56 duration-200 group-hover/hover:drop-shadow-[0_10px_8px_rgba(255,255,255,0.75)]'
          />
        </div>
        <div className='my-1 text-lg font-semibold capitalize'>{props.name}</div>
        <div className='flex flex-wrap justify-between'>
          {props.types.map((type, i) => (
            <div
              key={i}
              className={`w-24 rounded-md px-2 py-0 text-center text-sm font-medium capitalize text-white ${getTypeColor(type.type.name)}`}>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
