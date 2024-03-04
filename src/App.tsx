import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Home from './views/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScanDocument from "./views/scandocument/scandocument";
import ScanResults from "./components/scanresults/ScanResults";
import SettingsView from "./views/settings/settings";
import Scour from "./views/scour/scour";

function App() {

  return (
    <BrowserRouter>
      <div className="appbody">
      <Sidebar />
      <div className="main">
        <Header />
        <Routes path="/" elament={<Home/>}>
          <Route index element={<Home/>}/>
          <Route path="add" element={<ScanDocument/>}/>
          <Route path="scanresults/:jobid"
                 element={<ScanResults />}/>
          <Route path="settings" element={<SettingsView/>}/>
          <Route path="settings/scour" element={<Scour/>}/>
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
