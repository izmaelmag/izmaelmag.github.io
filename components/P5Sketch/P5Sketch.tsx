import { useEffect, useRef } from "react";
import cn from "classnames";
import p5 from "p5";
import { P5SketchFunction } from "types";
import styles from "./styles.module.css";

type Props = JSX.IntrinsicElements["div"] & {
  render: P5SketchFunction;
};

/**
 * Creates new p5.js canvas instance with given sketch function
 */
const P5Sketch = ({ render, className, ...props }: Props) => {
  const container: React.RefObject<HTMLDivElement> = useRef(null);
  const canvas: React.MutableRefObject<p5 | null> = useRef(null);

  useEffect(() => {
    if (container.current) {
      canvas.current = new p5(render, container.current);
    }

    return () => canvas.current?.remove();
  }, [render]);

  return (
    <div className={cn(styles.wrapper, className)} ref={container} {...props} />
  );
};

export default P5Sketch;
