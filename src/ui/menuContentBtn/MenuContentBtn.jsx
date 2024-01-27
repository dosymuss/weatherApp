import { useNavigate } from "react-router-dom";

import { getDayFunc } from "../../code/code";
import styles from "./MenuContentBtn.module.css";

const MenuContentBtn = ({ data }) => {

  const navigate = useNavigate()

  const dayOfWeek = getDayFunc(data.time);
  console.log(dayOfWeek);
  const saveLocalStorage = () => {
    localStorage.setItem("weatherData", JSON.stringify(data));
    navigate("/next")
  };

  return (
    <div className={styles.main}>
      <button onClick={saveLocalStorage} className={styles.btn}>
        <p>{dayOfWeek}</p>
        <p>{data.values.temperatureAvg}</p>
      </button>
    </div>
  );
};

export default MenuContentBtn;
