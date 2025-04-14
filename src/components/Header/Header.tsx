import Container from "../Container/Container";
import Instagram from "../icons/Instagram/Instagram";
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
          <a href="tel:+79008000000" className={styles.header__phonenumber}>
            +7 900 800 00 00
          </a>
          <Instagram />
        </div>

        <BurgerMenu />
      </div>
    </Container>
  );
};
export default Header;
