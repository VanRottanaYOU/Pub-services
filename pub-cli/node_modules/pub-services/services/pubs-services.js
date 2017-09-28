var moment = require('moment');
const _ = require('lodash');

var listePubs = require('../mocks/pubs');
var results1="";
var results2="";

function listerAll() {
    /*for (var i = 0; i<listePubs.length;i++){
        console.log(listePubs[i].name);
    }*/
    _.find(listePubs, function (o) { 
        results1 = results1 + " "+ o.name;
    });
    return results1;
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
            results2 = results2 + " "+ o.name;
        }
    });
    return results2;
}
//o.openDays == moment().format('dddd') ? console.log(o.name) : console.log("aucun pub ouvert")

module.exports = {
    listerAll: listerAll,
    listerAllOuverts: listerAllOuverts
};
