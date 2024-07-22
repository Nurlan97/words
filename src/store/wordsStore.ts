import { makeAutoObservable } from "mobx";

class wordsStore {
  cardOpened = false;
  section: "learning" | "mastered" = "learning";

  constructor() {
    makeAutoObservable(this);
  }

  openCard = () => {
    this.cardOpened = true;
    console.log(this.cardOpened);
  };

  closeCard = () => {
    this.cardOpened = false;
  };

  openSection = (section: "learning" | "mastered") => {
    this.section = section;
  };
}

export default new wordsStore();
