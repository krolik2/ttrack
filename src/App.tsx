import './App.css';
import './scss/index.scss';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route } from "react-router-dom"
import Settings from './components/Settings';

function App() {
  return (
    <div className="container">
      <div className="dashboard">
     <Navbar />
     <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="settings" element={ <Settings /> } />
      </Routes>
     </div>
    </div>
  );
}

export default App;
