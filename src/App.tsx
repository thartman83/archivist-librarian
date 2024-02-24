import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Home from './views/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScanDocument from "./views/scandocument/scandocument";
import ScanResults from "./components/scanresults/ScanResults";

function App() {

  return (
    <div className="appbody">
      <Sidebar />
      <div className="main">
        <Header />
        <BrowserRouter>
          <Routes path="/" elament={<Home/>}>
            <Route index element={<Home/>}/>
            <Route path="add" element={<ScanDocument/>}/>
            <Route path="scanresults/:jobid"
                   element={<ScanResults />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App
