import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import { cva, VariantProps } from "class-variance-authority";

const input = cva(styles.input, {
  variants: {
    font: {
      number: styles.inter,
    },
  },
});

type IInputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input>;

const Input: FC<IInputProps> = ({ font, ...props }) => {
  return <input {...props} className={input({ font })} />;
};
export default Input;
