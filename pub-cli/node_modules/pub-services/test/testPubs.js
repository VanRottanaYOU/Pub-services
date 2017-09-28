var assert = require('assert'); 
var pubservices = require('../services/pubs-services');

describe('Array', function () {
    describe('TestFindAll()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(pubservices.listerAll(), " Arawak La fin du monde"); 
        });
    });
    describe('TestFindAllOuverts()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(pubservices.listerAllOuverts(), " Arawak"); 
        });
    });
});

