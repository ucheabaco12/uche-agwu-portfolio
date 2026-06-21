import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <Link href="/" className="font-bold text-xl text-blue-700">
          Dr. Uche Agwu
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/research">Research</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}