import { ColorButtonsItem } from "./components/ColorButtons";
import style from "./style.module.css";

export const NeatyLayout = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>
        <b>💫</b>
        <span>Neaty UI</span>
      </h1>

      <ColorButtonsItem />
    </main>
  );
};
