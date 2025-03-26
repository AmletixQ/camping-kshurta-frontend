import Container from "../Container/Container";
import Instagram from "../icons/Instagram/Instagram";
import Logo from "../icons/Logo/Logo";
import styles from "./Header.module.scss";

type TAnchor = {
  title: string;
  href: string;
};

const Header = () => {
  const anchors: TAnchor[] = [
    { title: "О нас", href: "#about" },
    { title: "Досуг и развлечения", href: "#entertainment" },
    { title: "Условия", href: "#conditions" },
    { title: "Палатки", href: "#tents" },
    { title: "Галерея", href: "#gallery" },
    { title: "Правила", href: "#rules" },
  ];

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
