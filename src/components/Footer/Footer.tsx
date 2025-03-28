import { anchors } from "../../constants/anchors";
import Container from "../Container/Container";
import Logo from "../icons/Logo/Logo";
import SmallText from "../SmallText/SmallText";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <Logo />
          <div className={styles.footer__box}>
            <div className={styles.footer__links}>
              {anchors.map((anchor, index) => (
                <a href={anchor.href} key={index}>
                  {anchor.title}
                </a>
              ))}
            </div>
            <div className={styles.footer__content}>
              <div className={styles.footer__content_item}>
                <h5>Часы работы отдела бронирования:</h5>
                <div>
                  <h5>С 9:00 до 21:00</h5>
                  <SmallText>без выходных</SmallText>
                </div>
              </div>
              <div className={styles.footer__content_item}>
                <h5>Администратор лагеря</h5>
                <div>
                  <h5>+7-909-475-59-13</h5>
                  <SmallText>(Наталья)</SmallText>
                </div>
              </div>
            </div>
            <div className={styles.footer__content}>
              <div className={styles.footer__content_item}>
                <h5>ООО «Компания»</h5>
                <h5>г. Владикавказ, ул. Проспект Коста, 34</h5>
              </div>
              <a href="mailto:kshurta.info@gmail.com">kshurta.info@gmail.com</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
