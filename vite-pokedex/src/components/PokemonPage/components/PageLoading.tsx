import ViewsLoading from './View/ViewsLoading';

export default function PageLoading() {
  return (
    <div className='mx-auto mt-5 flex w-11/12 flex-col justify-between bg-white p-5 shadow-xl md:mt-10 md:w-10/12 xl:flex-row 2xl:w-8/12'>
      <ViewsLoading />
      <div className='order-1 xl:order-2 xl:w-1/2'>
        <div className='flex items-center justify-between gap-3'>
          <span className='order-2 w-3/5 animate-pulse rounded-lg bg-slate-300 p-3'></span>
          <span className='order-1 mx-2 w-1/5 animate-pulse rounded-lg bg-slate-300 p-3'></span>
          <div className='order-3 flex flex-col items-center justify-center gap-2'>
            <div className={`w-24 animate-pulse rounded-md bg-slate-300 py-2`}></div>
            <div className={`w-24 animate-pulse rounded-md bg-slate-300 py-2`}></div>
          </div>
        </div>
        <ul className='mt-5 xl:mt-10'>
          <li className='mt-2 w-2/5 animate-pulse rounded-lg bg-slate-300 py-2'></li>
          <li className='mt-2 w-1/5 animate-pulse rounded-lg bg-slate-300 py-2'></li>
          <li className='mt-2 w-5/6 animate-pulse rounded-lg bg-slate-300 py-2'></li>
          <li className='mt-2 w-4/12 animate-pulse rounded-lg bg-slate-300 py-2'></li>
          <li className='mt-20 w-1/5 animate-pulse rounded-lg bg-slate-300 py-2'></li>
          <li className='mb-5 mt-2 w-2/5 animate-pulse rounded-lg bg-slate-300 py-2 xl:mb-0'></li>
        </ul>
      </div>
    </div>
  );
}
