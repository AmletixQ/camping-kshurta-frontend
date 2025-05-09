import AnchorLink from "../../components/AnchorLink/AnchorLink";
import Container from "../../components/Container/Container";
import styles from "./AboutUs.module.scss";

import image from "/images/aboutUs.png";

const AboutUs = () => {
  return (
    <Container id={"about-us"}>
      <div className={styles.aboutUs}>
        <img
          className={styles.aboutUs__image}
          src={image}
          alt="beautiful image"
        />
        <div className={styles.aboutUs__content}>
          <div className={styles.aboutUs__content__typography}>
            <h1>Палаточный лагерь «Седой Кшурт»</h1>
            <p>
              Место, где чистый горный воздух, потрясающие виды и настоящая
              свобода сливаются воедино. Здесь вас ждут захватывающие походы,
              уютные вечера у костра и полное единение с природой. Независимо от
              того, ищете ли вы активный отдых или тихий уголок для
              перезагрузки, у нас есть всё для комфортного пребывания в горах.
            </p>
          </div>

          <AnchorLink color="primary">Забронировать место</AnchorLink>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
