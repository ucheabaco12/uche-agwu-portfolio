export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">

      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-xl font-bold">
          Dr. Uche Agwu
        </h3>

        <p className="mt-2 text-slate-300">
          AI • Telecommunications • Digital Transformation
        </p>

        <div className="mt-6 text-slate-400 text-sm">
          © {new Date().getFullYear()} Dr. Uche Agwu. All rights reserved.
        </div>

      </div>

    </footer>
  );
}