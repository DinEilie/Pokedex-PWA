import { Suspense } from 'react';
import CardSkeleton from './CardSkeleton';
import { TypesType } from '../../types/TypesType';
import { getTypeColor } from '../../utilities/getTypeColor';
import logo from '../../../../assets/International_Pokémon_logo.svg';
type CardProps = {
  id: number;
  name: string;
  sprite?: string | null;
  types?: TypesType[];
};

export default function Card(props: CardProps) {
  return (
    <Suspense fallback={<CardSkeleton />}>
      <div className='group/hover w-fit bg-white p-5 font-pixelify shadow-xl duration-200 hover:scale-[107%] hover:cursor-pointer'>
        <div className='relative mx-auto h-56 w-56 overflow-hidden rounded-lg bg-sky-300 bg-gradient-to-t from-blue-500'>
          <div className='absolute z-10 w-28 -translate-x-10 translate-y-4 -rotate-45 bg-sky-100 text-center text-sm font-semibold text-zinc-500'>
            # {props.id}
          </div>
          <img
            alt={props.name ?? 'unknown'}
            src={props.sprite ?? logo}
            className='h-56 w-56 duration-200 group-hover/hover:drop-shadow-[0_10px_8px_rgba(255,255,255,0.75)]'
          />
        </div>
        <div className='my-1 text-lg font-semibold capitalize'>{props.name}</div>
        <div className='flex flex-wrap justify-between'>
          {props.types?.map((type, i) => (
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
