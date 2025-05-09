import { useState } from "react";
import Lines from "../icons/Lines";
import styles from "./BurgerMenu.module.scss";
import Container from "../Container/Container";
import Cross from "../icons/Cross";
import { anchors } from "../../constants/anchors";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.menu + (open ? ` ${styles.opened}` : "")}>
        <Container>
          <div className={styles.menu__box}>
            <button
              className={styles.menu__close}
              onClick={() => setOpen(false)}
            >
              <Cross />
            </button>
          </div>

          <div className={styles.menu__content}>
            <div className={styles.menu__links}>
              {anchors.map((anchor, index) => (
                <a
                  href={anchor.href}
                  key={index}
                  onClick={() => setOpen(false)}
                >
                  {anchor.title}
                </a>
              ))}
            </div>
            <div className={styles.menu__contacts}>
              <a href="tel:+79094755913"> +7 909 475 59 13</a>
            </div>
          </div>
        </Container>
      </div>

      <button className={styles.menu__button} onClick={() => setOpen(!open)}>
        <Lines />
      </button>
    </>
  );
};
export default BurgerMenu;
