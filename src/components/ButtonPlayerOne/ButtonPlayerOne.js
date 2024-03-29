import "./ButtonPlayerOne.scss";
import { useState } from "react";

export const ButtonPlayerOne = ({
  setAvatarType,
  avatarType,
  setCardImageOne,
}) => {
  let [clickNumberOne, setClickNumberOne] = useState(0);
  const roboApiOne = `https://robohash.org/set_set${avatarType}/${clickNumberOne}?size=500x500`;

  const handleClick1 = () => {
    setClickNumberOne(Math.floor(Math.random() * 10));
    fetch(`https://robohash.org/set_set1/${clickNumberOne}?size=500x500`)
      .then((response) => {
        setCardImageOne(response.url);
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  };
  const handleClick2 = () => {
    setClickNumberOne(Math.floor(Math.random() * 10));
    fetch(`https://robohash.org/set_set2/${clickNumberOne}?size=500x500`)
      .then((response) => {
        setCardImageOne(response.url);
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  };
  const handleClick3 = () => {
    setClickNumberOne(Math.floor(Math.random() * 10));
    fetch(`https://robohash.org/set_set5/${clickNumberOne}?size=500x500`)
      .then((response) => {
        setCardImageOne(response.url);
      })
      .catch((error) => {
        console.log("Error fetching image:", error);
      });
  };
  return (
    <div className="button1-container">
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
  );
};
