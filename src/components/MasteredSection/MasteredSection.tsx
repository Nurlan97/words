import { observer } from "mobx-react-lite";
import styles from "./MasteredSection.module.scss";
import wordsStore from "../../store/wordsStore";

const MasteredSection = observer(() => {
  return (
    <div className={styles.masteredSection}>
      <div
        className={styles.titleWrapper}
        onClick={() => wordsStore.openSection("mastered")}
      >
        <h1 className={styles.title}>Mastered</h1>
        {wordsStore.section === "mastered" && (
          <div className={styles.titleUnderline}></div>
        )}
      </div>
    </div>
  );
});

export default MasteredSection;
