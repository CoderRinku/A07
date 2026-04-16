"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus, FiUsers, FiAlertCircle, FiCheckCircle, FiClock } from "react-icons/fi";
import friendsData from "../data/friends.json";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

 
  const getStatusStyle = (status) => {
    if (status === "overdue") return "bg-red-100 text-red-700 border-red-200";
    if (status === "almost due") return "bg-orange-100 text-orange-700 border-orange-200";
    return "bg-green-100 text-green-700 border-green-200";
  };

  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#214D38] rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium">Loading friends data...</p>
      </div>
    );
  }

 
  const overdueCount = friends.filter((f) => f.status === "overdue").length;
  const onTrackCount = friends.filter((f) => f.status === "on-track").length;
  const almostDueCount = friends.filter((f) => f.status === "almost due").length;

  return (
    <div className="animate-in fade-in duration-500">
      {/* --- Banner Section (Requirement 2) --- */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Keep Your Friendships Alive
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-lg">
          Track your interactions, set goals, and never lose touch with the people who matter most.
        </p>
        <button className="bg-[#214D38] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-[#1a3d2c] transition-all shadow-sm">
          <FiPlus className="text-xl" /> Add a Friend
        </button>
      </div>

      {/* --- 4 Summary Cards (Requirement 2) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
          <div className="p-3 bg-indigo-50 rounded-full mb-3">
            <FiUsers className="text-indigo-600 text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{friends.length}</h3>
          <p className="text-gray-500 text-sm font-medium">Total Friends</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
          <div className="p-3 bg-red-50 rounded-full mb-3">
            <FiAlertCircle className="text-red-500 text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{overdueCount}</h3>
          <p className="text-gray-500 text-sm font-medium">Overdue</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
          <div className="p-3 bg-orange-50 rounded-full mb-3">
            <FiClock className="text-orange-500 text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{almostDueCount}</h3>
          <p className="text-gray-500 text-sm font-medium">Almost Due</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
          <div className="p-3 bg-green-50 rounded-full mb-3">
            <FiCheckCircle className="text-green-500 text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{onTrackCount}</h3>
          <p className="text-gray-500 text-sm font-medium">On Track</p>
        </div>
      </div>

      {/* --- Your Friends Section (4-column Grid) (Requirement 4) --- */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Friends</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link
            href={`/friend/${friend.id}`}
            key={friend.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 block group"
          >
            <div className="flex justify-between items-start mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={56}
                height={56}
                className="rounded-full border object-cover h-14 w-14"
              />
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${getStatusStyle(friend.status)}`}>
                {friend.status}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#214D38] transition-colors">
              {friend.name}
            </h3>
            <p className="text-gray-500 text-sm mb-4 flex items-center gap-1 mt-1">
               <FiClock className="text-xs"/> {friend.days_since_contact} days ago
            </p>
            <div className="flex gap-2 flex-wrap mt-auto">
              {friend.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}