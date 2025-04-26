import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className={styles.button} />;
};
export default Button;
