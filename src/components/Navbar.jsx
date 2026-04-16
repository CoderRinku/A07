"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiHome, FiClock, FiTrendingUp } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();


  const getLinkStyle = (path) => {
    const isActive = pathname === path;
    const baseStyle = "flex items-center gap-2 font-semibold transition-all px-4 py-2 rounded-lg";
    

    if (isActive) {
      return `${baseStyle} text-[#FFFFFF] bg-[#214D38]/90`;
    } 

    return `${baseStyle} text-gray-600 hover:text-[#214D38] hover:bg-gray-100`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/assets/logo.png" alt="KeenKeeper" width={160} height={40} className="object-contain" />
        </Link>

        <div className="flex gap-2 sm:gap-4">
          <Link href="/" className={getLinkStyle("/")}>
            <FiHome className="text-lg" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link href="/timeline" className={getLinkStyle("/timeline")}>
            <FiClock className="text-lg" />
            <span className="hidden sm:inline">Timeline</span>
          </Link>
          <Link href="/stats" className={getLinkStyle("/stats")}>
            <FiTrendingUp className="text-lg" />
            <span className="hidden sm:inline">Stats</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}