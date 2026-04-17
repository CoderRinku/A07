"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function Stats() {
  const [mounted, setMounted] = useState(false);
  const [chartData, setChartData] = useState([
    { name: "Text", value: 1, color: "#7E35E1" },
    { name: "Call", value: 1, color: "#244D3F" },
    { name: "Video", value: 1, color: "#37A163" }
  ]);

  useEffect(() => {
    setMounted(true);
    const savedData = JSON.parse(localStorage.getItem("timeline")) || [];
    
    if (savedData.length > 0) {
      let text = 0;
      let call = 0;
      let video = 0;

      savedData.forEach(item => {
        if (item.type === "Text") text++;
        if (item.type === "Call") call++;
        if (item.type === "Video") video++;
      });

      if (text > 0 || call > 0 || video > 0) {
         setChartData([
          { name: "Text", value: text, color: "#7E35E1" },
          { name: "Call", value: call, color: "#244D3F" },
          { name: "Video", value: video, color: "#37A163" }
        ]);
      }
    }
  }, []);

  if (!mounted) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-[60vh] animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold text-[#1E293B] mb-8">Friendship Analytics</h1>

      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold text-[#244D3F] mb-12">By Interaction Type</h3>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={120}
                cornerRadius={10}
                paddingAngle={6}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: '#64748B' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}