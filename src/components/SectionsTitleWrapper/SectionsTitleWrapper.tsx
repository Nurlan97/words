import { observer } from "mobx-react-lite";
import styles from "./SectionsTitleWrapper.module.scss";
import wordsStore from "../../store/wordsStore";

const SectionsTitleWrapper = observer(() => {
  return (
    <div className={styles.sectionsTitleWrapper}>
      <div
        className={styles.sectionTitleWrapper}
        onClick={() => wordsStore.openSection("learning")}
      >
        <h1 className={styles.sectionTitle}>
          Learning
          {wordsStore.section === "learning" && (
            <div className={styles.titleUnderline}></div>
          )}
        </h1>
      </div>
      {!wordsStore.cardOpened && (
        <div
          className={styles.sectionTitleWrapper}
          onClick={() => wordsStore.openSection("mastered")}
        >
          <h2 className={styles.sectionTitle}>
            Mastered
            {wordsStore.section === "mastered" && (
              <div className={styles.titleUnderline}></div>
            )}
          </h2>
        </div>
      )}
      {wordsStore.cardOpened && (
        <div
          className={styles.sectionTitleWrapper}
          onClick={() => wordsStore.openSection("cardDetails")}
        >
          <h2 className={styles.sectionTitle}>
            Card Details
            {wordsStore.section === "cardDetails" && (
              <div className={styles.titleUnderline}></div>
            )}
          </h2>
        </div>
      )}
    </div>
  );
});

export default SectionsTitleWrapper;
