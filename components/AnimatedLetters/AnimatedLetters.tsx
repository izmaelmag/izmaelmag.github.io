import { useCallback, useMemo } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

type Props = JSX.IntrinsicElements["div"] & {
  duration?: number;
  visible?: boolean;
  reversed?: boolean;
  text?: string;
  delayStep?: number;
  letterClassName?: string;
};

export const AnimatedLetters = ({
  text = "Set text",
  visible = true,
  reversed = false,
  delayStep = 0.05,
  duration = 0.5,
  letterClassName,
}: Props) => {
  const formattedText = useMemo(() => text.replaceAll(" ", " "), [text]);

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

  const words = formattedText.split(" ");

  let globalIndex = 0;

  return (
    <div className={wrapperClassNames}>
      {words.map((word, i) => (
        <div className={styles.word} key={`word-${word}-${i}`}>
          {Array.from(word).map((letter) => {
            const localIndex = globalIndex++;
            const style = getStyle(localIndex);

            return (
              <div
                key={`letter-${localIndex}`}
                style={style}
                className={cn(styles.char, letterClassName)}
              >
                {letter}
              </div>
            );
          })}
          {' '}
        </div>
      ))}
    </div>
  );
};
