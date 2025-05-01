const JWT = import.meta.env.VITE_PINATA_JWT;
export async function pinJSONToIPFS(json) {
    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":  `Bearer ${JWT}`
      },
      body: JSON.stringify(json),
    });
    if (!res.ok) throw new Error("Pinata failed: " + res.status);
    const { IpfsHash } = await res.json();
    return IpfsHash;
  }
  