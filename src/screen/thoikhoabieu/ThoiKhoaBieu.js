import React, { useState, useEffect } from "react"; // Import useState hook

function ThoiKhoaBieu({ action }) {
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function getWeekDates(startDate) {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      dates.push(formatDate(currentDate));
    }
    return dates;
  }
  const daysOfWeek = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ nhật",
  ];

  // Ngày bắt đầu tuần
  const [startDate, setStartDate] = useState(new Date(2024, 4, 20)); // Định nghĩa state và setter cho startDate
  const dates = getWeekDates(startDate);

  useEffect(() => {
    if (action === "prev") {
      setStartDate(new Date(startDate.getTime() - 7 * 24 * 60 * 60 * 1000)); // Giảm 7 ngày
    } else if (action === "next") {
      setStartDate(new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000)); // Tăng 7 ngày
    } else {
      // Nếu không phải tăng hoặc giảm, reset về tuần hiện tại
      setStartDate(new Date(2024, 4, 20)); // Ngày bắt đầu tuần hiện tại
    }
  }, [action, startDate]);

  return (
    <div className="body">
      <table
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          position: "relative",
          top: "-150px",
          flexDirection: "column",
        }}
      >
        <thead>
          <tr className="trTHTKB" style={{ width: "100%" }}>
            <th>Buổi học</th>
            {daysOfWeek.map((day, index) => (
              <th key={day}>
                {day}
                <br />
                {dates[index]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="trTHTKB">
            <td>Buổi sáng</td>
            {daysOfWeek.map((day) => (
              <td key={`morning-${day}`}></td>
            ))}
          </tr>
          <tr className="trTHTKB">
            <td>Buổi trưa</td>
            {daysOfWeek.map((day) => (
              <td key={`afternoon-${day}`}></td>
            ))}
          </tr>
          <tr className="trTHTKB">
            <td>Buổi tối</td>
            {daysOfWeek.map((day) => (
              <td key={`evening-${day}`}></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThoiKhoaBieu;
