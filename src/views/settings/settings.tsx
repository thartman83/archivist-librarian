import './settings.css';

import ServiceCard from "../../components/servicecard/servicecard";
import services from '../../globals/services';


const SettingsView = () => {
  return (
    <div className="settings-page">
      {
        services.map( (service) => {
          return <ServiceCard key={service.serviceName}
                              serviceName={service?.serviceName}
                              url={service?.url}
                              docsUrl={service?.docsUrl}
                 description={service?.description}/>;
        })
      }
    </div>
  );
};

export default SettingsView;
