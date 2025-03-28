import { FC, useState } from "react";

import Container from "../Container/Container";
import Arrow from "../icons/Arrow";

import styles from "./Accordion.module.scss";

interface IAccordionProps {
  title: string;
  description: string;
}

const Accordion: FC<IAccordionProps> = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordion + " " + (open ? styles.opened : "")}>
      <Container>
        <div className={styles.accordion__container}>
          <div className={styles.accordion__title}>
            <h3>{title}</h3>

            <button
              className={styles.accordion__button}
              onClick={() => setOpen((prev) => !prev)}
            >
              <Arrow />
            </button>
          </div>
          <p className={styles.accordion__description}>{description}</p>
        </div>
      </Container>
    </div>
  );
};
export default Accordion;
