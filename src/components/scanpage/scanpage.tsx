import "./scanpage.css";

const ScanPage = ({pageData, scanning}) => {
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
