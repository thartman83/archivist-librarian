import "./scour.css";
import services from '../../globals/services';
import ScannerInfo from "../../models/ScannerInfo";
import {useEffect, useState } from "react";

const Scour = () => {
  const baseUrl = services.find( e => e?.serviceName === 'scour')?.serviceUrl;
  const getScannerUrl = baseUrl + "/service/devices";
  const refreshScannerUrl = baseUrl + "/service/refresh_devices";
  const [scanners, setScanners] = useState<ScannerInfo[]>([]);;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(getScannerUrl);
    fetch(getScannerUrl).then(resp => {
      return resp.json();
    }).then( (data) => {
      setScanners(data);
    });
  },[]);

  const refreshScanners = () => {
    setIsLoading(true);

    fetch(refreshScannerUrl).then( resp => {
      return resp.json();
    }).then( (data) => {
      setScanners(data);
      setIsLoading(false);
    });

  };

  return <div className="d-flex">
           <div className="card scanners-card">
             <h2>Available Scanners
               <button className="card-button" onClick={refreshScanners}>
                 <i className="fas fa-refresh" />
               </button>
             </h2>
             {
               isLoading ? <div className="loader-wrapper"><div className="loader"/></div> :
                 scanners.length === 0 ? <div className="no-scanners">No Scanners found</div>
                 : scanners.map( (e) => e.device_name)
             }
           </div>
         </div>;
};

export default Scour;
