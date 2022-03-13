import Head from "next/head";
import styles from "../styles/class.module.css";
import Link from "next/link"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className={styles.container404}>
        <Link href="/" className="bg-slate-100 text-lg p-3 rounded-lg drop-shadow-lg shadow-2xl">404 - Page Not Found</Link>
      </div>
    </>
  );
}
