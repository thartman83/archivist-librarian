import "./scanpage.css";
import { useEffect, useState } from "react";

const ScanPage = ({pageData}) => {

  const loading = useState<bool>(false);
  const raw = "data:image/jpg;base64," + atob(pageData);

  return (
    <div className="scanpage">
      <img src={raw} />
    </div>
  );
};

export default ScanPage;
