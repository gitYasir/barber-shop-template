import css from "./Services.module.scss";
import Image from "next/image";

function Service({ pic, alt, info, price }) {
  function truncateText(text) {
    let infoText = "";
    if (text.length > 100) {
      infoText += text.substr(0, 100) + "...";
    }
    return infoText;
  }
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
        <p>{truncateText(info)}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Service;
