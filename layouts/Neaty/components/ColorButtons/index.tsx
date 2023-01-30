import { useState, useEffect, useRef, useMemo } from "react";
import cn from "classnames";
import { AnimatedLetters } from "~/components/AnimatedLetters";
import { Item } from "../Item";
import style from "./style.module.css";

const colors = [
  "#e11d48",
  "#c026d3",
  "#7c3aed",
  "#2563eb",
  "#0891b2",
  "#059669",
  "#65a30d",
  "#d97706",
];

const textAnimMs = 320;

const ColorButtons = () => {
  const [currentColor, setColor] = useState(colors[0]);
  const [textVisible, setTextVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTextVisible(false);

    if (containerRef.current) {
      containerRef.current.style.color = currentColor;
    }

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--color", currentColor);
      }
    }, textAnimMs / 2);

    setTimeout(() => {
      setTextVisible(true);
    }, textAnimMs);
  }, [currentColor, containerRef]);

  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.buttons}>
        {colors.map((color, index) => (
          <button
            className={cn(style.button, {
              [style.active]: color === currentColor,
            })}
            style={{ backgroundColor: color, color }}
            key={color}
            onClick={() => setColor(color)}
          />
        ))}
      </div>

      <div className={style.text}>
        <AnimatedLetters
          text={"오늘 엉덩이 씻었어?"}
          byWord={textVisible}
          visible={textVisible}
          duration={textVisible ? 0.5 : 0.2}
          delayStep={textVisible ? 0.1 : 0.02}
        />
      </div>
    </div>
  );
};

export const ColorButtonsItem = () => (
  <Item>
    <ColorButtons />
  </Item>
);
