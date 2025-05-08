import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      aria-label="Toggle theme"
    >
      {theme==='dark'
        ? <SunIcon className="w-5 h-5 text-yellow-400"/>
        : <MoonIcon className="w-5 h-5 text-gray-800"/>}
    </button>
  );
}
