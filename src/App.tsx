import './App.css';
import './scss/index.scss';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
// import Settings from './components/Settings';

function App() {
  return (
    <div className="container">
      <div className="dashboard">
     <Navbar />
     <Dashboard />
     {/* <Settings /> */}
     </div>
    </div>
  );
}

export default App;
