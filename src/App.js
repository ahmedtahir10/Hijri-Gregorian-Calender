import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment-hijri';
import { hijriDate } from 'hijridate';
const localizer = momentLocalizer(moment)

// Function to generate events for each date in a month
const  generateEventsForMonth = (month) => {
  const events = [];
  const startDate = new Date(month.gregorianStart);

  for (let day = 1; day <= month.daysInMonth; day++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (day - 1));
    
    const event = {
      title: `${month.hijriMonthName} - Day ${day}`,
      start: currentDate.toISOString(),
      end: currentDate.toISOString(), // You can customize the end time if needed
    };

    events.push(event);
  }
  return events;
}

const App = () => {

  const [year, setYear] = useState("2022")
  const [allEvents, setAllEvents] = useState([])

  const handleNavigate = (newDate, view, action) => {
    let  date  = moment(newDate)
    setYear(date.year())
  };

  useEffect(()=>{
    const allEvents = hijriDate
    .filter(({ gregorianStart }) => gregorianStart.includes(String(year)))
    .map((month) => generateEventsForMonth(month))
    .flat();

    setAllEvents(allEvents)

  },[year])

  return   
  <div style={{marginTop:50}}>
    <Calendar
      localizer={localizer}
      events={allEvents}
      startAccessor="start"
      endAccessor="end"
      views={['month']}
      onNavigate={handleNavigate}
      style={{ height: 500 }}
    />
</div>
};

export default App;
