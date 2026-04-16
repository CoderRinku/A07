"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall, FiMessageSquare, FiVideo, FiClock, FiArchive, FiTrash2, FiEdit2, FiArrowLeft } from "react-icons/fi";
import toast from "react-hot-toast";
import friendsData from "../../../data/friends.json";

export default function FriendDetails() {
  const params = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    
    const foundFriend = friendsData.find((f) => f.id.toString() === params.id);
    setFriend(foundFriend);
  }, [params.id]);

 
  const getStatusStyle = (status) => {
    if (status === "overdue") return "bg-red-100 text-red-700";
    if (status === "almost due") return "bg-orange-100 text-orange-700";
    return "bg-green-100 text-green-700";
  };

  
  const handleInteraction = (type) => {
    const newEntry = {
      id: Date.now(), 
      friendName: friend.name,
      type: type, // Call, Text, or Video
      date: new Date().toISOString(),
      title: `${type} with ${friend.name}`
    };

    
    const previousTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...previousTimeline]));

    // Requirement 10.3: Toast Notification
    toast.success(`${type} interaction logged successfully!`, {
      style: { border: '1px solid #214D38', padding: '16px', color: '#214D38' },
      iconTheme: { primary: '#214D38', secondary: '#FFFAEE' },
    });
  };

  if (!friend) {
    return <div className="text-center py-20 text-xl font-semibold text-gray-500 animate-pulse">Loading details...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500 mb-20">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center gap-2 text-[#214D38] font-semibold mb-6 hover:underline">
        <FiArrowLeft /> Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {}
        <div className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center text-center">
          <Image src={friend.picture} alt={friend.name} width={120} height={120} className="rounded-full border-4 border-gray-50 mb-4 object-cover h-32 w-32" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{friend.name}</h2>
          <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 ${getStatusStyle(friend.status)}`}>
            {friend.status}
          </span>
          
          <div className="flex gap-2 flex-wrap justify-center mb-4">
            {friend.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md capitalize">{tag}</span>
            ))}
          </div>

          <p className="text-gray-600 text-sm italic mb-4">"{friend.bio}"</p>
          <p className="text-gray-500 text-sm mb-6 font-medium">{friend.email}</p>

          {/* Action Buttons  */}
          <div className="w-full flex flex-col gap-3 mt-auto">
            <button className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-semibold transition border border-gray-200">
              <FiClock /> Snooze 2 Weeks
            </button>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-semibold transition border border-gray-200">
                <FiArchive /> Archive
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-2.5 rounded-lg text-sm font-semibold transition border border-red-200">
                <FiTrash2 /> Delete
              </button>
            </div>
          </div>
        </div>

       
        <div className="md:col-span-2 flex flex-col gap-6">
          
          {/* ① Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
              <h4 className="text-3xl font-bold text-gray-800 mb-1">{friend.days_since_contact}</h4>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Days Since Contact</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
              <h4 className="text-3xl font-bold text-gray-800 mb-1">{friend.goal}</h4>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Goal (Days)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm flex flex-col justify-center items-center">
              <h4 className="text-lg font-bold text-gray-800 mb-1">{new Date(friend.next_due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</h4>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">Next Due Date</p>
            </div>
          </div>

          
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Relationship Goal</h3>
              <p className="text-gray-500 text-sm mt-1">Connect every <span className="font-bold text-[#214D38]">{friend.goal} days</span></p>
            </div>
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition">
              <FiEdit2 /> Edit
            </button>
          </div>

         
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleInteraction("Call")} className="flex flex-col items-center justify-center gap-2 bg-[#214D38]/5 hover:bg-[#214D38]/10 text-[#214D38] py-4 rounded-xl transition border border-[#214D38]/20 group">
                <FiPhoneCall className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm">Call</span>
              </button>
              <button onClick={() => handleInteraction("Text")} className="flex flex-col items-center justify-center gap-2 bg-[#214D38]/5 hover:bg-[#214D38]/10 text-[#214D38] py-4 rounded-xl transition border border-[#214D38]/20 group">
                <FiMessageSquare className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm">Text</span>
              </button>
              <button onClick={() => handleInteraction("Video")} className="flex flex-col items-center justify-center gap-2 bg-[#214D38]/5 hover:bg-[#214D38]/10 text-[#214D38] py-4 rounded-xl transition border border-[#214D38]/20 group">
                <FiVideo className="text-2xl group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}