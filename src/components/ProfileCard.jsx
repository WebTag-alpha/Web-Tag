export default function ProfileCard({ name, bio, links }) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-6">
        <img src="/avatar.png" alt="avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-gray-600 text-center">{bio}</p>
        <div className="mt-4 space-y-2">
          {links.map((link, i) => (
            <a key={i} href={link.url} className="block text-center py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
  