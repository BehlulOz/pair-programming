import "./BattleCardOne.scss";
import { useState } from "react";

export const BattleCardOne = ({healthOne}) => {
  
  return (
    <>
    <div className="battle-card__image-container__1">
      <img className="battle-card__image" src={battleCardImageOne}  alt="Character Avatar"/>
      <button className="battle-card__health__1">Health:{healthOne }</button>
    </div>
    
    </>
  )
}