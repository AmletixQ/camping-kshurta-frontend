import Container from "../Container/Container";
import Instagram from "../icons/Instagram/Instagram";
import Logo from "../icons/Logo/Logo";

import { anchors } from "../../constants/anchors";

import styles from "./Header.module.scss";

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
          <p className={styles.header__phonenumber}>+7 900 800 00 00</p>
          <Instagram />
        </div>
      </div>
    </Container>
  );
};
export default Header;
