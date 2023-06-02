import "./ButtonPlayerTwo.scss";

export const ButtonPlayerTwo = ({setAvatarType, setClickNumberTwo }) => {
  const handleClick1 = () =>  {
    setAvatarType(1);
    setClickNumberTwo(Math.floor(Math.random() * 10));
  }
  const handleClick2 = () =>  {
    setAvatarType(2);
    setClickNumberTwo(Math.floor(Math.random() * 10));
  }
  const handleClick3 = () =>  {
    setAvatarType(5);
    setClickNumberTwo(Math.floor(Math.random() * 10));
  }
  return (
    <div className="button2-container">
      <button className="button button__robot" onClick={() => handleClick1()}>
        ROBOT
      </button>
      <button className="button button__monster" onClick={() => handleClick2()}>
        MONSTER
      </button>
      <button className="button bbutton__human" onClick={() => handleClick3()}>
        HUMAN
      </button>
    </div>
  )
}