import "./scanpage.css";
import { useEffect, useState } from "react";

const ScanPage = ({pageData, scanning}) => {
  //const raw = "data:image/jpg;base64," + atob(pageData);

/*      <img src={raw} /> */

  return (
    <div className={"scanpage" + (scanning ? " loader" : "")}>
      {
        pageData && <img src={"data:image/jpg;base64," + atob(pageData)}/>
//        loading && <span className="loader"/>
      }
    </div>
  );
};

export default ScanPage;
