import "./HomePage.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Card__1 } from "../../components/Card__1/Card__1";
import { Card__2 } from "../../components/Card__2/Card__2";
import { ButtonPlayerOne } from "../../components/ButtonPlayerOne/ButtonPlayerOne";
import { ButtonPlayerTwo } from "../../components/ButtonPlayerTwo/ButtonPlayerTwo";
import { Title } from "../../components/Title/Title";
import { StartButton } from "../../components/StartButton/StartButton";
import backupImage from "../../assets/backup-question-mark.png";
import { Vs } from "../../components/Vs/Vs";

export const HomePage = ( { cardImageOne, cardImageTwo, setCardImageOne, setCardImageTwo }) => {
  
  const [avatarType, setAvatarType] = useState(backupImage);


  return (
    <section className="home-page">
      <Title />
      <ButtonPlayerOne
        setAvatarType={setAvatarType}
        setCardImageOne={setCardImageOne}
        avatarType={avatarType}
      />
      <ButtonPlayerTwo
        setAvatarType={setAvatarType}
        setCardImageTwo={setCardImageTwo}
        avatarType={avatarType}
      />
      <Vs />
      <Card__1 cardImageOne={cardImageOne} />
      <Card__2 cardImageTwo={cardImageTwo} />
      <StartButton />
    </section>
  );
};

// export default connect(mapStateToProps)(HomePage);
