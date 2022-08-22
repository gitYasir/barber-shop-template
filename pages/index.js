import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barber Shop Name</title>
        <meta name="description" content="Best Barbers around" />
        <link rel="icon" href="/icons/barber-pole-svgrepo-com.svg" />
      </Head>
    </div>
  );
}
