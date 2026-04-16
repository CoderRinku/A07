import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#214D38] text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <Image src="/assets/logo-xl.png" alt="KeenKeeper" width={220} height={60} className="mb-6 object-contain" />
        
        <p className="text-sm text-green-100 max-w-md mb-8">
          Track your interactions, set goals, and never lose touch with the people who matter most.
        </p>
        
        <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-green-200">Social Links</p>
        <div className="flex gap-4 mb-12">
          <Link href="#" className="bg-white p-2.5 rounded-full hover:scale-110 transition flex items-center justify-center w-10 h-10">
            <Image src="/assets/facebook.png" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="#" className="bg-white p-2.5 rounded-full hover:scale-110 transition flex items-center justify-center w-10 h-10">
            <Image src="/assets/twitter.png" alt="Twitter" width={20} height={20} />
          </Link>
          <Link href="#" className="bg-white p-2.5 rounded-full hover:scale-110 transition flex items-center justify-center w-10 h-10">
            <Image src="/assets/instagram.png" alt="Instagram" width={20} height={20} />
          </Link>
        </div>
        
        <div className="w-full border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-green-200 font-medium">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}