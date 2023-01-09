import cn from 'classnames'
import { Heading } from "~/components/Heading";
import { AnimatedLetters } from "~/components/AnimatedLetters";
import styles from "./styles.module.css";

type Props = JSX.IntrinsicElements["section"] & {};

export const VideoCreator = ({ ...props }: Props) => {
  return (
    <section className={styles.view} {...props}>
      <div className={cn(styles.half, styles.contents)}>
        <Heading className={styles.title}>
          <AnimatedLetters
            text={"Generate beautiful procedural videos for your social media in minutes for free"}
            duration={1}
            delayStep={0.005}
          />
        </Heading>
      </div>

      <div className={cn(styles.half, styles.preview)}>
        <div className={styles.content}>
          <div className={styles.mediaView}></div>
        </div>
      </div>
    </section>
  );
};
