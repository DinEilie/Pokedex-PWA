import Psyduck from '../../../assets/Psyduck.png';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center'>
      <img alt='Psyduck pondering.' src={Psyduck} className='h-40 w-40' />
      <div>
        <h1 className='text-4xl font-bold text-gray-900'>Oh no!</h1>
        <h2 className='text-xl font-bold text-gray-900'>Psyduck couldn't find any pokemons nearby.</h2>
      </div>
    </div>
  );
}
