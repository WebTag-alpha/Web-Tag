import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import WalletConnect from "../components/WalletConnect";
import ProfileEditor from "../components/ProfileEditor";
import { pinJSONToIPFS } from "../utils/ipfs";

export default function CreateProfile() {
  const { connected, publicKey } = useWallet();
  const [cid, setCid] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (connected) {
      const storedCid = localStorage.getItem("profile:" + publicKey.toBase58());
      setCid(storedCid);
    }
  }, [connected, publicKey]);

  useEffect(() => {
    if (cid) {
      fetch(`https://gateway.pinata.cloud/ipfs/${cid}`)
        .then((r) => r.json())
        .then(setProfile)
        .catch(console.error);
    }
  }, [cid]);

  const handleSave = async (profileData) => {
    const data = {
      ...profileData,
      pubkey: publicKey.toBase58(),
      timestamp: Date.now(),
    };
    const newCid = await pinJSONToIPFS(data);
    localStorage.setItem("profile:" + publicKey.toBase58(), newCid);
    setCid(newCid);
  };

  if (!connected) return <WalletConnect />;

  return (
    <div className="py-10 px-4 space-y-6 animate-slideUp">
      <ProfileEditor onSave={handleSave} profile={profile} />
      {cid && (
        <p className="text-center text-sm text-indigo-600">
          Your profile CID:{" "}
          <a
            href={`https://gateway.pinata.cloud/ipfs/${cid}`}
            className="underline"
            target="_blank"
          >
            {cid}
          </a>
        </p>
      )}
    </div>
  );
}
