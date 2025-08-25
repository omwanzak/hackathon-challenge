import React from 'react';

export default function StockCard({ title, quantity, icon, change }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg shadow flex items-center gap-4 mb-4">
      {icon && <div className="text-3xl text-blue-500">{icon}</div>}
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold text-blue-700 flex items-center">
          {quantity}
          {change === 'increase' && <span className="text-green-500 ml-2">↑</span>}
          {change === 'decrease' && <span className="text-red-500 ml-2">↓</span>}
        </div>
      </div>
    </div>
  );
}