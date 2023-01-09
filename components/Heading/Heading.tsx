import cn from "classnames";
import { Inter } from "@next/font/google";
import styles from "./styles.module.css";

const fontFamily = Inter({
  subsets: ["latin"],
});

type Props = JSX.IntrinsicElements["div"] & {};

export const Heading = ({ className, children, ...props }: Props) => {
  return (
    <h1 className={cn(styles.heading, fontFamily.className, className)} {...props}>
      {children}
    </h1>
  );
};
