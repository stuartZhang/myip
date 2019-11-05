/**
 * Created by alokguha on 25/09/15.
 */
const network = require('./index');
const assert = require('assert');
describe('MyIp Tests', () => {
    // Undefined Test
    describe('Undefined Test', () => {
        it('variable network should not be undefined', () => {
            assert.notEqual(network, undefined);
        });
        it('variable network.getLocalIP4 should not be undefined', () => {
            const ip = network.getLocalIP4({
                excludes: [
                    'VMware Network Adapter',
                    'Pseudo-Interface'
                ]
            });
            console.log(ip);
            assert.notEqual(ip, undefined);
        });
        it('variable network.getLocalIP6 should not be undefined', () => {
            const ip = network.getLocalIP6({
                excludes: [
                    'VMware Network Adapter',
                    'Pseudo-Interface'
                ]
            });
            console.log(ip);
            assert.notEqual(ip, undefined);
        });
    });
});
