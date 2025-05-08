import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { getHashedName, NameRegistryState } from '@solana/spl-name-service';

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

export async function fundUser(pubkey) {
  await connection.requestAirdrop(pubkey, 1e9);
}
export async function resolveSolName(pubkey) {
  try {
    const hashed = await getHashedName(pubkey.toBase58());
    const { data } = await NameRegistryState.retrieve(connection, new PublicKey(hashed[0]));
    return data?.name || null;
  } catch {
    return null;
  }
}
