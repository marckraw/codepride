import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>codepride</title>
        <meta
          name="description"
          content="Marcin Krawczyk - Software Deveeloper, Based in Luzern, Switzerland"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>codepride</h1>

        <p className={styles.description}>Software development company.</p>
        <div className={styles.links}>
          <Link href="/mrck">
            <a className={styles.link}>by mrck</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
