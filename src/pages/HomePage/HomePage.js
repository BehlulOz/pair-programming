import "./HomePage.scss";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card__1 } from "../../components/Card__1/Card__1";
import { Card__2 } from "../../components/Card__2/Card__2";
import { ButtonPlayerOne } from "../../components/ButtonPlayerOne/ButtonPlayerOne";
import { ButtonPlayerTwo } from "../../components/ButtonPlayerTwo/ButtonPlayerTwo";
import { Title } from "../../components/Title/Title";
import { StartButton } from "../../components/StartButton/StartButton";
import backupImage from "../../assets/backup-question-mark.png";
import { Vs } from "../../components/Vs/Vs";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const HomePage = () => {
  let [clickNumberOne, setClickNumberOne] = useState(0);
  let [clickNumberTwo, setClickNumberTwo] = useState(0);
  const [avatarType, setAvatarType] = useState(backupImage);
  const [cardImageOne, setCardImageOne] = useState(0);
  const [cardImageTwo, setCardImageTwo] = useState(0);

  const roboApiOne = `https://robohash.org/set_set${avatarType}/${clickNumberOne}?size=500x500`;
  const roboApiTwo = `https://robohash.org/set_set${avatarType}/${clickNumberTwo}?size=500x500`;

  useEffect(() => {
    fetch(roboApiOne)
      .then((response) => response.blob())
      .then((data) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCardImageOne(reader.result);
        };
        reader.readAsDataURL(data);
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  }, [clickNumberOne]);

  useEffect(() => {
    fetch(roboApiTwo)
      .then((response) => response.blob())
      .then((data) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCardImageTwo(reader.result);
        };
        reader.readAsDataURL(data);
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  }, [clickNumberTwo]);

  return (
    <section className="home-page">
      <Title />
      <ButtonPlayerOne
        setAvatarType={setAvatarType}
        setClickNumberOne={setClickNumberOne}
      />
      <ButtonPlayerTwo
        setAvatarType={setAvatarType}
        setClickNumberTwo={setClickNumberTwo}
      />
      <Vs />
      <Card__1 cardImageOne={cardImageOne} />
      <Card__2 cardImageTwo={cardImageTwo} />
      <StartButton />
    </section>
  );
};

// export default connect(cardImageOne, cardImageTwo)(BattlePage);
