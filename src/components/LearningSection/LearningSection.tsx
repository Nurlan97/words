import { observer } from "mobx-react-lite";
import Cards from "../Cards/Cards";
import styles from "./learningSection.module.scss";
import wordsStore from "../../store/wordsStore";

const LearningSection = observer(() => {
  return (
    <div className={styles.learningSection}>
      <div className={styles.cardsList}>
        <Cards />
      </div>
    </div>
  );
});

export default LearningSection;
