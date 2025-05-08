import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { actions, WalletNotConnectedError } from "@metaplex-foundation/js";
const { mintNFT } = actions;

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const mintNFTOnSolana = async (wallet) => {
  if (!wallet.publicKey) {
    throw new WalletNotConnectedError();
  }

  const { txId } = await mintNFT({
    connection,
    wallet,
    uri: "https://example.com/metadata.json", // URL до метаданих NFT
  });

  console.log(`NFT Minted! Transaction ID: ${txId}`);
  return txId;
};
