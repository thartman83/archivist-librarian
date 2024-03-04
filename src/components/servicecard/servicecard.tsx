import './servicecard.css';

type ServiceInfo = {
  serviceName: string,
  serviceUrl: string,
  docsUrl: string,
  description: string
};

const ServiceCard = ({serviceName, serviceUrl,
                      docsUrl, description}: ServiceInfo) => {
  return (
    <div className="service-card">
      <h3>{serviceName}
        <a href="configure">
          <i className="service-configure fas fa-gear"/>
        </a>
      </h3>
      <p>
        {description}
      </p>
      <br/>
      <a href={docsUrl}>Swagger Docs</a>
      <br/>
      <a href={serviceUrl}>Service Url</a>
    </div>
  );
};

export default ServiceCard;
