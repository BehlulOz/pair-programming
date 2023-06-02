import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import { BattlePage } from "./pages/BattlePage/BattlePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Navigation } from "./components/Navigation/Navigation";
import { useState } from 'react';

function App() {
  const [cardImageOne, setCardImageOne] = useState(0);
  const [cardImageTwo, setCardImageTwo] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <Routes>
            <Route path="/" element={<HomePage 
            cardImageOne = {cardImageOne}
            setCardImageOne = {setCardImageOne}
            cardImageTwo = {cardImageTwo}
            setCardImageTwo = {setCardImageTwo} />} />
            <Route path="/battle" element={<BattlePage
            cardImageOne = {cardImageOne}
            cardImageTwo = {cardImageTwo}
            />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
