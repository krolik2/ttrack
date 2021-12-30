import './App.css';
import './scss/index.scss';
import Navbar from './components/Navbar';
import Charts from './components/Charts';

function App() {
  return (
    <div className="container">
      <div className="dashboard">
     <Navbar />
     <Charts />
     </div>
    </div>
  );
}

export default App;
