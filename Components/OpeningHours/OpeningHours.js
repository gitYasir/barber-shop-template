import css from "./OpeningHours.module.scss";

function OpeningHours() {
  const date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[date.getDay()];

  return (
    <div className={css.mainContainer}>
      <div className={css.subContainer}>
        <div className={css.header}>
          <h3>{day}</h3>
          <h1>Opening Hours</h1>
        </div>
        <table>
          <tbody>
            {day === "Monday" ? (
              <tr className={css.curDay}>
                <th>Monday</th>
                <td>10AM-6PM</td>
              </tr>
            ) : (
              <tr>
                <th>Monday</th>
                <td>10AM-6PM</td>
              </tr>
            )}
            {day === "Tuesday" ? (
              <tr className={css.curDay}>
                <th>Tuesday</th>
                <td>10AM-6PM</td>
              </tr>
            ) : (
              <tr>
                <th>Tuesday</th>
                <td>10AM-6PM</td>
              </tr>
            )}
            {day === "Wednesday" ? (
              <tr className={css.curDay}>
                <th>Wednesday</th>
                <td>10AM-6PM</td>
              </tr>
            ) : (
              <tr>
                <th>Wednesday</th>
                <td>10AM-6PM</td>
              </tr>
            )}
            {day === "Thursday" ? (
              <tr className={css.curDay}>
                <th>Thursday</th>
                <td>10AM-6PM</td>
              </tr>
            ) : (
              <tr>
                <th>Thursday</th>
                <td>10AM-6PM</td>
              </tr>
            )}
            {day === "Friday" ? (
              <tr className={css.curDay}>
                <th>Friday</th>
                <td>10AM-6PM</td>
              </tr>
            ) : (
              <tr>
                <th>Friday</th>
                <td>10AM-6PM</td>
              </tr>
            )}
            {day === "Saturday" ? (
              <tr className={css.curDay}>
                <th>Saturday</th>
                <td>10AM-6PM</td>
              </tr>
            ) : (
              <tr>
                <th>Saturday</th>
                <td>12AM-6PM</td>
              </tr>
            )}
            {day === "Sunday" ? (
              <tr className={css.curDay}>
                <th>Sunday</th>
                <td>CLOSED</td>
              </tr>
            ) : (
              <tr>
                <th>Sunday</th>
                <td>CLOSED</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OpeningHours;
