import { useState } from "react";
import data from "./data";
import Modal from "./Modal";
import Service from "./Service";
import css from "./Services.module.scss";
import Head from "next/head";

function Services() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  function changeModal() {
    setModal(!modal);
  }

  function setDataForModal(item) {
    setModalData(item);
  }
  return (
    <div className={css.container}>
      <Head>
        <title>Services and Prices</title>
        <meta name="description" content="Services and Prices" />
        <link rel="icon" href="/icons/barber-pole-svgrepo-com.svg" />
      </Head>
      <div className={css.subContainer}>
        {data.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                changeModal();
                setDataForModal(item);
              }}
            >
              <Service
                pic={item.pic}
                alt={item.alt}
                info={item.info}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
      {modal && <Modal onClick={changeModal} data={modalData} />}
    </div>
  );
}

export default Services;
