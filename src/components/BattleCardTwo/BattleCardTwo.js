import "./BattleCardTwo.scss";


export const BattleCardTwo = ({ cardImageTwo, health2, applyDamage2 }) => {
  return (
    <>
    <div className="battle-card__image-container__2">
      <img className="battle-card__image" src={cardImageTwo}  alt="Character Avatar"/>
      <button className="battle-card__health__2">Health:{health2 }</button>
      <div className="battle-card__div">
      <button className="battle-card__attacks" onClick={applyDamage2}>Punch</button>
      <button className="battle-card__attacks" onClick={applyDamage2}>Kick</button>
      <button className="battle-card__attacks" onClick={applyDamage2}>Bite</button>
      <button className="battle-card__attacks" onClick={applyDamage2}>Headbutt</button>
      </div>
    </div>
    
    </>
  )
}