import Head from "next/head";
import styles from "@/styles/initiate.module.css";
import { Button } from "@/components";
import { useRouter } from "next/router";
import Next from "@/assets/icons/arrow_right.svg";

export default function Initiate() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>QuickCV | Initiate</title>
      </Head>
      <main className={styles.initiateWrapper}>
        <h2 className={styles.initateFunFactTitle}>
          First Impressions Matter!
        </h2>
        <p className={styles.initateFunFact}>
          Recruiters typically spend only 6 seconds scanning a resume before
          deciding if a candidate is worth considering. A well-structured,
          appealing resume can make you stand out from the crowd in those
          crucial few seconds.
        </p>
        <div className={styles.initateActions}>
          <Next
            className={styles.initateActionIcon}
            onClick={() => router.push("/create/personalInfo")}
          />
        </div>
      </main>
    </>
  );
}
