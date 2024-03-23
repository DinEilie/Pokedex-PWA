import ViewSkeleton from './ViewSkeleton';
export default function ViewsLoading() {
  return (
    <div className='order-2 mt-10 flex w-full flex-wrap justify-between gap-5 md:mt-0 md:gap-2 xl:order-1 xl:w-1/2 xl:justify-normal'>
      <ViewSkeleton />
      <ViewSkeleton />
      <ViewSkeleton />
      <ViewSkeleton />
    </div>
  );
}
