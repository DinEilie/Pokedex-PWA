export function getTypeColor(type: string): string {
  switch (type) {
    case 'normal':
      return 'bg-zinc-500';
    case 'fighting':
      return 'bg-red-500';
    case 'flying':
      return 'bg-sky-500';
    case 'poison':
      return 'bg-pink-500';
    case 'ground':
      return 'bg-yellow-800';
    case 'rock':
      return 'bg-amber-700';
    case 'bug':
      return 'bg-purple-500';
    case 'ghost':
      return 'bg-indigo-500';
    case 'steel':
      return 'bg-teal-500';
    case 'fire':
      return 'bg-orange-500';
    case 'water':
      return 'bg-blue-500';
    case 'grass':
      return 'bg-green-500';
    case 'electric':
      return 'bg-yellow-500';
    case 'psychic':
      return 'bg-pink-500';
    case 'ice':
      return 'bg-sky-400';
    case 'dragon':
      return 'bg-blue-700';
    case 'dark':
      return 'bg-gray-800';
    case 'fairy':
      return 'bg-purple-500';
    case 'unknown':
      return 'bg-gray-300';
    case 'shadow':
      return 'bg-gray-500';
    default:
      return 'bg-gray-700';
  }
}
