import { useState, useEffect, useRef, useMemo } from "react";
import cn from "classnames";
import { AnimatedLetters } from "~/components/AnimatedLetters";
import { Item } from "../Item";
import style from "./style.module.css";

type Color = {
  hex: string;
  name: string;
};

const colors: Color[] = [
  { hex: "#e11d48", name: "장미 🌹" },
  { hex: "#c026d3", name: "푹샤 💞" },
  { hex: "#7c3aed", name: "제비꽃 🕺" },
  { hex: "#2563eb", name: "파란색 🫐" },
  { hex: "#0891b2", name: "시안 🐳" },
  { hex: "#059669", name: "에메랄드 🪲" },
  { hex: "#65a30d", name: "녹색 🍏" },
];

const textAnimMs = 320;

const getNormalIndex = (i: number, l: number, rev?: boolean) => {
  let max = l % 2 ? Math.floor(l / 2) : (l - 1) / 2;
  let dis = Math.abs(max - i);

  return rev ? dis : max - dis;
};

const ColorButtons = () => {
  const [currentColor, setColor] = useState(colors[0]);
  const [textVisible, setTextVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTextVisible(false);

    if (containerRef.current) {
      containerRef.current.style.color = currentColor.hex;
    }

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--color", currentColor.hex);
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
              key={color.name}
              className={style.colorContainer}
              style={{
                animationDelay: `${0.03 * normalIndex}s`,
              }}
            >
              <button
                className={cn(style.button, {
                  [style.active]: color === currentColor,
                })}
                style={{ backgroundColor: color.hex, color: color.hex }}
                onClick={() => setColor(color)}
              />
            </div>
          );
        })}
      </div>

      <div className={style.text}>
        {colors.map((color) => {
          const isActive = currentColor.hex === color.hex;
          return (
            <div
              key={color.name}
              style={{ color: color.hex }}
              className={cn(style.textItem, {
                [style.textHidden]: !isActive,
              })}
            >
              <AnimatedLetters
                text={color.name}
                visible={isActive}
                delayStep={0.03}
              />
            </div>
          );
        })}
        {/* <AnimatedLetters
          text={"오늘 엉덩이 씻었어?"}
          visible={textVisible}
          delayStep={0.05}
        /> */}
      </div>
    </div>
  );
};

export const ColorButtonsItem = () => (
  <Item>
    <ColorButtons />
  </Item>
);
