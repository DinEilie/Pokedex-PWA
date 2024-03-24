import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import Card from './components/Card/Card';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useStore } from '../../stores/filter';
import { ResultType } from './types/ResultType';
import NotFound from '../ErrorPage/components/NotFound';
import { fetchPokemons } from './utilities/fetchPokemons';
import CardsLoading from './components/Card/CardsLoading';
import { TypesType } from './types/TypesType';

export default function HomePage() {
  const { data, refetch, isFetching, hasNextPage, fetchNextPage, status } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (lastPage) => lastPage.previous,
  });

  // Filter state management and filtered data
  const filter = useStore();
  const [filteredData, setFilteredData] = useState<ResultType[]>([]);

  // Handle infinite scroll loading
  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.offsetHeight;
      if (scrollTop + windowHeight >= fullHeight - 240 && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasNextPage, isFetching]);

  // Handle filtering
  useEffect(() => {
    let newFilteredData: ResultType[] = [];
    data?.pages.forEach((page) => {
      page.results.forEach((result: ResultType) => {
        // Filter by type
        let typeExist = filter.currentType === 'all' ? true : false;
        result.data?.types.forEach((value: TypesType) => {
          if (value.type.name === filter.currentType) typeExist = true;
        });
        // Filter by name or ID
        let nameIdExist = filter.currentPokemon === '' ? true : false;
        if (result.name.includes(filter.currentPokemon) || result.data?.id.toString().includes(filter.currentPokemon))
          nameIdExist = true;
        if (typeExist && nameIdExist) newFilteredData = [...newFilteredData, result];
      });
    });

    // Update filtered data and total results
    setFilteredData(newFilteredData);
    if (filter.currentType === 'all' && filter.currentPokemon === '')
      filter.setTotalPokemons(data?.pages[0].count ?? 0);
    else filter.setTotalPokemons(newFilteredData.length);
    filter.setMaxPokemons(
      data?.pages[data.pages.length - 1].results[data?.pages[data.pages.length - 1].results.length - 1].data.id ?? 150,
    );
  }, [filter.currentPokemon, filter.currentType, data?.pages.length]);

  const location = useLocation();
  useEffect(() => {
    refetch();
  }, [location, refetch]);
  return (
    <div id='home'>
      <Navbar />
      {status === 'loading' ? (
        <CardsLoading />
      ) : status === 'error' ? (
        <div className='mx-auto mt-20 flex w-10/12 flex-col flex-wrap justify-center gap-y-10 md:w-8/12'>
          <NotFound />
        </div>
      ) : (
        <div className='mt-10'>
          <div
            className={`mx-auto mt-10 flex flex-wrap md:w-10/12 lg:w-11/12 2xl:w-8/12 ${filteredData.length >= 1 ? 'justify-center gap-x-5 md:justify-between md:gap-16 xl:gap-9 2xl:gap-5' : 'justify-center'} gap-y-20`}>
            {filteredData.map((pokemon, index) => (
              <Link key={index} to={`pokemon/${pokemon.name}`}>
                <Card
                  key={index}
                  id={pokemon.data?.id ?? 0}
                  name={pokemon.name}
                  sprite={pokemon.data?.sprites.front_default}
                  types={pokemon.data?.types}
                />
              </Link>
            ))}
          </div>
          {!hasNextPage ? (
            <div className='mt-20 text-center text-5xl'>Go catch'm all!</div>
          ) : isFetching ? (
            <CardsLoading />
          ) : (
            <div className='mx-auto mt-20 flex w-8/12 flex-col flex-wrap justify-center gap-y-10'>
              {filteredData.length < 1 ? <NotFound /> : <></>}
              <button
                className='mx-auto w-fit rounded bg-blue-500 px-4 py-2 font-medium text-white'
                onClick={() => {
                  if (hasNextPage) fetchNextPage();
                }}>
                Reload more
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
