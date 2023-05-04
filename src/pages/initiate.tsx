import Head from "next/head";
import Link from "next/link";

export default function Initiate() {
  return (
    <>
      <Head>
        <title>QuickCV | Initiate</title>
      </Head>
      <main>
        <h1>Initiate page</h1>
        <ol>
          <li>
            <Link href="create/personalInfo">Personal Info</Link>
          </li>
          <li>
            <Link href="create/summary">Summary</Link>
          </li>
        </ol>
      </main>
    </>
  );
}
