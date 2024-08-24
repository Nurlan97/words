import { makeAutoObservable } from "mobx";

class wordsStore {
  hasCards = false;
  cardOpened = false;
  section: "learning" | "mastered" | "cardDetails" = "learning";
  screenWidth = window.innerWidth;

  constructor() {
    makeAutoObservable(this);
  }

  openCard = () => {
    this.cardOpened = true;
  };

  closeCard = () => {
    this.cardOpened = false;
  };

  openSection = (section: "learning" | "mastered" | "cardDetails") => {
    this.section = section;
  };
}

export default new wordsStore();
