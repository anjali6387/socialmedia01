import React from 'react';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin'
import Navbar from './components/NavbarComponent'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
    return (
    <div>

      <Router>
      <Navbar/>

      <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      
      {/* Catch-all route should be last */}
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Router>
      
    </div>
    );
}

export default App;
