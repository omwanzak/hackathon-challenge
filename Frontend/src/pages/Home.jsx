import React from 'react';
import { useNavigate } from 'react-router-dom';

const bgImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Example image

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="bg-white bg-opacity-85 p-8 rounded-xl text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Welcome to FMCG Stock Management</h1>
        <button
          onClick={handleGetStarted}
          className="px-8 py-4 text-xl bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
  {/* Removed RoleDialog popup */}
    </div>
  );
}
