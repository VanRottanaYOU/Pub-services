var moment = require('moment');
const _ = require('lodash');


var listePubs = require('../mocks/pubs');

function listerAll() {
    /*for (var i = 0; i<listePubs.length;i++){
        console.log(listePubs[i].name);
    }*/
    _.find(listePubs, function (o) { console.log(o.name) });
}

function listerAllOuverts() {
    /*for (var i = 0; i<listePubs.length;i++){
        for (var j = 0 ; j<listePubs[i].openDays.length;j++){
            if (moment().format('dddd') == listePubs[i].openDays[j])
                console.log(listePubs[i].name);
        }
    }*/
    _.find(listePubs, function (o) {
        /*_.find(o.openDays, function(i) { moment().format('dddd') ? console.log(i.name) : console.log("aucun pub ouvert")}
                );*/
        if ( _.includes(o.openDays, moment().format('dddd')))
        {
            console.log(o.name);
        }
    });
}
//o.openDays == moment().format('dddd') ? console.log(o.name) : console.log("aucun pub ouvert")

module.exports = {
    listerAll: listerAll,
    listerAllOuverts: listerAllOuverts
};
