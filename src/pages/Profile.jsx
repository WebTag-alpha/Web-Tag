import { useEffect, useState } from 'react';

import WalletConnect from '../components/WalletConnect';
import ProfileCard from '../components/ProfileCard';
import { useWallet } from '@solana/wallet-adapter-react';
export default function Profile() {
  const { connected, publicKey } = useWallet();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (connected) {
      const cid = localStorage.getItem('profile:' + publicKey.toBase58());
      if (cid) fetch(`https://gateway.pinata.cloud/ipfs/${cid}`)
        .then(r=>r.json()).then(setProfile);
    }
  }, [connected]);

  if (!connected) return <WalletConnect/>;
  if (!profile)   return <p className="text-center mt-10">No profile found. Create one.</p>;

  return (
    <main className="py-10 px-4 animate-fadeIn">
      <ProfileCard
        name={profile.name}
        cid={localStorage.getItem('profile:' + publicKey.toBase58())}
        links={profile.links}
      />
    </main>
  );
}

