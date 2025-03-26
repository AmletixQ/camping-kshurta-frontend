import Button from "../../Button/Button";
import styles from "./Moments.module.scss";

const Moments = () => {
  return (
    <div className={styles.moments}>
      <div className={styles.moments__container}>
        <div className={styles.moments__content}>
          <h2>Запечатлим яркие моменты!</h2>
          <p>
            На территории нашего лагеря работает профессиональный фотограф,
            который запечатлеет все яркие моменты вашего отдыха. А за отдельную
            стоимость мы проведем фотосессию в осетинских национальных костюмах.
          </p>
        </div>

        <Button color="secondary" role="link">
          Забронировать место
        </Button>
      </div>
      <img
        className={styles.moments__image}
        src="/images/moments.png"
        alt="moments"
      />
    </div>
  );
};
export default Moments;
