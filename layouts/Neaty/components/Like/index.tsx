import { useState, useMemo } from "react";
import cn from "classnames";
import { Item } from "../Item";
import { ThumbsUp, ThumbsDown } from "iconoir-react";
import { AnimatedLetters } from "~/components/AnimatedLetters";
import style from "./style.module.css";

const LikeButton = () => {
  const [choice, setChoice] = useState<"up" | "down" | null>(null);

  const isUp = useMemo(() => choice === "up", [choice]);
  const isDown = useMemo(() => choice === "down", [choice]);
  const isIdle = useMemo(() => choice === null, [choice]);

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <div className={style.buttonWrapper}>
          <button
            onClick={() => setChoice("up")}
            className={cn(style.icon, { [style.active]: choice === "up" })}
          >
            <ThumbsUp className={style.up} width={80} height={80} />
          </button>
        </div>

        <div className={style.buttonWrapper}>
          <button
            onClick={() => setChoice("down")}
            className={cn(style.icon, { [style.active]: choice === "down" })}
          >
            <ThumbsDown className={style.down} width={80} height={80} />
          </button>
        </div>
      </div>

      <div className={style.text}>
        <div className={style.textItem}>
          <AnimatedLetters
            text={"우리를 평가! 'ㅂ'"}
            visible={isIdle}
            delayStep={isIdle ? 0.03 : 0.015}
          />
        </div>

        <div
          className={cn(style.textUp, style.textItem, {
            [style.textHidden]: !(isDown || isUp),
          })}
        >
          <AnimatedLetters
            text={"좋다! (•¯ ∀ ¯•)"}
            visible={isUp}
            delayStep={0.03}
          />
        </div>

        <div
          className={cn(style.textDown, style.textItem, {
            [style.textHidden]: !(isDown || isUp),
          })}
        >
          <AnimatedLetters
            text={"싫어함! ㅠ_ㅠ"}
            visible={isDown}
            delayStep={0.03}
          />
        </div>
      </div>
    </div>
  );
};

export const LikeButtonItem = () => (
  <Item>
    <LikeButton />
  </Item>
);
