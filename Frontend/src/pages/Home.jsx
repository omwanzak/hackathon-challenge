import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoleDialog from '../Components/RoleDialog.jsx';

const bgImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Example image

export default function Home() {
  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleGetStarted = () => setDialogOpen(true);
  const handleRoleSelect = (role) => {
    setDialogOpen(false);
    if (role === 'distributor') navigate('/login?role=distributor');
    else if (role === 'van-rep') navigate('/login?role=van-rep');
    else if (role === 'manager') navigate('/login?role=manager');
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
      <RoleDialog open={dialogOpen} onSelect={handleRoleSelect} onClose={() => setDialogOpen(false)} />
    </div>
  );
}
