import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useState } from 'react';

import Overview from './pages/Overview';
import SubAgents from './pages/SubAgents';
import Logs from './pages/Logs';
import Login from './pages/Login'; // <--- NEW COMPONENT

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />

        {/* Private Routes nested inside Layout */}
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} />}>
          <Route index element={<Navigate to="/overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="sub-agents" element={<SubAgents />} />
          <Route path="logs" element={<Logs />} />

          {/* Mocks para rotas ainda não desenvolvidas */}
          <Route path="strategies" element={<div className="text-gray-400">Strategies Component pending</div>} />
          <Route path="settings" element={<div className="text-gray-400">Settings Component pending</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
