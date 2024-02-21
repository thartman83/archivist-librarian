import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./sidebar.css";

const Sidebar = () => {
  return (
      <div className="sidebar">
        <ul>
          <li><button className="sidebar-btn"><i className="fas fa-home"/></button></li>
          <li><button className="sidebar-btn"><i className="fas fa-search"/></button></li>
          <li><button className="sidebar-btn"><i className="fas fa-file"/></button></li>
          <li><button className="sidebar-btn"><i className="fas fa-chart-column"/></button></li>
          <li><button className="sidebar-btn"><i className="fas fa-gear"/></button></li>
        </ul>
      </div>
  );
};

export default Sidebar;
