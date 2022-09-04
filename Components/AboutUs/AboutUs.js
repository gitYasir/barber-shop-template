import css from "./AboutUs.module.scss";
import Head from "next/head";
import Image from "next/image";

function AboutUs() {
  return (
    <div className={css.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/icons/barber-pole-svgrepo-com.svg" />
      </Head>
      <div className={css.images}>
        <div className={css.picContainer}>
          <Image
            src={"/pics/maxime-bouffard-SQ0-gKh5Vyk-unsplash.jpg"}
            alt={""}
            height={400}
            width={300}
            priority
            className={css.pic}
          />
        </div>
        <div className={css.picContainer}>
          <Image
            src={"/pics/inside.jpg"}
            alt={""}
            height={400}
            width={300}
            priority
            className={css.pic}
          />
        </div>
      </div>
      <div className={css.aboutSection}>
        <p>
          {`If you're looking for that luxurious experience, well-groomed haircut, or just a shape up, This Barber Shop is the place to visit.
          Located on 234 Barber Rd, Barbersville, B42 8ER, and offering a wide range of professional hair styles with over 10 years of experience,
          you will experience the attention to detail like no other. What's more, these services are also offered via house calls, saving you 
          the travel time and enjoying the convenience of being pampered in your own home.`}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
