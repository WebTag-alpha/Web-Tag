export default function LinkItem({ label, url }) {
    return (
      <a href={url} className="block w-full py-2 px-4 bg-white shadow rounded hover:bg-purple-100 transition">
        {label}
      </a>
    );
  }
  