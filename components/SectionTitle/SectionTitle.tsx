import { FC, PropsWithChildren } from "react";
import styles from "./SectionTitle.module.scss";
import Hill from "../icons/Hill/Hill";

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Hill />
      <h2>{children}</h2>
    </div>
  );
};
export default SectionTitle;
