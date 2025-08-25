import React, { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import StockCard from '../Components/StockCard.jsx';
import Modal from '../Components/Modal.jsx';

// Sample stock data
const manufacturerStock = [
  { id: 1, product: 'Delmonte Pineapple Juice', quantity: 900, change: 'increase', available: true, restockDate: null, restockAmount: null },
  { id: 2, product: 'Delmonte Mango Juice', quantity: 700, change: 'decrease', available: true, restockDate: null, restockAmount: null },
  { id: 3, product: 'Delmonte Orange Juice', quantity: 600, change: null, available: true, restockDate: null, restockAmount: null },
  { id: 4, product: 'Coca-cola', quantity: 0, change: null, available: false, restockDate: '2025-09-15', restockAmount: 1000 },
  { id: 5, product: 'Fanta Orange', quantity: 0, change: null, available: false, restockDate: '2025-09-10', restockAmount: 800 },
];
const distributorStock = [
  { id: 1, product: 'Delmonte Pineapple Juice', quantity: 120, change: 'decrease' },
  { id: 2, product: 'Delmonte Mango Juice', quantity: 80, change: null },
  { id: 3, product: 'Delmonte Orange Juice', quantity: 60, change: 'increase' },
];
const vanStock = [
  { id: 1, product: 'Delmonte Pineapple Juice', quantity: 10, change: null },
  { id: 2, product: 'Delmonte Mango Juice', quantity: 8, change: 'decrease' },
  { id: 3, product: 'Delmonte Orange Juice', quantity: 5, change: 'increase' },
];
const requisitions = [
  { id: 301, product: 'Delmonte Pineapple Juice', quantity: 30, status: 'pending', requester: 'Alex', date: '2025-08-22' },
  { id: 302, product: 'Delmonte Mango Juice', quantity: 20, status: 'pending', requester: 'Jane', date: '2025-08-21' },
  { id: 303, product: 'Delmonte Orange Juice', quantity: 10, status: 'pending', requester: 'Mike', date: '2025-08-20' },
];

export default function ManagerDashboard() {
  const [activity] = useState([
    { id: 1, action: 'approved', product: 'Delmonte Mango Juice', quantity: 20, user: 'Rayyidh', date: '2025-08-21' },
    { id: 2, action: 'rejected', product: 'Delmonte Orange Juice', quantity: 10, user: 'Rayyidh', date: '2025-08-20' },
    { id: 3, action: 'approved', product: 'Delmonte Pineapple Juice', quantity: 30, user: 'Rayyidh', date: '2025-08-19' },
  ]);
  const [view, setView] = useState('manager');
  const [activeModal, setActiveModal] = useState(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'manufacturer':
        return (
          <table className="w-full bg-white rounded shadow text-sm">
            <thead><tr className="bg-gray-100"><th className="p-2">Product</th><th className="p-2">Quantity</th><th className="p-2">Status</th><th className="p-2">Restock Info</th></tr></thead>
            <tbody>
              {manufacturerStock.map((p) => (
                <tr key={p.id}>
                  <td className="p-2">{p.product}</td>
                  <td className="p-2 flex items-center">{p.quantity}{p.change === 'increase' && <span className="text-green-500 ml-2">↑</span>}{p.change === 'decrease' && <span className="text-red-500 ml-2">↓</span>}</td>
                  <td className="p-2">{p.available ? <span className="text-green-500">Available</span> : <span className="text-red-500">Unavailable</span>}</td>
                  <td className="p-2">{p.available ? '-' : `Restock on ${p.restockDate} with ${p.restockAmount}` }</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'distributor':
        return (
          <table className="w-full bg-white rounded shadow text-sm">
            <thead><tr className="bg-gray-100"><th className="p-2">Product</th><th className="p-2">Quantity</th></tr></thead>
            <tbody>
              {distributorStock.map((p) => (
                <tr key={p.id}>
                  <td className="p-2">{p.product}</td>
                  <td className="p-2 flex items-center">{p.quantity}{p.change === 'increase' && <span className="text-green-500 ml-2">↑</span>}{p.change === 'decrease' && <span className="text-red-500 ml-2">↓</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'van':
        return (
          <table className="w-full bg-white rounded shadow text-sm">
            <thead><tr className="bg-gray-100"><th className="p-2">Product</th><th className="p-2">Quantity</th></tr></thead>
            <tbody>
              {vanStock.map((p) => (
                <tr key={p.id}>
                  <td className="p-2">{p.product}</td>
                  <td className="p-2 flex items-center">{p.quantity}{p.change === 'increase' && <span className="text-green-500 ml-2">↑</span>}{p.change === 'decrease' && <span className="text-red-500 ml-2">↓</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'requisitions':
        return (
          <table className="w-full bg-white rounded shadow text-sm">
            <thead><tr className="bg-gray-100"><th className="p-2">Product</th><th className="p-2">Quantity</th><th className="p-2">Requester</th><th className="p-2">Date</th></tr></thead>
            <tbody>
              {requisitions.map((r) => (
                <tr key={r.id}>
                  <td className="p-2">{r.product}</td>
                  <td className="p-2">{r.quantity}</td>
                  <td className="p-2">{r.requester}</td>
                  <td className="p-2">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar role="manager" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Manager Dashboard</h2>
        <div className="mb-6 flex gap-4">
          <button className={`px-4 py-2 rounded font-semibold border ${view === 'manager' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`} onClick={() => setView('manager')}>Manager View</button>
          <button className={`px-4 py-2 rounded font-semibold border ${view === 'distributor' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`} onClick={() => setView('distributor')}>Distributor View</button>
          <button className={`px-4 py-2 rounded font-semibold border ${view === 'van-rep' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`} onClick={() => setView('van-rep')}>Van Rep View</button>
        </div>

        {view === 'manager' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StockCard title="Manufacturer Stock" quantity={manufacturerStock.reduce((sum, s) => sum + s.quantity, 0)} icon={"🏭"} onClick={() => setActiveModal('manufacturer')} isActive={activeModal === 'manufacturer'} />
              <StockCard title="Distributor Stock" quantity={distributorStock.reduce((sum, s) => sum + s.quantity, 0)} icon={"🏢"} onClick={() => setActiveModal('distributor')} isActive={activeModal === 'distributor'} />
              <StockCard title="Van Stock" quantity={vanStock.reduce((sum, s) => sum + s.quantity, 0)} icon={"🚚"} onClick={() => setActiveModal('van')} isActive={activeModal === 'van'} />
              <StockCard title="Pending Requisitions" quantity={requisitions.length} icon={"⏳"} onClick={() => setActiveModal('requisitions')} isActive={activeModal === 'requisitions'} />
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Stock Distribution</h3>
              <table className="w-full bg-white rounded shadow text-sm">
                <thead><tr className="bg-gray-100"><th className="p-2">Product</th><th className="p-2">Manufacturer</th><th className="p-2">Distributor</th><th className="p-2">Van</th></tr></thead>
                <tbody>
                  {manufacturerStock.filter(s => s.available).map((m, idx) => (
                    <tr key={m.id}>
                      <td className="p-2">{m.product}</td>
                      <td className="p-2">{m.quantity}</td>
                      <td className="p-2">{distributorStock[idx]?.quantity ?? '-'}</td>
                      <td className="p-2">{vanStock[idx]?.quantity ?? '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
              <ul className="bg-white rounded shadow p-4 text-sm">
                {activity.map((a) => (
                  <li key={a.id} className="mb-2"><span className={`font-bold capitalize ${a.action === 'approved' ? 'text-green-600' : 'text-red-600'}`}>{a.action}</span> {a.quantity} x {a.product} by {a.user} on {a.date}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {view === 'distributor' && (
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Distributor Dashboard (Manager View)</h3>
            {distributorStock.map((s) => (<StockCard key={s.id} title={s.product} quantity={s.quantity} icon={"🏢"} />))}
          </div>
        )}

        {view === 'van-rep' && (
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Van Rep Dashboard (Manager View)</h3>
            {vanStock.map((s) => (<StockCard key={s.id} title={s.product} quantity={s.quantity} icon={"🚚"} />))}
          </div>
        )}
      </div>
      <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)} title={`${activeModal ? activeModal.charAt(0).toUpperCase() + activeModal.slice(1) : ''} Details`}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}
