import { useState, useEffect, useRef, useMemo } from "react";
import cn from "classnames";
import { AnimatedLetters } from "~/components/AnimatedLetters";
import { map } from "~/utils/math";
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
];

const textAnimMs = 320;

const getNormalIndex = (i: number, l: number, rev?: boolean) => {
  let max = l % 2 ? Math.floor(l / 2) : (l - 1) / 2;
  let dis = Math.abs(max - i)

  return rev ? dis : max - dis;
};

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
        {colors.map((color, index) => {
          let normalIndex = getNormalIndex(index, colors.length, true);

          return (
            <div
              key={color}
              className={style.colorContainer}
              style={{
                animationDelay: `${0.03 * normalIndex}s`,
              }}
            >
              <button
                className={cn(style.button, {
                  [style.active]: color === currentColor,
                })}
                style={{ backgroundColor: color, color }}
                onClick={() => setColor(color)}
              />
            </div>
          );
        })}
      </div>

      <div className={style.text}>
        <AnimatedLetters
          text={"오늘 엉덩이 씻었어?"}
          visible={textVisible}
          duration={0.4}
          delayStep={0.05}
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
