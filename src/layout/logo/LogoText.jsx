import styles from "../logo/logoText.module.css";

const LogoText = ({color}) => {
  return <p style={{color:color}} className={styles.logoText}>WeatherNow</p>;
};

export default LogoText;
