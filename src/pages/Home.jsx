import WalletConnect from '../components/WalletConnect';

export default function Home() {
  return (
    <main className="py-10 px-4 animate-fadeIn">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
        Welcome to Link3r
      </h1>
      <WalletConnect/>
    </main>
  );
}
