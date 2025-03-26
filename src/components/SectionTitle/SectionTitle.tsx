import { FC, PropsWithChildren } from "react";

import styles from "./SectionTitle.module.scss";
import Hill from "../icons/Hill/Hill";
import { cva, VariantProps } from "class-variance-authority";

const title = cva(styles.container, {
  variants: {
    side: {
      left: styles.left,
      right: styles.right,
    },
  },
});

type ITitleProps = VariantProps<typeof title>;

const SectionTitle: FC<ITitleProps & PropsWithChildren> = ({
  side,
  children,
}) => {
  return (
    <div className={title({ side })}>
      <Hill />
      <h2>{children}</h2>
    </div>
  );
};
export default SectionTitle;
