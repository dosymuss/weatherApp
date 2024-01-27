import { useNavigate } from "react-router-dom";

import { DateNowComp } from "../ui/DateNowComp/DateNowComp";
import LogoText from "../layout/logo/LogoText";

import styles from "../styles/NotFoundPage.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const returnMain = () => {
    navigate("/");
  };

  return (
    <div className={styles.main}>
      <div className={styles.itemOne}>
        <LogoText/>
      </div>
      <div className={styles.itemTwo}>
        <p>404</p>
      </div>
      <div className={styles.itemThree}>
        <div>
          <DateNowComp />
        </div>
        <div className={styles.returnDiv}>
          <p>Ошибка сети</p>
          <p>Вернитесь на главный экран</p>
          <button onClick={returnMain}>Вернуться</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
