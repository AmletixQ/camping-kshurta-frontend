import { FC, PropsWithChildren } from "react";

import styles from "./Button.module.scss";
import { cva, VariantProps } from "class-variance-authority";

interface IButton extends VariantProps<typeof button> {
  color: "primary" | "secondary";
}

const button = cva(styles.button, {
  variants: {
    color: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    role: {
      link: styles.link,
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Button: FC<IButton & PropsWithChildren> = ({
  children,
  color,
  role,
}) => {
  const handleClick = () => {
    console.log(123);
  };

  const configButton = {
    onClick: handleClick,
  };

  const configAnchor = {
    href: "#request-form",
  };

  return (
    <a
      {...(role !== "link" ? configButton : configAnchor)}
      className={button({ color, role })}
    >
      {children}
    </a>
  );
};
export default Button;
