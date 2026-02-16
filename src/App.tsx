import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import LocalAgentSelection from './pages/LocalAgentSelection';
import SubcontractorSelection from './pages/SubcontractorSelection';
import TechnicalExpertSelection from './pages/TechnicalExpertSelection';
import PartnershipSelection from './pages/PartnershipSelection';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/local-agent" element={<LocalAgentSelection />} />
        <Route path="/subcontractor" element={<SubcontractorSelection />} />
        <Route path="/technical-expert" element={<TechnicalExpertSelection />} />
        <Route path="/partnership" element={<PartnershipSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
