import WalletConnect from '../components/WalletConnect';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
   <main className="bg-gradient-to-r from-indigo-50 to-purple-50  dark:from-gray-900 dark:to-gray-800 py-12 md:py-20 animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Your <span className="text-indigo-600 dark:text-indigo-400">Web3</span> Identity
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              A decentralized alternative to Linktree for Web3 users. Create a verified on-chain profile with
              customizable links to social media, NFT collections, wallets, and more.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/create"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 text-center"
              >
                Create Your Profile
              </Link>
              <Link
                to="/profile"
                className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors duration-300 text-center"
              >
                Explore Profiles
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-600/10 dark:bg-indigo-400/10 rounded-full absolute -top-6 -left-6 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    WT
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-800 dark:text-white">WebTag Profile</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified On-Chain</p>
                  </div>
                  <div className="ml-auto text-green-600">🔒</div>
                </div>
                <div className="space-y-3">
                  {["Social Media", "NFT Collections", "Wallet Address", "DAO Memberships"].map((item, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        {index === 0 ? "🌐" : index === 1 ? "🖼️" : index === 2 ? "💰" : "👥"}
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Privacy</span>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Token-Gated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
