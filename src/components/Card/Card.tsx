import styles from "./card.module.scss";
import cardImage from "../../assets/photo.jpeg";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useContext, useState } from "react";
import IsCompletedContext from "../../utils/isCompletedContext";
import { observer } from "mobx-react-lite";
import wordsStore from "../../store/wordsStore";

interface CardProps {
  img: string;
  title: string;
  status: string;
  progress: number;
}

const Card = observer(({ img, title, status, progress }: CardProps) => {
  const [savedBtnClicked, setSavedBtnClicked] = useState(false);
  const [progressBarResult, setProgressBarResult] = useState(90);
  const { setIsCompleted } = useContext(IsCompletedContext);

  if (progressBarResult === 100) {
    setIsCompleted(true);
  }
  const handleSavedBtn = () => {
    setSavedBtnClicked(!savedBtnClicked);
  };
  return (
    <div className={styles.card}>
      <img
        src={cardImage}
        alt="IMAGE"
        className={styles.image}
        onClick={wordsStore.openCard}
      />
      <div className={styles.info}>
        <div className={styles.titleWithSavedButton}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <h3 className={styles.cardSubtitle}>{status}</h3>
          </div>
          <div className={styles.saved} onClick={handleSavedBtn}>
            {savedBtnClicked ? (
              <FaRegBookmark className={styles.savedIcon} />
            ) : (
              <FaBookmark className={styles.savedIcon} />
            )}
          </div>
        </div>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressBarResult}
              style={{ width: `${progressBarResult}%` }}
            ></div>
          </div>
          <p
            className={styles.progressBarText}
          >{`${progressBarResult}% complete`}</p>
        </div>
      </div>
    </div>
  );
});

export default Card;
