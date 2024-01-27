import styles from "./DetailsItem.module.css"

const DetailsItem = ({text, property}) => {
  return (
    <div className={styles.main}>
        <p>{text}</p>
        <p>{property}</p>
    </div>
  )
}

export default DetailsItem