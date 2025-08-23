import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';

function VanRepDashboard() {
	return <div className="p-8">Van Rep Dashboard (Coming Soon)</div>;
}
function DistributorDashboard() {
	return <div className="p-8">Distributor Dashboard (Coming Soon)</div>;
}
function ManagerDashboard() {
	return <div className="p-8">Manager Dashboard (Coming Soon)</div>;
}

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/van-rep" element={<VanRepDashboard />} />
				<Route path="/distributor" element={<DistributorDashboard />} />
				<Route path="/manager" element={<ManagerDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}
