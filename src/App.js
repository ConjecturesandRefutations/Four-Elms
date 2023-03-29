import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Language from './components/Language'
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="App">
      <Language/>
    <Routes>      
        <Route exact path="/" element={<Home />} />
        <Route exact path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
