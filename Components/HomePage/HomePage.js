import css from "./HomePage.module.scss";
import Image from "next/image";

function HomePage() {
  return (
    <div className={css.mainContainer}>
      {/* <div style={{ display: "none" }}> */}
      <Image
        src={"/pics/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg"}
        alt={""}
        layout="fill"
        priority
        objectFit="cover"
      />
      {/* </div> */}
      <div className={css.subContainer}>
        <a href="tel:11111">
          <button>Call</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
