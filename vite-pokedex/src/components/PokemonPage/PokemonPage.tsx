import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getTypeColor } from '../HomePage/utilities/getTypeColor';
import { Link, useLocation } from 'react-router-dom';
import View from './components/View/View';
import { fetchPokemon } from './utilities/fetchPokemon';
import PageLoading from './components/PageLoading';
import NotFound from '../ErrorPage/components/NotFound';
import Pagination from './components/Pagination';
import { useEffect } from 'react';
export default function PokemonPage() {
  const { id } = useParams();
  const location = useLocation();
  const { data, status, refetch, isRefetching } = useQuery('pokemon', () => fetchPokemon(id ?? 'psyduck'));

  useEffect(() => {
    refetch();
  }, [location, refetch]);
  return status === 'loading' || isRefetching ? (
    <PageLoading />
  ) : status === 'error' ? (
    <div className='mx-auto mt-20 flex w-10/12 flex-col flex-wrap justify-center gap-y-10 md:w-8/12'>
      <NotFound />
    </div>
  ) : (
    <div className='mx-auto mt-5 flex w-11/12 flex-col justify-between bg-white p-5 font-pixelify shadow-xl md:mt-10 md:w-10/12 xl:flex-row 2xl:w-8/12'>
      <div className='order-2 mt-10 flex w-full flex-wrap justify-between gap-5 md:mt-0 md:gap-2 xl:order-1 xl:w-1/2 xl:justify-normal'>
        <View name={data?.name} url={data?.sprites.front_default} />
        <View name={data?.name + ' back.'} url={data?.sprites.back_default} />
        <View name={data?.name + ' shiny.'} url={data?.sprites.front_shiny} />
        <View name={data?.name + ' back shiny.'} url={data?.sprites.back_shiny} />
      </div>
      <div className='relative order-1 w-full xl:order-2 xl:w-1/2'>
        <div className='flex items-center justify-between text-center text-xl font-bold capitalize md:text-4xl'>
          <span className='order-2'>{data?.name}</span>
          <span className='order-1 mx-2 text-zinc-400'># {data?.id}</span>
          <div className='order-3 flex flex-col gap-2'>
            {data?.types.map((type, i) => (
              <div
                key={i}
                className={`w-24 rounded-md px-2 py-0 text-center text-sm font-medium capitalize text-white ${getTypeColor(type.type.name)}`}>
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
        <ul className='mb:text-2xl mb-16 mt-5 text-lg font-bold capitalize xl:mb-0 xl:mt-10'>
          <li>
            Weight: <span className='text-xl text-blue-600'>{data?.weight}kg</span>
          </li>
          <li>
            Height: <span className='text-xl text-blue-600'>{(data?.height ?? 0) / 10}m</span>
          </li>
          <li>
            EXP: <span className='text-xl text-blue-600'>{data?.base_experience}</span>
          </li>
          <li className='truncate'>
            Abilities:
            <span className='text-xl text-blue-600'>
              {data?.abilities.map((ability, i) => (
                <span className='mx-2' key={i}>
                  {ability.ability.name + (i === data.abilities.length - 1 ? '.' : ',')}
                </span>
              ))}
            </span>
          </li>
          <li className='truncate'>
            Held Items:
            <span className='text-xl text-blue-600'>
              {data?.held_items.map((item, j) => (
                <span className='mx-2' key={j}>
                  {item.item.name + (j === data.held_items.length - 1 ? '.' : ',')}
                </span>
              ))}
            </span>
          </li>
          <li className='truncate'>
            Evolution:
            <span className='text-xl text-blue-600'>
              {data?.evolutionArray?.map((evolution, i) => (
                <Link reloadDocument to={`../pokemon/${evolution}`} key={i} className='mx-2'>
                  {evolution +
                    (data?.evolutionArray !== undefined && data.evolutionArray.length > i + 1 ? '  ->' : '.')}
                </Link>
              ))}
            </span>
          </li>
        </ul>
        <Pagination current={data?.id ?? 0} />
      </div>
    </div>
  );
}
