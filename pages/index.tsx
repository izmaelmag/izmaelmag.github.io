import Head from "next/head";
import cn from "classnames";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { AnimatedLetters } from "~/components/AnimatedLetters";
import { P5Sketch } from "~/components/P5Sketch";
import { HomeSketch } from '~/sketches/home'

const fontFamily = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={cn(fontFamily.className, styles.title)}>
          <AnimatedLetters
            text="IzmaelMag"
            duration={1}
            delayStep={0.05}
            visible={true}
          />
        </h1>

        <P5Sketch
          render={HomeSketch}
        />
      </main>
    </>
  );
}
