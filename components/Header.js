import Link from "next/link";

const Header = () => (
  <header className="p-4 bg-gray-800 text-white flex justify-between">
    <h1 className="text-xl font-bold">Foodie App</h1>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about" className="ml-4">About</Link>
    </nav>
  </header>
);

export default Header;
