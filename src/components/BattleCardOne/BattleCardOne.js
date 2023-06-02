import "./BattleCardOne.scss";


export const BattleCardOne = ({ cardImageOne, health1, applyDamage1}) => {
  return (
    <>
    <div className="battle-card__image-container__1">
      <img className="battle-card__image" src={cardImageOne}  alt="Character Avatar"/>
      <button className="battle-card__health__1">Health:{health1 }</button>
      <div className="battle-card__div">
      <button className="battle-card__attacks" onClick={applyDamage1}>Punch</button>
      <button className="battle-card__attacks" onClick={applyDamage1}>Kick</button>
      <button className="battle-card__attacks" onClick={applyDamage1}>Bite</button>
      <button className="battle-card__attacks" onClick={applyDamage1}>Headbutt</button>
      </div>
    </div>
    </>
  )
}