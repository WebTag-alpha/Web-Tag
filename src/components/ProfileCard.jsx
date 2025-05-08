export default function ProfileCard({ name, cid, links }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-md mx-auto animate-slideUp">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{name}</h2>
      {cid && (
        <p className="text-sm text-indigo-600 mb-4 break-all">
          CID: <a href={`https://gateway.pinata.cloud/ipfs/${cid}`} className="underline" target="_blank">{cid}</a>
        </p>
      )}
      <ul className="space-y-3">
        {links.map((link,i)=>(<li key={i}>
          <a href={link.url}
             className="block bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded hover:bg-indigo-200 dark:hover:bg-gray-600 transition"
             target="_blank"
          >
            {link.label}
          </a>
        </li>))}
      </ul>
    </div>
  );
}

  