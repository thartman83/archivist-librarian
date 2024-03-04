const services = [
  {
    serviceName: 'scour',
    url: 'http://localhost:8080',
    docsUrl: 'http://localhost:8080/docs',
    statusEndpoint: '/service',
    description: "Scanning microservice",
    icon: 'fas fa-print'
  },
  {
    serviceName: 'stacks',
    url: 'http://localhost:8321',
    description: 'Document storage microservice'
  }

];

export default services;
