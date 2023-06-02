import "./BattleCardTwo.scss";

export const BattleCardTwo = ({ healthTwo,cardImageTwo }) => {
  
  return (
    <>
    <div className="battle-card__image-container__2">
      <img className="battle-card__image" src={cardImageTwo}  alt="Character Avatar"/>
      <button className="battle-card__health__2">Health:{healthTwo }</button>
    </div>
    
    </>
  )
}