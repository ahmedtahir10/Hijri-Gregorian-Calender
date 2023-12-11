import { useState } from "react";
import { convertDataToCalendarProps, fetchData } from "utils";
import { Calendar } from "antd";

const HijriCalendar = () => {
  const [state, setState] = useState([]);
  const calendarProps = convertDataToCalendarProps(state);

  const onDateChange = async (obj) => {
    const month = obj.format("MM");
    const year = obj.format("YYYY");

    const result = await fetchData({ month, year });
    setState(result);
  };

  return (
    <div
      style={{
        paddingRight: 30,
        paddingLeft: 30,
      }}
    >
      <Calendar onChange={onDateChange} {...calendarProps} />
    </div>
  );
};

export default HijriCalendar;
