import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NeatyLayout } from "~/layouts/Neaty";

export default function Home() {
  return (
    <>
      <Head>
        <title>💫 Neaty elements</title>
        <meta name="description" content="Neat animated UI elements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/neaty.ico" />
      </Head>

      <NeatyLayout />
    </>
  );
}
