export const convertDataToCalendarProps = (data) => {
  const calendarData = {};

  data.forEach((entry) => {
    let startDate = new Date(entry.gregorianStartDate);
    let endDate = new Date(entry.gregorianEndDate);

    startDate.setDate(startDate.getDate());
    endDate.setDate(endDate.getDate());

    let t = 0;
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const dateString = date.toISOString().split("T")[0];
      calendarData[dateString] = ` ${entry.month} ${++t}`;
    }
  });

  return {
    dateCellRender: (date) => {
      const dateString = date.toISOString().split("T")[0];
      return (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            "text-align": "center",
            padding: "8px",
          }}
        >
          {calendarData[dateString]}
        </div>
      );
    },
  };
};
