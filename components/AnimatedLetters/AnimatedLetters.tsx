import { useMemo } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

type Props = JSX.IntrinsicElements["div"] & {
  duration?: number;
  visible?: boolean;
  text?: string;
  delayStep?: number;
};

export const AnimatedLetters = ({
  text = "Set text",
  visible = true,
  delayStep = 0.05,
  duration = 0.5,
}: Props) => {
  if (!text) return null;

  const visibility = visible ? styles.visible : styles.hidden;

  const formattedText = text.replace(" ", " ");

  return (
    <div className={cn(styles.wrapper, visibility)}>
      {Array.from(formattedText).map((letter, n) => {
        const animationStyle = {
          animationDelay: `${delayStep * n}s`,
          animationDuration: `${duration}s`,
        };

        return (
          <div key={`letter-${n}`} className={styles.charContainer}>
            <div style={animationStyle} className={styles.char}>
              {letter === " " ? " " : letter}
            </div>
          </div>
        );
      })}
    </div>
  );
};
