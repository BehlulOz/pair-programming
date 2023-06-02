import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import { BattlePage } from "./pages/BattlePage/BattlePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/battle" element={<BattlePage/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
