import { FC, PropsWithChildren } from "react";
import styles from "./SmallText.module.scss";

const SmallText: FC<PropsWithChildren> = ({ children }) => {
  return <span className={styles.smalltext}>{children}</span>;
};
export default SmallText;
