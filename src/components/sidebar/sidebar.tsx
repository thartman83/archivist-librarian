import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./sidebar.css";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const settingsList = [
    {
      name: 'home',
      path: '/',
      icon: 'fas fa-home'
    },
    {
      name: 'search',
      path: '/search',
      icon: 'fas fa-search'
    },
    {
      name: 'add',
      path: '/add',
      icon: 'fas fa-file'
    },
    {
      name: 'stats',
      path: '/stats',
      icon: 'fas fa-chart-column'
    },
    {
      name: 'settings',
      path: '/settings',
      icon: 'fas fa-gear'
    }
  ];

  return (
      <div className="sidebar">
        <ul>
          {settingsList.map( (setting) => {
            return <li key={'setting-' + setting.name }>
                     <a href={setting.path}
                       className={(setting.path == path ? 'active' : '')
                                  + " sidebar-btn"}>
                       <i className={setting.icon}/>
                     </a>
                   </li>;
          })}
        </ul>
      </div>
  );
};

export default Sidebar;
