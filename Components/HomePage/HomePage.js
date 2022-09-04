import css from "./HomePage.module.scss";
import Image from "next/image";
import OpeningHours from "../OpeningHours/OpeningHours";

function HomePage() {
  return (
    <div className={css.mainContainer}>
      <div className={css.subContainer}>
        <div className={css.shopImage}>
          <Image
            src={"/pics/maxime-bouffard-SQ0-gKh5Vyk-unsplash.jpg"}
            alt={""}
            layout={"fill"}
            priority
            className={css.pic}
          />
        </div>
        <OpeningHours />
        <div className={css.imgAndAddress}>
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
