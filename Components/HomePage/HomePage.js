import css from "./HomePage.module.scss";
import Image from "next/image";

function HomePage() {
  return (
    <div className={css.mainContainer}>
      <Image
        src={"/pics/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg"}
        alt={""}
        layout="fill"
        priority
        objectFit="cover"
      />
      <div className={css.subContainer}>
        <div className={css.imgAndAddress}>
          <div className={css.shopImage}>
            <Image
              src={"/pics/maxime-bouffard-SQ0-gKh5Vyk-unsplash.jpg"}
              alt={""}
              height={400}
              width={300}
              priority
              className={css.pic}
            />
          </div>
          <div className={css.address}>
            <address>
              234 Barber Rd <br />
              Barbersville <br />
              B42 8ER
            </address>
            <div className={css.directionCallBtn}>
              <a
                href="https://goo.gl/maps/r1nnDo8TFBpFJX9cA"
                target="_blank"
                rel="noreferrer"
              >
                <button>Directions</button>
              </a>
              <a href="tel:11111">
                <button>Call</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
