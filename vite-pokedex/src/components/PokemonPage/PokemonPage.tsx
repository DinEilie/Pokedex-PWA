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
  const { data, status, refetch } = useQuery('pokemon', () => fetchPokemon(id ?? 'psyduck'));

  useEffect(() => {
    refetch();
  }, [location, refetch]);
  return status === 'loading' ? (
    <PageLoading />
  ) : status === 'error' ? (
    <div className='mx-auto mt-20 flex w-8/12 flex-col flex-wrap justify-center gap-y-10'>
      <NotFound />
    </div>
  ) : (
    <div className='font-pixelify mx-auto mt-10 flex w-8/12 justify-between bg-white p-5 shadow-xl'>
      <div className='flex w-1/2 flex-wrap gap-2'>
        <View name={data?.name} url={data?.sprites.front_default} />
        <View name={data?.name + ' back.'} url={data?.sprites.back_default} />
        <View name={data?.name + ' shiny.'} url={data?.sprites.front_shiny} />
        <View name={data?.name + ' back shiny.'} url={data?.sprites.back_shiny} />
      </div>
      <div className='relative w-1/2'>
        <div className='flex items-center justify-between text-center text-4xl font-bold capitalize'>
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
        <ul className='mt-10 text-2xl font-bold capitalize'>
          <li>
            Weight: <span className='text-xl text-blue-600'>{data?.weight}kg</span>
          </li>
          <li>
            Height: <span className='text-xl text-blue-600'>{(data?.height ?? 0) / 10}m</span>
          </li>
          <li>
            EXP: <span className='text-xl text-blue-600'>{data?.base_experience}</span>
          </li>
          <li>
            Abilities:
            <span className='text-xl text-blue-600'>
              {data?.abilities.map((ability, i) => (
                <span className='mx-2' key={i}>
                  {ability.ability.name + (i === data.abilities.length - 1 ? '.' : ',')}
                </span>
              ))}
            </span>
          </li>
          <li>
            Held Items:
            <span className='text-xl text-blue-600'>
              {data?.held_items.map((item, j) => (
                <span className='mx-2' key={j}>
                  {item.item.name + (j === data.held_items.length - 1 ? '.' : ',')}
                </span>
              ))}
            </span>
          </li>
          <li>
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
