import React from "react";
import { Title } from "../../components/Title/Title";
import "./BattlePage.scss";
import {BattleCardOne} from '../../components/BattleCardOne/BattleCardOne'
import {BattleCardTwo} from '../../components/BattleCardTwo/BattleCardTwo'
import { useState } from "react";

export const BattlePage = ({cardImageOne, cardImageTwo}) => {
  const [health1, setHealth1] = useState(100);
  const applyDamage1 = () => {
    const randomDamage = Math.floor(Math.random() * 25) + 1;
    setHealth1(health1 - randomDamage);
  }

  const [health2, setHealth2] = useState(100);
  const applyDamage2 = () => {
    const randomDamage = Math.floor(Math.random() * 25) + 1;
    setHealth2(health2 - randomDamage);
  
  }
  return (
    <section className="home-page">
      <Title />
      <BattleCardOne cardImageOne={cardImageOne} health1={health1} applyDamage1={applyDamage2}/>
      <BattleCardTwo cardImageTwo={cardImageTwo} health2={health2} applyDamage2={applyDamage1}/>  
    </section>
  );
};

