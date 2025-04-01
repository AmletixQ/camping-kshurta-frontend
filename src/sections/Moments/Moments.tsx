import AnchorLink from "../../components/AnchorLink/AnchorLink";
import styles from "./Moments.module.scss";

import image from "/images/moments.png";

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

        <AnchorLink color="secondary" role="link">
          Забронировать место
        </AnchorLink>
      </div>
      <img className={styles.moments__image} src={image} alt="moments" />
    </div>
  );
};
export default Moments;
