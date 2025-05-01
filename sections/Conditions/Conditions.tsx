import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { cards } from "../../constants/cards";
import styles from "./Conditions.module.scss";

const Conditions = () => {
  return (
    <Container id="tents">
      <SectionTitle>Комфортные условия</SectionTitle>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </Container>
  );
};
export default Conditions;
