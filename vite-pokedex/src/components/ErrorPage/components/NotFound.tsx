import Psyduck from '../../../assets/Psyduck.png';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center rounded-lg bg-white p-2 drop-shadow-2xl'>
      <img alt='Psyduck pondering.' src={Psyduck} className='h-28 w-28 md:h-40 md:w-40' />
      <div>
        <h1 className='text-4xl font-bold text-gray-900'>Oh no!</h1>
        <h2 className='text-xl font-bold text-gray-900'>Psyduck couldn't find any pokemons nearby.</h2>
      </div>
    </div>
  );
}
