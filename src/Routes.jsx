import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import Dashboard from './Dashboard'; // Import Dashboard

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add dashboard route */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;