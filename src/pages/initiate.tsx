import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/initiate.module.css";

export default function Initiate() {
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
          <Link href="/create/personalInfo">
            take the first step towards your dream job today!
          </Link>
        </div>
      </main>
    </>
  );
}
