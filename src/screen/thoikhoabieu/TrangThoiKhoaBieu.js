import React from "react";
import "./ThoiKhoaBieu.css";
import ThoiKhoaBieu from "./ThoiKhoaBieu";

function TrangThoiKhoaBieu() {
  const [action, setAction] = React.useState("");
  const handle = (action) => {
    setAction(action);
  }

  return (
    <div className="body" style={{display:"block", position:"static"}}>
      <h1>Thời khóa biểu</h1>
        <tr  style={{width:"100%", textAlign:"end"}}>
          <button className="btnTKB" 
          style={{width:"max-content", margin:"2px"}}
          onClick={() => handle("prev")}
          >Tuần trước</button>
          <button className="btnTKB" 
          style={{width:"max-content", margin:"2px"}}
          onClick={() => handle("next")}
          >Tuần tiếp</button>
        </tr>
        <ThoiKhoaBieu action={action} ></ThoiKhoaBieu>
    </div>
  );
}

export default TrangThoiKhoaBieu;
