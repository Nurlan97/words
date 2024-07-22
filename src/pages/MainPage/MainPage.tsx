import NavBar from "../../components/NavBar/NavBar";
import styles from "./mainPage.module.scss";
import LearningSection from "../../components/LearningSection/LearningSection";
import MasteredSection from "../../components/MasteredSection/MasteredSection";
import wordsStore from "../../store/wordsStore";
import CardDetails from "../../components/CardDetails/CardDetails";
import { observer } from "mobx-react-lite";

const MainPage = observer(() => {
  return (
    <div className={styles.mainPage}>
      <NavBar>
        <div className={styles.learningSectionWrapper}>
          <LearningSection />
        </div>
        <div className={styles.otherSectionsWrapper}>
          {wordsStore.cardOpened && <CardDetails />}
          {!wordsStore.cardOpened && <MasteredSection />}
        </div>
      </NavBar>
    </div>
  );
});

export default MainPage;
