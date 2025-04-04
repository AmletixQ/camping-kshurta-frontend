import { useState } from "react";
import Lines from "../icons/Lines";
import styles from "./BurgerMenu.module.scss";
import Container from "../Container/Container";
import Cross from "../icons/Cross";
import { anchors } from "../../constants/anchors";
import Instagram from "../icons/Instagram/Instagram";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <div
        className={
          styles.menu__container + " " + (open ? styles.opened : styles.closed)
        }
      >
        <Container>
          <div className={styles.menu__box}>
            <button
              className={styles.menu__close}
              onChange={() => setOpen(false)}
            >
              <Cross />
            </button>
          </div>

          <div className={styles.menu__content}>
            <div className={styles.menu__links}>
              {anchors.map((anchor, index) => (
                <a href={anchor.href} key={index}>
                  {anchor.title}
                </a>
              ))}
            </div>
            <div className={styles.menu__contacts}>
              <p>+7 900 800 00 00</p>
              <Instagram />
            </div>
          </div>
        </Container>
      </div>
      <button className={styles.menu__button} onClick={() => setOpen(!open)}>
        <Lines />
      </button>
    </div>
  );
};
export default BurgerMenu;
