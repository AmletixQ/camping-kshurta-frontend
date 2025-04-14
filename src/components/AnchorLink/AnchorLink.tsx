import { AnchorHTMLAttributes, FC } from "react";

import styles from "./AnchorLink.module.scss";

interface IAnchorLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isSecondary?: boolean;
}

const AnchorLink: FC<IAnchorLink> = (props) => {
  const type = props.isSecondary ? styles.secondary : styles.primary;

  return <a {...props} href="#form" className={`${styles.anchor} ${type}`} />;
};
export default AnchorLink;
