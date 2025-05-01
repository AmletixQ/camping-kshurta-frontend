import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

interface IContainerProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

const Container: FC<IContainerProps> = ({ children, id, className }) => {
  return (
    <section id={id} className={`${styles.container} ${className}`}>
      {children}
    </section>
  );
};
export default Container;
