"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiHome, FiClock, FiTrendingUp } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome className="text-xl" /> },
    { name: "Timeline", path: "/timeline", icon: <FiClock className="text-xl" /> },
    { name: "Stats", path: "/stats", icon: <FiTrendingUp className="text-xl" /> },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
        
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logo.png" 
            alt="KeenKeeper Logo" 
            width={160} 
            height={40} 
            priority
            className="object-contain"
          />
        </Link>

       
        <div className="flex gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                
                className={`flex items-center gap-2 text-base font-semibold px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-[#214D38] text-white" 
                    : "text-[#64748B] hover:text-[#214D38] hover:bg-gray-50"
                }`}
              >
                {link.icon}
                <span className="hidden sm:block">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}