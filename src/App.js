// App.js
import React from 'react';
import { Calendar } from 'antd';
import { hijriDate } from 'hijridate';

const convertDataToCalendarProps = (data) => {
  const calendarData = {};

  data.forEach((entry) => {
    let startDate =  new Date(entry.gregorianStart);
    let endDate = new Date(entry.gregorianEnd);

    startDate.setDate(startDate.getDate() + 1)
    endDate.setDate(endDate.getDate() + 1)

    let t = 0
    for (let date = startDate  ; date <= endDate; date.setDate(date.getDate() + 1)) {
      const dateString = date.toISOString().split('T')[0];
      calendarData[dateString] =  `${entry.hijriMonth} -  ${entry.hijriMonthName} ${++t}` ;
    }
  });

  return {
    dateCellRender: (date) => {
      const dateString = date.toISOString().split('T')[0];
      return <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        "text-align": "center",
        padding: "8px", /* Adjust padding as needed */
        // "background-color": rgba(255, 255, 255, 1);

      }}>{calendarData[dateString]}</div>;
    },
  };
};


const HijriCalendar = ({ data }) => {
  const calendarProps = convertDataToCalendarProps(data);

  return (
    <div>
      <Calendar {...calendarProps} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hijri Calendar</h1>
      <HijriCalendar data={hijriDate} />
    </div>
  );
};

export default App;