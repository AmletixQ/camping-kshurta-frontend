import Card, { ICard } from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./Conditions.module.scss";

const Conditions = () => {
  const cards: ICard[] = [
    {
      title: "Комфортные палатки от 2 до 4 мест",
      description:
        "Проживание в удобных 2-х и 4-х местных палатках, оснащённых всем необходимым: просторным тамбуром, надувными матрасами и тёплыми спальными мешками.",
    },
    {
      title: "Шатры для большой компании",
      description:
        "Шатры с обогревателями, освещением, электричеством, двухспальными кроватями и теплыми одеялами для комфортного отдыха для небольших групп и семей.",
    },
    {
      title: "Удобные условия для кемпинга",
      description:
        "Если вы хотите установить собственную палатку, мы предоставим вам специальную выделенную зону. Также можно арендовать палатки и спальные мешки для комфорта.",
    },
  ];

  return (
    <Container>
      <SectionTitle side="left">Комфортные условия</SectionTitle>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </Container>
  );
};
export default Conditions;
