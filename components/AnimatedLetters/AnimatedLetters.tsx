import { useCallback, useMemo } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

type Props = JSX.IntrinsicElements["div"] & {
  duration?: number;
  visible?: boolean;
  reversed?: boolean;
  text?: string;
  delayStep?: number;
};

export const AnimatedLetters = ({
  text = "Set text",
  visible = true,
  reversed = false,
  delayStep = 0.05,
  duration = 0.5,
}: Props) => {
  const formattedText = useMemo(() => text.replace(" ", " "), [text]);

  const wrapperClassNames = useMemo(
    () => cn(styles.wrapper, visible ? styles.visible : styles.hidden),
    [visible]
  );

  const getStyle = useCallback(
    (n: number) => {
      const delay = reversed
        ? delayStep * formattedText.length - delayStep * n
        : delayStep * n;

      return {
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      };
    },
    [delayStep, duration, formattedText, reversed]
  );

  if (!text) return null;

  return (
    <div className={wrapperClassNames}>
      {Array.from(formattedText).map((letter, n) => {
        const style = getStyle(n);

        return (
          <div key={`letter-${n}`} className={styles.charContainer}>
            <div style={style} className={styles.char}>
              {letter}
            </div>
          </div>
        );
      })}
    </div>
  );
};
