import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./sidebar.css";

const Sidebar = () => {
  return (
      <div className="sidebar">
        <ul>
          <li><a className="sidebar-btn"><i className="fas fa-home"/></a></li>
          <li><a className="sidebar-btn"><i className="fas fa-search"/></a></li>
          <li><a href="add" className="sidebar-btn"><i className="fas fa-file"/></a></li>
          <li><a className="sidebar-btn"><i className="fas fa-chart-column"/></a></li>
          <li><a className="sidebar-btn"><i className="fas fa-gear"/></a></li>
        </ul>
      </div>
  );
};

export default Sidebar;
