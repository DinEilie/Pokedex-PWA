import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

type DataType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};
export default function HomePage() {
  async function fetchPokemons({ pageParam = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0' }) {
    const response = await fetch(pageParam);
    const responseData: DataType = await response.json();
    return responseData;
  }

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  useEffect(() => {}, []);
  return status === 'loading' ? (
    <div>Loading pokemons...</div>
  ) : status === 'error' ? (
    <div>An error occured! please try again later.</div>
  ) : (
    <div>
      <button type='button' className='bg-slate-300' onClick={() => fetchNextPage()}>
        LOAD MORE
      </button>
      {data?.pages.map((group, i) => (
        <div className='w-fit bg-slate-400' key={i}>
          <div>{group.next ?? 'NO-NEXT'}</div>
          <div>{group.previous ?? 'NO-PREV'}</div>
          {group.results.map((result, j) => (
            <div key={j}>{result.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
