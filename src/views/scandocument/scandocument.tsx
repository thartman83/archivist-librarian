import "./scandocument.css";
import { useEffect, useState } from "react";
import ScannerOption from "../../components/scanneroption/ScannerOption";

type ScannerInfo = {
  device_model: string,
  device_name: string,
  device_status: number,
  device_type: string,
  device_vendor: string
};

const ScanDocument = () => {
  const getScannersUrl = 'http://localhost:8080/service/devices';
  const [scanners, setScanners ] = useState<[ScannerInfo]>([]);
  const [currentScanner, setCurrentScanner] = useState("");
  const [scannerSettings, setScannerSettings] = useState([]);


  const getScannerOptionsUrl =
        (scanner: string) => `http://localhost:8080/devices/${scanner}/options`;

  //const [results, setResults] = useState(None);

  useEffect(() => {
    fetch(getScannersUrl).then( resp => {
      return resp.json();
    }).then((data) => {
      setScanners(data);
    });
  }, []);

  useEffect(() => {
    if(currentScanner === "")
      return;

    fetch(getScannerOptionsUrl(currentScanner)).then (resp => {
      return resp.json();
    }).then( data => {
      setScannerSettings(data);
    });
  }, [currentScanner]);

  return (
    <>
      <div className="scanner-device">
        <label className="input-label">Available Scanners</label>
        <div className="input-group">
          <select onChange={ e => setCurrentScanner(e.target.value) }>
            <option className="select-placeholder"
                    value="Select a scanner">Select a scanner</option>
            {
              scanners.map((scanner) => {
                return <option key={scanner.device_name+"opt"}
                               value={scanner.device_name}>{scanner.device_name}
                       </option>;
              })
            }
          </select>
        </div>

        <div className="scanner-options">
          <label className="input-label">Scanner Options</label>
            {
              scannerSettings.map((option) => {
                return <ScannerOption key={option.name+"group"} optionData={option} />;
              })
            }
        </div>
      </div>
    </>
  );
};

export default ScanDocument;
