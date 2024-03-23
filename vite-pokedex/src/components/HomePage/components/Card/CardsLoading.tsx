import CardSkeleton from './CardSkeleton';

export default function CardsLoading() {
  return (
    <div className='mx-auto mt-10 flex w-10/12 flex-wrap justify-center gap-y-20 md:w-10/12 md:justify-between md:gap-16 lg:w-11/12 2xl:w-8/12 2xl:gap-5'>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
