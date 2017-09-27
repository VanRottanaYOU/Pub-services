var pubService = require('./services/pubs-services');

pubService.listerAll();
pubService.listerAllOuverts();

module.exports = {
    services: {
    pubService : pubService
    }
    }
