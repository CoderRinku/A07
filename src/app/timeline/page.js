"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPhoneCall, FiMessageSquare, FiVideo, FiClock } from "react-icons/fi";

export default function Timeline() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem("timeline");
    if (savedData) {
      setHistory(JSON.parse(savedData));
    }
    setLoading(false);
  }, []);

 
 
  const getIcon = (type) => {
    if (type === "Call") return <Image src="/assets/call.png" alt="Call" width={24} height={24} />;
    if (type === "Text") return <Image src="/assets/text.png" alt="Text" width={24} height={24} />;
    if (type === "Video") return <Image src="/assets/video.png" alt="Video" width={24} height={24} />;
    return <FiClock className="text-gray-600 text-xl" />;
  };

  
  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading timeline...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-[60vh] animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Timeline</h1>

      
      {history.length === 0 ? (
        <div className="bg-white p-10 rounded-xl border border-gray-200 text-center shadow-sm">
          <p className="text-gray-500 mb-4">No interactions yet. Go chat with your friends!</p>
          <Link 
            href="/" 
            className="bg-[#214D38] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition"
          >
            Go to Home
          </Link>
        </div>
      ) : (
                <div className="flex flex-col gap-4">
          {history.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition"
            >
              {/* icon box */}
              <div className="p-3 bg-gray-50 rounded-full border border-gray-100">
                {getIcon(item.type)}
              </div>
              
              {/* interaction info */}
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1 font-medium">
                  <FiClock className="text-xs" /> 
                  {new Date(item.date).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}