import { useContext } from "react";
import Card from "../Card/Card";
import styles from "./cards.module.scss";
import IsCompletedContext from "../../utils/isCompletedContext";
import { observer } from 'mobx-react-lite';

const Cards = observer(() => {
  const { isCompleted } = useContext(IsCompletedContext);

  const cardsList = [
    {
      id: 1,
      img: "",
      title: "Words Topic",
      status: "learning card",
      progress: 90,
    },
    {
      id: 2,
      img: "",
      title: "Words Topic 2",
      status: "learning card",
      progress: 70,
    },
  ];
  return (
    <div className={styles.cardsWrapper}>
      {cardsList.map((item) =>
        isCompleted ? (
          ""
        ) : (
          <div className={styles.cardWrapper}>
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              status={item.status}
              progress={item.progress}
            />
          </div>
        )
      )}
    </div>
  );
});

export default Cards;
