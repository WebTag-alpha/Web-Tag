import { Link } from 'react-router-dom';
import { useWallet }  from '@solana/wallet-adapter-react';
import ThemeToggle    from './ThemeToggle';

export default function Header() {
  const { connected } = useWallet();
  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 animate-fadeIn">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Link3r</Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Home</Link>
            <Link to="/profile" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Profile</Link>
            <Link to="/create" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Create</Link>
            <Link to="/analytics" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Analytics</Link>
          </nav>
          {connected && <span className="text-green-600">🔒</span>}
          <ThemeToggle/>
        </div>
      </div>
    </header>
  );
}
