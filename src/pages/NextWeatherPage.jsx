import { useNavigate } from "react-router-dom";

import LogoText from "../layout/logo/LogoText";
import MenuBtn from "../components/Menu/MenuBtn";
import DegresText from "../layout/DegresText/DegresText";
import { DateNowComp } from "../ui/DateNowComp/DateNowComp";
import CityText from "../layout/city/CityText";

import { getWeatherDesign } from "../code/code";
import styles from "../styles/NextWeatherPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api/api";

const NextWeatherPage = () => {
  const navigate = useNavigate();

  const { data, error } = useQuery({
    queryKey: ["weathers"],
    queryFn: getWeather,
    select:(data)=>data.data.timelines.daily
  });

  if (error) {
    navigate("/error");
  }

  const dataCh = JSON.parse(localStorage.getItem("weatherData"));

  const weatherDesign = getWeatherDesign(dataCh.values);
  console.log(weatherDesign);

  const imageBack = `url(${weatherDesign.image})`;

  return (
    <div style={{ backgroundImage: imageBack }} className={styles.container}>
      <div className={styles.header}>
        <LogoText color={weatherDesign.top} />
        <div className={styles.menuBtnDiv}>
          <MenuBtn
            allData={data}
            color={weatherDesign.top}
            data={dataCh.values}
          />
        </div>
      </div>
      <div className={styles.contentDiv}>
        <DegresText
          grad={dataCh && dataCh.values.temperatureAvg}
          desc={weatherDesign.textDesc}
          title={weatherDesign.textTitle}
          color={weatherDesign.textColor}
        />
      </div>
      <div className={styles.botommDiv}>
        <DateNowComp color={weatherDesign.bottom} />
        <div className={styles.cityTextDiv}>
          <CityText color={weatherDesign.bottom} />
        </div>
      </div>
    </div>
  );
};

export default NextWeatherPage;
