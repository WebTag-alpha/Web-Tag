import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WalletConnect from "../components/WalletConnect";
import ProfileCard from "../components/ProfileCard";
import { useWallet } from "@solana/wallet-adapter-react";
import { PlusCircle } from "react-feather";

export default function Profile() {
  const { connected, publicKey } = useWallet();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (connected) {
      const cid = localStorage.getItem("profile:" + publicKey.toBase58());
      if (cid) {
        fetch(`https://gateway.pinata.cloud/ipfs/${cid}`)
          .then((r) => r.json())
          .then(setProfile);
      }
    }
  }, [connected]);

  if (!connected) return <WalletConnect />;
  if (!profile)
    return (
      <div className=" flex items-center">
        <div className="flex  flex-col items-center justify-center p-8 my-10 mx-auto max-w-md rounded-xl bg-[#151a29]/90 border border-[#232a3d] shadow-lg backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-[#6c63ff]/20 flex items-center justify-center mb-4">
            <PlusCircle className="w-8 h-8 text-[#6c63ff]" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            No Profile Found
          </h2>

          <p className="text-gray-300 text-center mb-6">
            Create a verified on-chain profile with customizable links to social
            media, NFT collections, and more.
          </p>

          <Link
            to="/create"
            className="px-6 py-3 bg-[#6c63ff] hover:bg-[#5a52e0] text-white font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            Create Your Profile
          </Link>
        </div>
      </div>
    );

  return (
    <div className="py-10 px-4 animate-fadeIn">
      <ProfileCard
        name={profile.name}
        cid={localStorage.getItem("profile:" + publicKey.toBase58())}
        links={profile.links}
      />
    </div>
  );
}
