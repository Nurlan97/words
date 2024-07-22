import { observer } from "mobx-react-lite";
import Cards from "../Cards/Cards";
import styles from "./learningSection.module.scss";
import wordsStore from "../../store/wordsStore";

const LearningSection = observer(() => {
  return (
    <div className={styles.learningSection}>
      <h1 className={styles.title} onClick={() => wordsStore.openSection('learning')}>Learning</h1>
      <Cards />
    </div>
  );
});

export default LearningSection;
