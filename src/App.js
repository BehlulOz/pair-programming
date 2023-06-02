import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import { BattlePage } from "./pages/BattlePage/BattlePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Navigation } from "./components/Navigation/Navigation";
import backupImage from "./assets/backup-question-mark.png";
import {WinnerPage} from "./pages/WinnerPage/WinnerPage";

function App() {
  const [cardImageOne, setCardImageOne] = useState(backupImage);
  const [cardImageTwo, setCardImageTwo] = useState(backupImage);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                cardImageOne={cardImageOne}
                cardImageTwo={cardImageTwo}
                setCardImageOne={setCardImageOne}
                setCardImageTwo={setCardImageTwo}
              />
            }
          />

          <Route
            path="/battle"
            element={
              <BattlePage
                cardImageOne={cardImageOne}
                cardImageTwo={cardImageTwo}
              />
            }
          />
          <Route path='/winner' element={<WinnerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
