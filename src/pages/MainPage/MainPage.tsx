import NavBar from "../../components/NavBar/NavBar";
import styles from "./mainPage.module.scss";
import LearningSection from "../../components/LearningSection/LearningSection";
import MasteredSection from "../../components/MasteredSection/MasteredSection";
import wordsStore from "../../store/wordsStore";
import { observer } from "mobx-react-lite";
import CardDetails from "../../components/CardDetails/CardDetails";
import SectionsTitleWrapper from "../../components/SectionsTitleWrapper/SectionsTitleWrapper";

const MainPage = observer(() => {
  return (
    <div className={styles.mainPage}>
      {/* {wordsStore.screenWidth > 500 && ( */}
        <NavBar>
          <div className={styles.main}>
            {wordsStore.screenWidth > 900 && (
              <>
                <SectionsTitleWrapper />
                <div className={styles.sectionDetails}>
                  <LearningSection />
                  {!wordsStore.cardOpened && <MasteredSection />}
                  {wordsStore.cardOpened && <CardDetails />}
                </div>
              </>
            )}

            {wordsStore.screenWidth <= 900 && (
              <>
                {!wordsStore.cardOpened && <SectionsTitleWrapper />}
                {wordsStore.cardOpened && (
                  <div className={styles.sectionsTitleWrapper}>
                    <h2 className={styles.sectionTitle}>Card Details</h2>
                  </div>
                )}
                <div className={styles.sectionDetails}>
                  {wordsStore.section === "learning" &&
                    !wordsStore.cardOpened && <LearningSection />}
                  {wordsStore.section === "mastered" &&
                    !wordsStore.cardOpened && <MasteredSection />}
                  {wordsStore.cardOpened && <CardDetails />}
                </div>
              </>
            )}
          </div>
        </NavBar>
      {/* )} */}
      {/* {wordsStore.screenWidth <= 500 && (
        <div className={styles.wrapper}>
          
        </div>
      )} */}
    </div>
  );
});

export default MainPage;
