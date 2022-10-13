import './App.css';
import './scss/index.scss';
import Navbar from './components/Navbar';
import Charts from './components/Charts';
import Settings from './components/Settings';

function App() {
  return (
    <div className="container">
      <div className="dashboard">
     <Navbar />
     <Charts />
     <Settings />
     </div>
    </div>
  );
}

export default App;
