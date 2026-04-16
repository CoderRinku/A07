import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KeenKeeper | Keep Your Friendships Alive",
  description: "Manage and maintain your friendships easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen text-gray-800`}suppressHydrationWarning>
        <Navbar />
        {/* Main Content Area */}
        <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
        {/* Toast Notification Container */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}