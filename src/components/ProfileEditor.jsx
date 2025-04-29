import { useState } from 'react';

export default function ProfileEditor({ onSave }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [links, setLinks] = useState([{ label: '', url: '' }]);

  const handleSave = () => {
    onSave({ name, bio, links });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-lg font-bold mb-4">Редагувати профіль</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Ім’я" className="w-full p-2 border mb-2" />
      <textarea value={bio} onChange={e => setBio(e.target.value)} placeholder="Біо" className="w-full p-2 border mb-2" />
      {links.map((link, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input value={link.label} onChange={e => {
            const newLinks = [...links];
            newLinks[index].label = e.target.value;
            setLinks(newLinks);
          }} placeholder="Назва" className="flex-1 p-2 border" />
          <input value={link.url} onChange={e => {
            const newLinks = [...links];
            newLinks[index].url = e.target.value;
            setLinks(newLinks);
          }} placeholder="URL" className="flex-1 p-2 border" />
        </div>
      ))}
      <button onClick={() => setLinks([...links, { label: '', url: '' }])} className="text-sm text-purple-600 mb-2">+ Додати лінк</button>
      <button onClick={handleSave} className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">Зберегти</button>
    </div>
  );
}
