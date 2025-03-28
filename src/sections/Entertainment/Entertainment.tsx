import Accordion from "../../components/Accordion/Accordion";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { accordions } from "../../constants/accordions";
import styles from "./Entertainment.module.scss";

const Entertainment = () => {
  return (
    <div className={styles.entertainment}>
      <Container>
        <SectionTitle side="right">Досуг и развлечения</SectionTitle>
      </Container>
      <div className={styles.entertainment__container}>
        {accordions.map((accordion, index) => (
          <Accordion {...accordion} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Entertainment;
