import "./Card__2.scss";

export const Card__2 = ({cardImageTwo}) => {
  return (
    <>
    <div className="card__image-container__2">
      <img className="card__image" src={cardImageTwo }  alt="Character Avatar"/>
      <button className="card__name__2">Player 2</button>
    </div>
    
    </>
  )
}