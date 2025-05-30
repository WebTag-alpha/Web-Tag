const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmYjIxZTFhMi1iM2M2LTQ5YmMtODIxZS1lMGYwOTU5OTE5NzciLCJlbWFpbCI6Im1pc2hhMzAwMTAxMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjgyMzc1YzNhMjljODRiNTJiYjAiLCJzY29wZWRLZXlTZWNyZXQiOiI3OWMyNWE2MDYyMzcwNDliZmEzODBkMmVhZjQ1NWU2MTZkYmE2OWIzNTdhNzMwZTdiZWJkMzYxZTMzNzc0YjYwIiwiZXhwIjoxNzgwMTU3MDU0fQ.IVvBGrwXO4XbTO6gtcSAJgvfLdgdAj0HOf40DglUZSQ";
export async function pinJSONToIPFS(json) {
  console.log("JWT", JWT);

  const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT}`,
    },
    body: JSON.stringify(json),
  });
  if (!res.ok) throw new Error("Pinata failed: " + res.status);
  const { IpfsHash } = await res.json();
  return IpfsHash;
}

export async function pinFileToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`Pinata file upload failed with status ${res.status}`);
  }

  const result = await res.json();

  // Перевір, що в result точно є IpfsHash
  if (!result.IpfsHash) {
    console.error("Invalid response from Pinata:", result);
    throw new Error("No IpfsHash in Pinata response");
  }

  return result; // тут має бути { IpfsHash: '...' }
}
