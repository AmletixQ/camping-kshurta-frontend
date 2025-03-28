import { FC } from "react";
import styles from "./Card.module.scss";

import { ICard } from "../../types/card.interface";

const Card: FC<ICard> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
