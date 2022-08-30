import css from "./Services.module.scss";
import Image from "next/image";

function Service({ pic, alt, info, price }) {
  return (
    <div className={css.container}>
      <div className={css.pic}>
        <Image src={pic} alt={alt} height={100} width={100} />
      </div>
      <div className={css.info}>
        <p>{info}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Service;
