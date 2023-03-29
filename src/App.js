import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Language from './components/Language'

function App() {
  return (
    <div className="App">
      <Language/>
    <Routes>      
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
