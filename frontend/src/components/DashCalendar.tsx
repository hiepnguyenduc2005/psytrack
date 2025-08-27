import React, { useState } from 'react';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const prevMonth = () => {
    setDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setDate(new Date()); 
  };

  const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const completedDates = [
    "2025-08-02",
    "2025-08-08",
    "2025-08-11",
    "2025-08-23",
    "2025-08-27",
    "2025-08-31",
  ];

  const formatDate = (y: number, m: number, d: number) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  

  return (
    <div style={{ width: 280, userSelect: 'none', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: 0 }}>
        <button onClick={goToToday} style={{padding: '5px 12px', border: '1px solid #888888ff', borderRadius: 6}}>Today</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <button onClick={prevMonth}>&lt;</button>
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>{monthYear}</div>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 5, fontWeight: 'bold' }}>
        {weekdays.map(day => (
          <div key={day} style={{ textAlign: 'center' }}>
            {day}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {calendarDays.map((day, idx) => {
          const isCompleted =
            day &&
            completedDates.includes(formatDate(year, month, day));

          return (
            <div
              key={idx}
              style={{
                height: 30,
                lineHeight: '30px',
                textAlign: 'center',
                borderRadius: 4,
                backgroundColor: isCompleted ? "#218677ff" : day ? "#ffffffff" : "transparent",
                color: day ? (isCompleted ? "#fff" : "#000") : "transparent",
                fontWeight: isCompleted ? "bold" : "normal",
                cursor: day ? "pointer" : "default",
                userSelect: "none",
              }}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
