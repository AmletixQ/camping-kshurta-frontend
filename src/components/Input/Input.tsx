import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
}

const Input: FC<IInputProps> = ({ label, htmlFor, ...props }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} {...props} />
    </div>
  );
};
export default Input;
