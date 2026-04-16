export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
        <p className="font-medium text-gray-700 mb-2">👥 KeenKeeper</p>
        <p className="text-sm">Keep Your Friendships Alive.</p>
        <p className="text-xs mt-4">© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
      </div>
    </footer>
  );
}