var servicePub = require('pub-services');

function getListPub(){
    servicePub.services.pubService.listerAll();
    servicePub.services.pubService.listerAllOuverts();
}

module.exports = {
    getListPub : getListPub
};