import { FC, useState } from "react";

import Container from "../Container/Container";
import Arrow from "../icons/Arrow/Arrow";
import SmallText from "../SmallText/SmallText";

import styles from "./Accordion.module.scss";
import { IAccordion } from "../../types/accordion.interface";

const Accordion: FC<IAccordion> = ({ title, small, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordion + " " + (open ? styles.opened : "")}>
      <Container>
        <div className={styles.accordion__container}>
          <div
            className={styles.accordion__title}
            onClick={() => setOpen((prev) => !prev)}
          >
            <h3>
              {title}
              {small && <SmallText>{small}</SmallText>}
            </h3>

            <div className={styles.accordion__button}>
              <Arrow />
            </div>
          </div>
          <p className={styles.accordion__description}>{description}</p>
        </div>
      </Container>
    </div>
  );
};
export default Accordion;
