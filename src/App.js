import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Language from './components/Language'
import Feedback from './pages/Feedback';
import CheckInOut from './pages/Check-in-out';
import Contact from './pages/Contact';
import Alarm from './pages/Alarm';
import Appliances from './pages/Appliances';
import Towels from './pages/Towels'
import Waste from './pages/Waste';
import Information from './pages/Information';
import Contract from './pages/Contract';
import Cleaning from './pages/Cleaning';

function App() {
  return (
    <div className="App">
      <Language/>
    <Routes>      
        <Route exact path="/" element={<Home />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/check-in-out" element={<CheckInOut />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/alarm" element={<Alarm />} />
        <Route exact path="/appliances" element={<Appliances />} />
        <Route exact path="/towels" element={<Towels />} />
        <Route exact path="/waste" element={<Waste />} />
        <Route exact path="/information" element={<Information />} />
        <Route exact path="/contract" element={<Contract />} />
        <Route exact path="/cleaning" element={<Cleaning />} />
      </Routes>
    </div>
  );
}

export default App;
