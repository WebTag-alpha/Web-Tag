import { PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function ProfileCard({ name, cid, links }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-md mx-auto animate-slideUp">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 ">
          {name}
        </h2>
        <Link to="/create" className="w-5 h-5 cursor-pointer">
          <PencilIcon />
        </Link>
      </div>

      <p className="text-sm text-gray-300 mb-1">CID:</p>
      {cid && (
        <div className="flex flex-col p-3 rounded-lg bg-[#1e2538]/70 border border-[#232a3d] mb-4">
          <a
            href={`https://gateway.pinata.cloud/ipfs/${cid}`}
            className="text-sm font-medium text-[#6c63ff] hover:text-[#8a82ff] transition-colors duration-200 break-all flex items-center group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1">{cid}</span>
            <svg
              className="w-4 h-4 opacity-70 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}

      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              className="block bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded hover:bg-indigo-200 dark:hover:bg-gray-600 transition"
              target="_blank"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
