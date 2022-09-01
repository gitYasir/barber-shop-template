import Image from "next/image";
import css from "./Modal.module.scss";

function Modal({ onClick, data }) {
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <h1 onClick={onClick}>X</h1>
        <div className={css.picArea}>
          <Image
            src={data.pic}
            alt={data.alt}
            height={140}
            width={140}
            className={css.pic}
          />
        </div>
        <div className={css.info}>
          <p>{data.info}</p>
          <h3>{data.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Modal;
