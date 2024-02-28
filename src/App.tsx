import "./App.css";
import "./scss/index.scss";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/Settings";
import ManageTasks from "./components/ManageTasks";

function App() {
  return (
    <div className="container">
      <div className="dashboard">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Calculator />} />
            {/* <Route path="settings" element={<Settings />} />
            <Route path="manage-tasks" element={<ManageTasks />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
