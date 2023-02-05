import { useCallback, useMemo } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

type Props = JSX.IntrinsicElements["div"] & {
  duration?: number;
  byWord?: boolean;
  visible?: boolean;
  reversed?: boolean;
  text?: string;
  delayStep?: number;
};

export const AnimatedLetters = ({
  text = "Set text",
  byWord = false,
  visible = true,
  reversed = false,
  delayStep = 0.05,
}: Props) => {
  const formattedText = useMemo(() => text.replaceAll(" ", " "), [text]);

  const getStyle = useCallback(
    (n: number) => {
      const delay = reversed
        ? delayStep * formattedText.length - delayStep * n
        : delayStep * n;

      return {
        transitionDelay: `${delay}s`,
        animationDelay: `${delay}s`,
      };
    },
    [delayStep, formattedText, reversed]
  );

  if (!text) return null;

  const words = formattedText.split(" ");

  let globalIndex = 0;

  return (
    <div
      className={cn(styles.wrapper, visible ? styles.visible : styles.hidden)}
    >
      {words.map((word, i) => {
        const wordStyle = getStyle(i);

        return (
          <div
            style={byWord ? wordStyle : {}}
            className={cn(styles.word, { [styles.wordAnimated]: byWord })}
            key={`word-${word}-${i}`}
          >
            {Array.from(word).map((letter) => {
              const localIndex = globalIndex++;
              const charStyle = getStyle(localIndex);

              return (
                <div
                  key={`letter-${localIndex}`}
                  className={styles.charContainer}
                >
                  <div
                    style={byWord ? {} : charStyle}
                    className={byWord ? "" : styles.char}
                  >
                    {letter}
                  </div>
                </div>
              );
            })}
            {" "}
          </div>
        );
      })}
    </div>
  );
};
