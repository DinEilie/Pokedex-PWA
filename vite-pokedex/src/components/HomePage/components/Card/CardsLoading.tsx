import CardSkeleton from './CardSkeleton';

export default function CardsLoading() {
  return (
    <div className='mx-auto mt-10 flex w-8/12 flex-wrap justify-between gap-y-10'>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
