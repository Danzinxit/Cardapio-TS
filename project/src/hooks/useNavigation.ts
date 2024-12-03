import { NavLink } from '../types/navigation';

export function useNavigation() {
  const navLinks: NavLink[] = [
    { label: 'Home', href: '#' },
    { label: 'Stories', href: '#stories' },
    { label: 'Write', href: '#write' },
    { label: 'About', href: '#about' },
  ];

  return { navLinks };
}