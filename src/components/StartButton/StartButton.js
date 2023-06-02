import { NavLink } from "react-router-dom";
import "./StartButton.scss";

export const StartButton = () => {
  return (
    <NavLink to="battle">
      <button className="button button__start" >
        START !
      </button>
    </NavLink>
  )
}