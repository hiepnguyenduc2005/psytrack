import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();

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

  const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div style={{ width: 280, userSelect: 'none', fontFamily: 'sans-serif' }}>
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
        {calendarDays.map((day, idx) => (
          <div
            key={idx}
            style={{
              height: 30,
              lineHeight: '30px',
              textAlign: 'center',
              borderRadius: 4,
              backgroundColor: day ? '#f0f0f0' : 'transparent',
              color: day ? '#000' : 'transparent',
              cursor: day ? 'pointer' : 'default',
              userSelect: 'none',
            }}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
