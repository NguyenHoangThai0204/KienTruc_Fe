import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./TrangDiem.css";

function TrangDiem() {
  const [csvData, setCsvData] = useState([]); // State to hold parsed CSV data

  useEffect(() => {
    // Read CSV file on component mount
    Papa.parse("./FileMauDiem.csv", {
      header: true, // Enable header row parsing
      complete: (result) => {
        setCsvData(result.data); // Update state with parsed data
      },
    });
  }, []);

  return (
    <div className="body">
      <h1>Điểm môn học</h1>
      <table className="table">
        <thead>
          <tr>
            <th rowSpan="2">STT</th>
            <th rowSpan="2">Mã môn học</th>
            <th rowSpan="2">Tên môn học</th>
            <th colSpan="5">Điểm lí thuyết</th>
            <th colSpan="5">Điểm thực hành</th>
            <th rowSpan="2">Điểm GK</th>
            <th rowSpan="2">Điểm CK</th>
            <th rowSpan="2">Điểm tổng kết</th>
            <th rowSpan="2">Điểm 4</th>
            <th rowSpan="2">Điểm chữ</th>
            <th rowSpan="2">Xếp loại</th>
            <th rowSpan="2">Đạt</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index} className="trBodyDiem">
              <td>{index + 1}</td>
              <td>{row["Mã môn học"]}</td>
              <td>{row["Tên môn học"]}</td>
              <td>{row["Điểm lí thuyết 1"]}</td>
              <td>{row["Điểm lí thuyết 2"]}</td>
              <td>{row["Điểm lí thuyết 3"]}</td>
              <td>{row["Điểm lí thuyết 4"]}</td>
              <td>{row["Điểm lí thuyết 5"]}</td>
              <td>{row["Điểm thực hành 1"]}</td>
              <td>{row["Điểm thực hành 2"]}</td>
              <td>{row["Điểm thực hành 3"]}</td>
              <td>{row["Điểm thực hành 4"]}</td>
              <td>{row["Điểm thực hành 5"]}</td>
              <td>{row["Điểm GK"]}</td>
              <td>{row["Điểm CK"]}</td>
              <td>{row["Điểm tổng kết"]}</td>
              <td>{row["Điểm 4"]}</td>
              <td>{row["Điểm chữ"]}</td>
              <td>{row["Xếp loại"]}</td>
              <td>{row["Đạt"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrangDiem;
