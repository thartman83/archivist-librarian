import "./scandocument.css";
import { useEffect, useState } from "react";
import ScannerOption from "../../components/scanneroption/ScannerOption";
import ScanResults from "../../components/scanresults/ScanResults";

type ScannerInfo = {
  device_model: string,
  device_name: string,
  device_status: number,
  device_type: string,
  device_vendor: string
};

const ScanDocument = () => {
  const getScannersUrl = 'http://localhost:8080/service/devices';
  const [scanners, setScanners] = useState<[ScannerInfo]>([]);
  const [currentScanner, setCurrentScanner] = useState("");
  const [scannerSettings, setScannerSettings] = useState([]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [currentScanJob, setCurrentScanJob] = useState(null);


  const getScannerOptionsUrl =
        (scanner: string) => `http://localhost:8080/devices/${scanner}/options`;

  const scanUrl =
        (scanner: string) => `http://localhost:8080/devices/${scanner}/scan`;

  //const [results, setResults] = useState(None);

  useEffect(() => {
    fetch(getScannersUrl).then(resp => {
      return resp.json();
    }).then((data) => {
      setScanners(data);
    });
  }, []);

  useEffect(() => {
    if (currentScanner === "")
      return;

    fetch(getScannerOptionsUrl(currentScanner)).then(resp => {
      return resp.json();
    }).then(data => {
      setScannerSettings(data);
    });
  }, [currentScanner]);

  const startScan = () => {
    setIsScanning(true);

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };

    fetch(scanUrl(currentScanner), requestOptions).then(resp => {
      return resp.json();
    }).then(data => {
      setCurrentScanJob(data);
    });

  };

  return (
    <div className="scan-document">
      <div className="scanner-device">
        <label className="input-label">Available Scanners</label>
        <div className="input-group">
          <select onChange={e => setCurrentScanner(e.target.value)}>
            <option className="select-placeholder"
              value="Select a scanner">Select a scanner</option>
            {
              scanners.map((scanner) => {
                return <option key={scanner.device_name + "opt"}
                  value={scanner.device_name}>{scanner.device_name}
                </option>;
              })
            }
          </select>
        </div>
        {
          currentScanner && <>
          <div className="scanner-options">
            <label className="input-label">Scanner Options</label>
            {
              scannerSettings.map((option) => {
                return <ScannerOption key={option.name + "group"}
                  optionData={option} />;
              })
            }
          </div>
          <div className="button-bar">
            <button className={"btn" + (isScanning ? " scanning": "")}
                    disabled={isScanning}
                    onClick={startScan}>Scan</button>
          </div>
        </>
        }
      </div>
      {
        isScanning && <ScanResults currentScanner={currentScanner}
                                   job_number={currentScanJob?.job_number}/>
      }

    </div>
  );
};

export default ScanDocument;
