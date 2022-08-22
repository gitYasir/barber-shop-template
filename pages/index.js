import Head from "next/head";
import NavBar from "../Components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barber Shop Name</title>
        <meta name="description" content="Best Barbers around" />
        <link rel="icon" href="/icons/barber-pole-svgrepo-com.svg" />
      </Head>
      <NavBar />
    </>
  );
}
