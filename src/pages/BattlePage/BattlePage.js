import React from "react";
import { useState, useEffect } from "react";
import { ButtonPlayerOne } from "../../components/ButtonPlayerOne/ButtonPlayerOne";
import { ButtonPlayerTwo } from "../../components/ButtonPlayerTwo/ButtonPlayerTwo";
import { Title } from "../../components/Title/Title";
import "./BattlePage.scss";

export const BattlePage = ({cardImageOne,cardImageTwo}) => {
  let damageOne = 0;
  let damageTwo = 0;
  let healthOne = 100-damageOne;
  let healthTwo = 100-damageTwo;
  // const[battleCardImageOne,setBattleCardImageOne]=useState(0)
  // const[battleCardImageTwo,setBattleCardImageTwo]=useState(0)
  return (
    <section className="home-page">
      <Title />
      <ButtonPlayerOne />
      <ButtonPlayerTwo />
      <Card__1 cardImageOne={cardImageOne} healthOne={healthOne}/>
      <Card__2 cardImageTwo={cardImageTwo} healthTwo={healthTwo}/>  
    </section>
  );
};