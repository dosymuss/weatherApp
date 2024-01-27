import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";

import menuImageBlack from "../../image/MenuIcon.svg";
import menuIconWhite from "../../image/MenuIconWh.svg";
import LogoText from "../../layout/logo/LogoText";
import closeIcon from "../../image/closeIcon.svg";
import bottomDecor from "../../image/botommDecor.svg";
import { dayFunc, timeConvFunc } from "../../code/code";

import styles from "./MenuBtn.module.css";
import DetailsItem from "../DetailItem/DetailsItem";
import MenuContentBtn from "../../ui/menuContentBtn/MenuContentBtn";

const MenuBtn = ({ color, data, allData }) => {
  const [open, setOpen] = useState(false);
  
  const [weekData, setWeekData] = useState([]);
  useEffect(() => {
    setWeekData(dayFunc(allData));
  }, [allData]);

  console.log(data);

  const rasf = data && data.length > 0 ? timeConvFunc(data.sunriseTime) : null;
  const zak = data && data.length > 0 ? timeConvFunc(data.sunsetTime) : null;

  return (
    <div>
      <button className={styles.menuBtn} onClick={() => setOpen(true)}>
        <img src={color === "white" ? menuIconWhite : menuImageBlack} alt="" />
      </button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={styles.contentDiv}>
          <div className={styles.itemOne}>
            <LogoText />
            <button onClick={() => setOpen(false)}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <div className={styles.itemTwo}>
            <p className={styles.detailsTitle}>Wheather details</p>
            <div>
              <DetailsItem text={"Облачность"} property={data.cloudCoverAvg} />
              <DetailsItem text={"Влажность"} property={data.humidityAvg} />
              <DetailsItem
                text={"Вероятность осадков"}
                property={data.precipitationProbabilityAvg}
              />
              <DetailsItem
                text={"Количество дождя"}
                property={data.rainAccumulationAvg}
              />
              <DetailsItem
                text={"Количество снега"}
                property={data.snowAccumulationAvg}
              />
              <DetailsItem
                text={"Температура по ощущению"}
                property={data.temperatureApparentAvg}
              />
              <DetailsItem
                text={"Скорость ветра"}
                property={data.windSpeedAvg}
              />
              <DetailsItem text={"Расвет"} property={rasf} />
              <DetailsItem text={"Закат"} property={zak} />
            </div>
          </div>
          <div className={styles.itemThree}>
            <p className={styles.detailsTitle}>Next days</p>
            <div>
              {weekData.length > 0 &&
                weekData.map((item) => <MenuContentBtn data={item} />)}
            </div>
          </div>
          <div className={styles.itemFour}>
            <img src={bottomDecor} alt="" />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuBtn;
