import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";
import { cva, VariantProps } from "class-variance-authority";

const container = cva(styles.container, {
  variants: {
    side: {
      left: styles.left,
      right: styles.right,
      center: styles.center,
    },
  },

  defaultVariants: {
    side: "center",
  },
});

const Container: FC<PropsWithChildren & VariantProps<typeof container>> = ({
  children,
  side,
}) => {
  return <div className={container({ side })}>{children}</div>;
};
export default Container;
