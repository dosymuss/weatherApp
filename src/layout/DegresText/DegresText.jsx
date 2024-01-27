import styles from "./DegresText.module.css";

const DegresText = ({ grad, desc, title, color }) => {
  return (
    <div className={styles.main}>
      <p style={{ color: color }} className={styles.deg}>{`${grad}'`}</p>
      <div className={styles.descTitDiv}>
        <p style={{ color: color }} className={styles.title}>
          {title}
        </p>
        <p style={{ color: color }} className={styles.desc}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default DegresText;
