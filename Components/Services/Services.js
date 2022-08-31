import data from "./data";
import Service from "./Service";
import css from "./Services.module.scss";

function Services() {
  return (
    <div className={css.container}>
      <div className={css.subContainer}>
        {data.map((item, i) => {
          return (
            <Service
              pic={item.pic}
              alt={item.alt}
              info={item.info}
              price={item.price}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
