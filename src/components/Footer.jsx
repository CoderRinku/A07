import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#214D38] text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        <p className="text-sm text-green-100 max-w-md mb-8">
          Track your interactions, set goals, and never lose touch with the people who matter most.
        </p>
        
        {/* Social Icons */}
        <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-green-200">Social Links</p>
        <div className="flex gap-4 mb-12">
          <div className="bg-white text-[#214D38] p-2.5 rounded-full hover:scale-110 transition cursor-pointer">
            <FaFacebook className="text-lg" />
          </div>
          <div className="bg-white text-[#214D38] p-2.5 rounded-full hover:scale-110 transition cursor-pointer">
            <FaTwitter className="text-lg" />
          </div>
          <div className="bg-white text-[#214D38] p-2.5 rounded-full hover:scale-110 transition cursor-pointer">
            <FaInstagram className="text-lg" />
          </div>
        </div>
        
        {/* Bottom Links */}
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