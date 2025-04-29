import { useState } from 'react';

export default function ProfileEditor({ onSave }) {
  const [name, setName] = useState('');
  const [links, setLinks] = useState([{ label:'', url:'' }]);
  const addLink = () => setLinks([...links, { label:'', url:'' }]);

  const handleSave = () => onSave({ name, links });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4 max-w-md mx-auto animate-fadeIn">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Create Profile</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e=>setName(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      {links.map((l,i)=>(
        <div key={i} className="flex gap-2">
          <input
            placeholder="Label"
            value={l.label}
            onChange={e=>{ const nl=[...links]; nl[i].label=e.target.value; setLinks(nl); }}
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            placeholder="URL"
            value={l.url}
            onChange={e=>{ const nl=[...links]; nl[i].url=e.target.value; setLinks(nl); }}
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      ))}
      <button onClick={addLink} className="text-sm text-indigo-600">+ Add Link</button>
      <button onClick={handleSave}
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Save to IPFS
      </button>
    </div>
  );
}
