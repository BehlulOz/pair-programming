import "./HomePage.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Card__1 } from "../../components/Card__1/Card__1";
import { Card__2 } from "../../components/Card__2/Card__2";
import { ButtonPlayerOne } from "../../components/ButtonPlayerOne/ButtonPlayerOne";
import { ButtonPlayerTwo } from "../../components/ButtonPlayerTwo/ButtonPlayerTwo";
import { Title } from "../../components/Title/Title";
import { StartButton } from "../../components/StartButton/StartButton";
import backupImage from "../../assets/backup-question-mark.png";
import { Vs } from "../../components/Vs/Vs";



export const HomePage = ({cardImageOne, cardImageTwo, setCardImageOne, setCardImageTwo}) => {
  let [clickNumberOne, setClickNumberOne] = useState(0);
  let [clickNumberTwo, setClickNumberTwo] = useState(0);
  const [avatarType, setAvatarType] = useState(backupImage);

  const roboApiOne = `https://robohash.org/set_set${avatarType}/${clickNumberOne}?size=500x500`;
  const roboApiTwo = `https://robohash.org/set_set${avatarType}/${clickNumberTwo}?size=500x500`;

  useEffect(() => {
    fetch(roboApiOne)
      .then((response) => {
      setCardImageOne(response.url)
    })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  }, [clickNumberOne]);

  useEffect(() => {
    fetch(roboApiTwo)
      .then((response) => {
        setCardImageTwo(response.url)
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
      <StartButton/>
    </section>
  );
};

