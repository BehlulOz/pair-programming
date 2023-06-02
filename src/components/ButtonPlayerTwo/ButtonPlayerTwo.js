import "./ButtonPlayerTwo.scss";
import { useState } from "react";

export const ButtonPlayerTwo = ({setAvatarType,avatarType,setCardImageTwo }) => {

  let [clickNumberTwo, setClickNumberTwo] = useState(0);
  const roboApiTwo = `https://robohash.org/set_set${avatarType}/${clickNumberTwo}?size=500x500`;
  
  const handleClick1 = () =>  {
    setClickNumberTwo(Math.floor(Math.random() * 10));
    fetch(`https://robohash.org/set_set1/${clickNumberTwo}?size=500x500`)
      .then((response) => {
          setCardImageTwo(response.url)
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  }
  const handleClick2 = () =>  {
    setClickNumberTwo(Math.floor(Math.random() * 10));
    fetch(`https://robohash.org/set_set2/${clickNumberTwo}?size=500x500`)
      .then((response) => {
          setCardImageTwo(response.url)
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  }
  const handleClick3 = () =>  {
    setClickNumberTwo(Math.floor(Math.random() * 10));
    fetch(`https://robohash.org/set_set5/${clickNumberTwo}?size=500x500`)
      .then((response) => {
          setCardImageTwo(response.url)
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
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