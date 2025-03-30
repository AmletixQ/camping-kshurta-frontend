import { first, second } from "../../constants/rules";
import styles from "./Rules.module.scss";

import firstImage from "/images/rules/first.png";
import secondImage from "/images/rules/second.png";

const Rules = () => {
  return (
    <div className={styles.rules}>
      <div className={styles.rules__container}>
        <div className={styles.rules__content}>
          <h2>Что с собой брать?</h2>
          <div className={styles.rules__content_items}>
            {first.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <img src={firstImage} alt="first-rules-image" />
      </div>
      <div className={styles.rules__container}>
        <div className={styles.rules__content}>
          <h2>Правила</h2>
          <div className={styles.rules__content_items}>
            {second.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <img src={secondImage} alt="second-rules-image" />
      </div>
    </div>
  );
};
export default Rules;
