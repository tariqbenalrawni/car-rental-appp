"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur shadow-md py-4 px-6 flex items-center justify-between mb-8 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors">🚗 ProBooking</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/account" className="px-5 py-2 rounded-lg font-semibold text-blue-700 hover:bg-blue-100 transition-colors">حسابي</Link>
      </div>
    </nav>
  );
}
