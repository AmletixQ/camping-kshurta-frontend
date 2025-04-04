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

interface IContainerProps
  extends PropsWithChildren,
    VariantProps<typeof container> {
  id?: string;
}

const Container: FC<IContainerProps> = ({ children, side, id }) => {
  return (
    <div id={id} className={container({ side })}>
      {children}
    </div>
  );
};
export default Container;
