import styles from "./cardDetails.module.scss";
import cardImage from "../../assets/photo.jpeg";
import Button from "../../UI/Button/Button";
import wordsStore from "../../store/wordsStore";
import { FaWindowClose } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { observer } from "mobx-react-lite";

const buttonData = [
  {
    id: 1,
    btnName: "Learning",
    background: "#000",
  },
  {
    id: 2,
    btnName: "Mastered",
    background: "#000",
  },
  {
    id: 3,
    btnName: "Delete",
    background: "red",
  },
];

const CardDetails = observer(() => {
  return (
    <div className={styles.cardDetails}>
      <div className={styles.cardInfo}>
        <img src={cardImage} alt="Image" className={styles.image} />
        <h1 className={styles.title}>Card Details</h1>
        <div className={styles.closeBtn} onClick={wordsStore.closeCard}>
          {/* <FaWindowClose className={styles.closeBtnIcon}/> */}
          <FaRegWindowClose className={styles.closeBtnIcon}/>
        </div>
        <div className={styles.status}>Learning Card</div>
        <p className={styles.description}>Description</p>
      </div>
      <div className={styles.btnGroup}>
        {buttonData.map((item) => (
          <Button btnName={item.btnName} background={item.background} />
        ))}
      </div>
    </div>
  );
});

export default CardDetails;
