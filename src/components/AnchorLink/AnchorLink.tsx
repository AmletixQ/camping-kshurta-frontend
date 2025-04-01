import { AnchorHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

import styles from "./AnchorLink.module.scss";

const anchor = cva(styles.anchor, {
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

const AnchorLink: FC<
  VariantProps<typeof anchor> & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ color, ...props }) => {
  return <a {...props} href="#form" className={anchor({ color })} />;
};
export default AnchorLink;
