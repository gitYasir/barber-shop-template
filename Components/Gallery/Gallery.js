import pics from "./galleryData";
import Image from "next/image";
import css from "./Gallery.module.scss";
import Head from "next/head";

function Gallery() {
  return (
    <div className={css.galleryContainer}>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Haircuts Gallery" />
        <link rel="icon" href="/icons/barber-pole-svgrepo-com.svg" />
      </Head>
      {pics.map((pic, i) => {
        return (
          <div key={pic} className={css.picArea}>
            <Image
              src={pic}
              alt={pic}
              height={200}
              width={200}
              className={css.picture}
            />
            <p>{i + 1}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
