import ViewSkeleton from './ViewSkeleton';
export default function ViewsLoading() {
  return (
    <div className='flex w-1/2 flex-wrap gap-2'>
      <ViewSkeleton />
      <ViewSkeleton />
      <ViewSkeleton />
      <ViewSkeleton />
    </div>
  );
}
