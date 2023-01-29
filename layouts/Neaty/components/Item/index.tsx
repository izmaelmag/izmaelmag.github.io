import style from "./style.module.css";

type Props = JSX.IntrinsicElements["div"];

export const Item = ({ children }: Props) => {
  return <div className={style.item}>{children}</div>;
};
