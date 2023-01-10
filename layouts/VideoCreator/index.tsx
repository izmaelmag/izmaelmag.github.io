import { useRef } from "react";
import P5 from "p5";
import cn from "classnames";
import { Heading } from "~/components/Heading";
import { AnimatedLetters } from "~/components/AnimatedLetters";
import styles from "./styles.module.css";
import { P5Sketch } from "~/components/P5Sketch";
import { createNoise3D } from "simplex-noise";

type Props = JSX.IntrinsicElements["section"] & {};

export const VideoCreator = ({ ...props }: Props) => {
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.view} {...props}>
      <div className={cn(styles.half, styles.contents)}>
        <Heading className={styles.title}>
          <AnimatedLetters
            text={
              "Generate beautiful procedural videos for your social media in minutes for free"
            }
            duration={1}
            delayStep={0.005}
          />
        </Heading>
      </div>

      <div className={cn(styles.half, styles.preview)}>
        <div className={styles.content}>
          <div ref={viewRef} className={styles.mediaView}>
            <div className={styles.viewContent}>
              <div className={styles.viewBackground}>
                <P5Sketch
                  render={(p: P5) => {
                    let n = 16;
                    let noise3D = createNoise3D();

                    p.setup = () => {
                      p.createCanvas(
                        viewRef.current?.clientWidth || 1080,
                        viewRef.current?.clientHeight || 1920
                      );
                      p.background(0);
                    };

                    p.draw = () => {
                      p.background(0);

                      let size = p.round(p.width / n);

                      for (let x = 0; x <= p.width; x += size) {
                        for (let y = 0; y <= p.height; y += size) {
                          const noiseX = noise3D(
                            (x + 500) / 500,
                            (y + 500) / 500,
                            p.millis() / 8000
                          );
                          const noiseY = noise3D(
                            x / 500,
                            (y + p.millis() / 50) / 500,
                            p.millis() / 8000
                          );
                          const noiseR = noise3D(
                            x / 500,
                            (y + p.millis() / 10) / 500,
                            p.millis() / 10000
                          );

                          p.fill(255 * noiseX, 255 * noiseY, 255);
                          p.noStroke();
                          p.circle(x + size / 2 + noiseX * size/2, y + noiseY * size / 2, noiseR * size)


                          // p.rectMode(p.CENTER);
                          // p.rect(
                          //   x + size / 2 + (noiseX * size) / 2,
                          //   y + (noiseY * size) / 2,
                          //   noiseR * (size - 4),
                          //   noiseR * (size - 4)
                          // );
                        }
                      }
                    };
                  }}
                />
              </div>

              <div className={styles.viewText}>
                <AnimatedLetters
                  text="Check"
                  duration={10}
                  delayStep={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
