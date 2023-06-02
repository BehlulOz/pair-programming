import "./Card__1.scss";

export const Card__1 = ({cardImageOne}) => {
  return (
    <>
    <div className="card__image-container__1">
      <img className="card__image" src={cardImageOne}  alt="Character Avatar"/>
      <button className="card__name__1">Player 1</button>
    </div>
    
    </>
  )
}