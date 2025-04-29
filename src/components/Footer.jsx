export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-12 animate-fadeIn">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Link3r. All rights reserved.
      </div>
    </footer>
  );
}
