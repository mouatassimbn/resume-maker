import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { LandingLayout } from "@/layouts/landing.layout";

export const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>QuickCV</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <h1>Welcome to QuickCV</h1>
        <div className={styles.homeActions}>
          <Button onClick={() => router.push("/initiate")}>Initiate</Button>
        </div> */}
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
