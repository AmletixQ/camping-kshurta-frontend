import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

interface IContainerProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

const Container: FC<IContainerProps> = ({ children, id, className }) => {
  return (
    <div id={id} className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};
export default Container;
