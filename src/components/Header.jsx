import { useWeb3 } from '../context/Web3Context';
import { Link } from 'react-router-dom';

export default function Header() {
  const { wallet } = useWeb3();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        WebTag
      </Link>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
        {wallet ? (
          <span className="text-green-600 font-medium">Connected</span>
        ) : (
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition">
            Connect Wallet
          </button>
        )}
      </nav>
    </div>
  </header>
  );
}

