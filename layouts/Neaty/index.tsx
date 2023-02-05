import { ColorButtonsItem } from "./components/ColorButtons";
import { LikeButtonItem } from "./components/Like";
import style from "./style.module.css";

export const NeatyLayout = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>💫</h1>

      <ColorButtonsItem />
      <LikeButtonItem />
    </main>
  );
};
