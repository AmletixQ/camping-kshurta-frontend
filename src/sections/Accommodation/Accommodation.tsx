import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import styles from "./Accommodation.module.scss";

import image from "/images/accommodation.png";

const Accommodation = () => {
  return (
    <div className={styles.accommodation}>
      <Container>
        <div className={styles.accommodation__container}>
          <SectionTitle side="left">Размещение в лагере</SectionTitle>

          <div className={styles.accommodation__paragraphs}>
            <p>
              Наш лагерь располагается в солнечной долине Алагирского ущелья на
              лоне старого горного осетинского аула, в 70 км от города
              Владикавказ. В месте, пропитанном историей, дышащим легендами и
              преданиями, в окружении восхитительной природы, вдали от
              заезженных туристических маршрутов и транспортных магистралей.
            </p>
            <p>
              Мы рады предложить вам размещение в комфортных двух, четырех,
              шести и девяти местных палатках с удобными тамбурами, надувными
              матрасами и уютными спальниками. И двух разовое питание
              гарантируем. А в честь вашего приезда мы накроем праздничный стол.
            </p>
          </div>
        </div>
      </Container>

      <img
        src={image}
        alt="Man with cup"
        className={styles.accommodation__image}
      />
    </div>
  );
};
export default Accommodation;
