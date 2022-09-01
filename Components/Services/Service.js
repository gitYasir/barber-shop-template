import css from "./Services.module.scss";
import Image from "next/image";

function Service({ pic, alt, info, price }) {
  return (
    <div className={css.serviceContainer}>
      <div className={css.picArea}>
        <Image
          src={pic}
          alt={alt}
          height={140}
          width={140}
          className={css.pic}
        />
      </div>
      <div className={css.info}>
        <p>{info}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Service;
