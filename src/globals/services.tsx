const services = [
  {
    serviceName: 'scour',
    serviceUrl: 'http://localhost:8080',
    docsUrl: 'http://localhost:8080/docs',
    statusEndpoint: '/service',
    description: "Scanning microservice",
    icon: 'fas fa-print'
  },
  {
    serviceName: 'stacks',
    serviceUrl: 'http://localhost:8321',
    description: 'Document storage microservice'
  }

];

export default services;
