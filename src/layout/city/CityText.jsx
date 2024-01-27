import styles from "./CityText.module.css"

const CityText = ({color}) => {
  return (
    <p style={{color:color}} className={styles.timeText}>Kyrgyzstan, Bishkek</p>
  )
}

export default CityText