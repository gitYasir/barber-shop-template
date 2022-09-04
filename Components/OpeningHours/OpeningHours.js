import css from "./OpeningHours.module.scss";

function OpeningHours() {
  const date = new Date();
  const weekday = [
    "Sunday",
    "day",
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
            <tr>
              <th>Monday</th>
              <td>10AM-6PM</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>10AM-6PM</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>10AM-6PM</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>10AM-6PM</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>10AM-6PM</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>12AM-8PM</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>12AM-6PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OpeningHours;
