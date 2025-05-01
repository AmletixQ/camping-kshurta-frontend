import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  error?: string;
}

const Input: FC<IInputProps> = ({ label, htmlFor, error, ...props }) => {
  return (
    <div className={styles.input}>
      <div className={styles.input__content}>
        <label htmlFor={htmlFor}>{label}</label>
        <input id={htmlFor} {...props} />
      </div>
      {error && <span className={styles.input__error}>{error}</span>}
    </div>
  );
};
export default Input;
