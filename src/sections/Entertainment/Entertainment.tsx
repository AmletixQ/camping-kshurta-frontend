import Accordion from "../../components/Accordion/Accordion";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { accordions } from "../../constants/accordions";
import styles from "./Entertainment.module.scss";

const Entertainment = () => {
  return (
    <section className={styles.entertainment} id="entertainment">
      <Container>
        <SectionTitle>Досуг и развлечения</SectionTitle>
      </Container>
      <div className={styles.entertainment__container}>
        {accordions.map((accordion, index) => (
          <Accordion {...accordion} key={index} />
        ))}
      </div>
    </section>
  );
};
export default Entertainment;
