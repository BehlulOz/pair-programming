import React from "react";
import { Title } from "../../components/Title/Title";
import "./BattlePage.scss";
import {BattleCardOne} from '../../components/BattleCardOne/BattleCardOne'
import {BattleCardTwo} from '../../components/BattleCardTwo/BattleCardTwo'
import { useEffect, useState } from "react";
import {WinnerPage} from '../WinnerPage/WinnerPage'
import punchSound from  '../../assets/mixkit-body-punch-quick-hit-2153.wav'
import backgroundSong from '../../assets/battle-of-the-dragons-8037.mp3'

export const BattlePage = ({cardImageOne, cardImageTwo}) => {
  const [health1, setHealth1] = useState(100);
  const [winner, setWinner] = useState('');
  const volume = 0.05;

  const playSound = () => {
    const audio = new Audio(punchSound)
    audio.play();
  }

  const applyDamage1 = () => {
    const randomDamage = Math.floor(Math.random() * 25) + 1;
    setHealth1(health1 - randomDamage);
    playSound();
    
  }

  const [health2, setHealth2] = useState(100);
  const applyDamage2 = () => {
    const randomDamage = Math.floor(Math.random() * 25) + 1;
    setHealth2(health2 - randomDamage);
    playSound();
    
  }

  useEffect (() => {
    if (health1 <= 0){
      setWinner('Player 2');
    } else if (health2 <= 0){
      setWinner('Player 1');
    }
  },[health1, health2]);

  useEffect(() => {
    const audio = new Audio(backgroundSong);
    audio.loop = true;
    audio.play();
    audio.volume = volume;
  }, [])


  return (
    <section className="battle-page">
      <Title />
      {winner ? (
      <WinnerPage winner={winner} cardImageOne={cardImageOne}  cardImageTwo={cardImageTwo}/>
      ) : (
        <>
      <BattleCardOne cardImageOne={cardImageOne} health1={health1} applyDamage1={applyDamage2}/>
      <BattleCardTwo cardImageTwo={cardImageTwo} health2={health2} applyDamage2={applyDamage1}/>
      </>
      )}
    </section>
  );
};