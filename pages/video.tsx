import Head from "next/head";
import cn from "classnames";
import { Inter } from "@next/font/google";
import { VideoCreator } from "~/layouts/VideoCreator";

const Home = () => {
  return (
    <>
      <Head>
        <title>Video editor</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoCreator />
    </>
  );
};

export default Home;
