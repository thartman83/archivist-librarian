import './ScanResults.css';
import Data from "./PageData.tsx~";
import ScanPage from "../scanpage/scanpage";
import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';

const ScanResults = ({currentScanner, job_number}) => {

  const scanJobUrl =
        (scanner: string, jobid: number) => `http://localhost:8080/devices/${scanner}/jobs/${jobid}`;

  const [isScanning, setIsScanning] = useState<bool>(true);
  const [pageData, setPageData] = useState(null);


  useInterval(async () => {
    console.log('Polling scan job...');
    fetch(scanJobUrl(currentScanner, job_number)).then(resp => {
      return resp.json();
    }).then(data => {
      if(data.status !== 0) {
        setIsScanning(false);
        setPageData(data.pages[0]);
      };
    });
  }, isScanning ? 3000 : null);

  return (
    <div className="scan-results">
      {
        /*pageData.pages.map((page, idx) => {
          return (<ScanPage key={idx+"page"} pageData={page} />);
          })*/
        <ScanPage scanning={isScanning} pageData={pageData}/>
      }
    </div>
  );
};

export default ScanResults;
