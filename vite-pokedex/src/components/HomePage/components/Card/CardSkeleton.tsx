export default function Card() {
  return (
    <div className='w-fit bg-white p-5 shadow-xl hover:cursor-wait'>
      <div className='relative mx-auto h-56 w-56 animate-pulse overflow-hidden rounded-lg bg-slate-300'></div>
      <div className='my-2 h-4 w-1/3 animate-pulse rounded-lg bg-slate-300 font-semibold capitalize'></div>
      <div className='flex flex-wrap justify-between'>
        <div
          className={`w-24 animate-pulse rounded-lg bg-slate-300 py-2 text-center text-sm font-medium capitalize text-white`}></div>
        <div
          className={`w-24 animate-pulse rounded-md bg-slate-300 px-2 py-1 text-center text-sm font-medium capitalize text-white`}></div>
      </div>
    </div>
  );
}
