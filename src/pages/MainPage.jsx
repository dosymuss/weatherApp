import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { DateNowComp } from "../ui/DateNowComp/DateNowComp";
import LogoText from "../layout/logo/LogoText";
import MenuBtn from "../components/Menu/MenuBtn";
import CityText from "../layout/city/CityText";
import DegresText from "../layout/DegresText/DegresText";
import Loader from "../ui/loader/Loader";
import { getWeather } from "../api/api";

import styles from "../styles/MainPage.module.css";
import { useEffect, useState } from "react";
import { getWeatherDesign } from "../code/code";

const MainPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weathers"],
    queryFn: getWeather,
    select: (data) => data.data.timelines.daily,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  console.log(data);

  const weatherToday =
    data !== undefined &&
    data.filter((item) => {
      let day = item.time;
      let dayToday = new Date().getDate();
      if (`${day[8]}${day[9]}` === dayToday.toString()) {
        return item;
      }
    });

  const weatherTodayValues =
    weatherToday && weatherToday.length > 0
      ? weatherToday[0].values
      : undefined;

  if (!weatherTodayValues) {
    navigate("/error");
  }

  const weatherDesign = getWeatherDesign(weatherTodayValues);

  console.log(weatherDesign);

  const imageBack = `url(${weatherDesign.image})`;

  return (
    <div style={{ backgroundImage: imageBack }} className={styles.container}>
      <div className={styles.header}>
        <LogoText color={weatherDesign.top} />
        <div className={styles.menuBtnDiv}>
          <MenuBtn allData={data} color={weatherDesign.top} data={weatherTodayValues} />
        </div>
      </div>
      <div className={styles.contentDiv}>
        <DegresText
          grad={weatherToday && weatherToday[0].values.temperatureAvg}
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

export default MainPage;
