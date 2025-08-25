import React from 'react';

export default function StockCard({ title, quantity, icon, change, onClick, isActive }) {
  const baseClasses = "bg-gradient-to-br p-4 rounded-lg shadow flex items-center gap-4 mb-4 cursor-pointer";
  const activeClasses = "from-blue-500 to-blue-700 text-white";
  const inactiveClasses = "from-blue-50 to-blue-100";

  return (
    <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={onClick}>
      {icon && <div className={`text-3xl ${isActive ? 'text-white' : 'text-blue-500'}`}>{icon}</div>}
      <div>
        <div className={`text-sm ${isActive ? 'text-blue-200' : 'text-gray-500'}`}>{title}</div>
        <div className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-blue-700'} flex items-center`}>
          {quantity}
          {change === 'increase' && <span className="text-green-300 ml-2">↑</span>}
          {change === 'decrease' && <span className="text-red-300 ml-2">↓</span>}
        </div>
      </div>
    </div>
  );
}