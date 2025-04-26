import Container from "../Container/Container";
import Logo from "../icons/Logo/Logo";

import { anchors } from "../../constants/anchors";

import styles from "./Header.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <Container>
      <div className={styles.header}>
        <Logo />

        <div className={styles.header__anchors}>
          {anchors.map(({ href, title }) => (
            <a href={href} key={title}>
              {title}
            </a>
          ))}
        </div>
        <div className={styles.header__contacts}>
          <a href="tel:+79094755913" className={styles.header__phonenumber}>
            +7 909 475 59 13
          </a>
        </div>

        <BurgerMenu />
      </div>
    </Container>
  );
};
export default Header;
