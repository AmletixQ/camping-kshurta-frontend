import { first, second } from "../../constants/rules";
import styles from "./Rules.module.scss";

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
        <img src="/images/rules/first.png" alt="first-rules-image" />
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
        <img src="/images/rules/second.png" alt="second-rules-image" />
      </div>
    </div>
  );
};
export default Rules;
