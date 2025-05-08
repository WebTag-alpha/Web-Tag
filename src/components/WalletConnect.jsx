import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function WalletConnect() {
  return (
    <div className="flex justify-center mt-8 animate-slideUp">
      <WalletMultiButton className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition" />
    </div>
  );
}
