import './ScanResults.css';
import Data from "./PageData";
import ScanPage from "../scanpage/scanpage";

const ScanResults = () => {
  return (
    <div className="scan-results">
      {
        Data.pages.map((page, idx) => {
          return (<ScanPage key={idx+"page"} pageData={page} />);
        })
      }
    </div>
  );
};

export default ScanResults;
