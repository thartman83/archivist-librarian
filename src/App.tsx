//import ScanDocument from "./views/scandocument/scandocument";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import './App.css';

function App() {

  return (
    <div className="appbody">
      <Sidebar />
      <div className="main">
        <Header />
      </div>
    </div>
  );
}

export default App
