import React, { useState } from "react";

function Archive({ months, selectMonth, selectYear }) {
  const [selected, setSelected] = useState("");
  const alias = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return (
    <div className="flex flex-col">
      {months.map((time) => (
        <div
          className={`cursor-pointer text-center text-xl font-['Alegreya'] ${
            selected == time.year + time.month ? "font-bold" : ""
          }`}
          onClick={() => {
            if (selected == time.year + time.month) {
              selectMonth(-1);
              selectYear(-1);
              setSelected("");
            } else {
              selectMonth(time.month);
              selectYear(time.year);
              setSelected(time.year + time.month);
            }
          }}
          key={time.year + time.month}
        >
          {alias[time.month]} - {time.year}
        </div>
      ))}
    </div>
  );
}

export default Archive;
