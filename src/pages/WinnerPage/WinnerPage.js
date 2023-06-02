import "./WinnerPage.scss"
import trophy from '../../assets/trophy_78370-345.avif'

export const WinnerPage = ({winner, cardImageOne, cardImageTwo}) =>{
    return (
        <>
        <div className="winnerpage">
        <h1 className="winnerpage__title">{winner} You have Won</h1>
        <div className="winnerpage__div">
        {winner === 'Player 1' && <img className="winnerpage__winner" src={cardImageOne} alt="winner" />}
        {winner === 'Player 2' && <img className="winnerpage__winner" src={cardImageTwo} alt="winner" />}
        <img className="winnerpage__img"src={trophy} alt="trophy"/>
        </div>
        </div>
        </>
    )
}