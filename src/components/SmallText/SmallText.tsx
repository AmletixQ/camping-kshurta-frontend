import { FC, PropsWithChildren } from "react";
import styles from "./SmallText.module.scss";

const SmallText: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.smalltext}>{children}</p>;
};
export default SmallText;
