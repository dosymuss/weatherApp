import { getDateNow } from "../../code/code";
import style from "./DateNowComp.module.css";

export const DateNowComp = ({color}) => {
  const fullData = getDateNow();
  return <p style={{color:color}} className={style.timeText}>{fullData}</p>;
};
