import React from 'react';

export default function RoleDialog({ open, onSelect, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm text-center">
        <h2 className="text-xl font-bold mb-6">Sign in as:</h2>
        <div className="space-y-4">
          <button
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => onSelect('distributor')}
          >
            Distributor
          </button>
          <button
            className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => onSelect('van-rep')}
          >
            Sales Rep
          </button>
          <button
            className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700"
            onClick={() => onSelect('manager')}
          >
            Manager
          </button>
        </div>
        <button
          className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
