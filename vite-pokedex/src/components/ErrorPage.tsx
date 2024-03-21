import Psyduck from '../assets/Psyduck.png';
export default function ErrorPage() {
  return (
    <div className='mx-auto flex h-dvh items-center justify-center'>
      <img alt='Psyduck pondering.' src={Psyduck} className='h-40 w-40' />
      <div>
        <h1 className='text-4xl font-bold text-gray-900'>Error 404</h1>
        <h2 className='text-xl font-bold text-gray-900'>Psyduck couldn't find this page.</h2>
      </div>
    </div>
  );
}
