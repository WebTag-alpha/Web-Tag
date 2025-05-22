import { useState, useEffect } from "react";

export default function ProfileEditor({ onSave, profile }) {
  const [name, setName] = useState("");
  const [links, setLinks] = useState([{ label: "", url: "" }]);

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setLinks(
        profile.links?.length ? profile.links : [{ label: "", url: "" }]
      );
    }
  }, [profile]);

  const addLink = () => {
    setLinks([...links, { label: "", url: "" }]);
  };

  const removeLastLink = () => {
    if (links.length > 1) {
      setLinks(links.slice(0, -1));
    }
  };

  const handleSave = () => {
    for (const link of links) {
      if (link.label.trim().length < 1) {
        window.alert("Link label must have at least 1 character.");
        return;
      }
    }

    onSave({ name, links });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4 max-w-md mx-auto animate-fadeIn">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
        Create Profile
      </h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />

      {links.map((l, i) => (
        <div key={i} className="flex gap-2">
          <input
            placeholder="Label"
            value={l.label}
            onChange={(e) => {
              const nl = [...links];
              nl[i].label = e.target.value;
              setLinks(nl);
            }}
            className="flex-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            placeholder="URL"
            value={l.url}
            onChange={(e) => {
              const nl = [...links];
              nl[i].url = e.target.value;
              setLinks(nl);
            }}
            className="flex-1 w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-ellipsis"
          />
        </div>
      ))}

      <div className="flex justify-between">
        <button onClick={addLink} className="text-sm text-indigo-600">
          + Add Link
        </button>
        <button onClick={removeLastLink} className="text-sm text-indigo-600">
          - Remove Link
        </button>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Save to IPFS
      </button>
    </div>
  );
}
