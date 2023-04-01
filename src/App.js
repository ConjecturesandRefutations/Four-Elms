import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Language from './components/Language'
import Feedback from './pages/Feedback';
import CheckInOut from './pages/Check-in-out';
import Contact from './pages/Contact';
import Alarm from './pages/Alarm';
import Towels from './pages/Towels'
import Waste from './pages/Waste';
import Information from './pages/Information';
import Contract from './pages/Contract';
import Cleaning from './pages/Cleaning';

import Aga from './pages/Appliances/Aga'
import Conservatory from './pages/Appliances/Conservatory'
import Dishwasher from './pages/Appliances/Dishwasher'
import Freezer from './pages/Appliances/Freezer'
import Fridge from './pages/Appliances/Fridge'
import Heating from './pages/Appliances/Heating'
import KitchenTV from './pages/Appliances/KitchenTV'
import Microwave from './pages/Appliances/Microwave'
import Parasol from './pages/Appliances/Parasol'
import Quooker from './pages/Appliances/Quooker'
import WashingLine from './pages/Appliances/WashingLine'
import Wifi from './pages/Appliances/Wifi'
import WashingMachine from './pages/Appliances/WashingMachine'


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
        <Route exact path="/towels" element={<Towels />} />
        <Route exact path="/waste" element={<Waste />} />
        <Route exact path="/information" element={<Information />} />
        <Route exact path="/contract" element={<Contract />} />
        <Route exact path="/cleaning" element={<Cleaning />} />
        <Route exact path="/appliances/aga" element={<Aga />} />
        <Route exact path="/appliances/quooker" element={<Quooker />} />
        <Route exact path="/appliances/microwave" element={<Microwave />} />
        <Route exact path="/appliances/dishwasher" element={<Dishwasher />} />
        <Route exact path="/appliances/fridge" element={<Fridge />} />
        <Route exact path="/appliances/freezer" element={<Freezer />} />
        <Route exact path="//appliances/washingmachine" element={<WashingMachine />} />
        <Route exact path="/appliances/washingline" element={<WashingLine />} />
        <Route exact path="/appliances/wifi" element={<Wifi />} />
        <Route exact path="/appliances/kitchentv" element={<KitchenTV />} />
        <Route exact path="/appliances/heating" element={<Heating />} />
        <Route exact path="/appliances/parasol" element={<Parasol />} />
        <Route exact path="/appliances/conservatory" element={<Conservatory />} />
      </Routes>
    </div>
  );
}

export default App;
