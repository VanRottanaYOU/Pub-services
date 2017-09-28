var pubService = require('./services/pubs-services');

console.log(pubService.listerAll());
console.log(pubService.listerAllOuverts());

module.exports = {
    services: {
        pubService: pubService
    }
}

