import React from "react";
import { useState, useEffect } from "react";
import { ButtonPlayerOne } from "../../components/ButtonPlayerOne/ButtonPlayerOne";
import { ButtonPlayerTwo } from "../../components/ButtonPlayerTwo/ButtonPlayerTwo";
import { Title } from "../../components/Title/Title";
import { Card__1 } from "../../components/Card__1/Card__1";
import { Card__2 } from "../../components/Card__2/Card__2";
import "./BattlePage.scss";


export const BattlePage = ({cardImageOne, cardImageTwo}) => {
  let damageOne = 0;
  let damageTwo = 0;
  let healthOne = 100-damageOne;
  let healthTwo = 100-damageTwo;
 
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