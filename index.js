/**
 * Created by alokguha on 25/09/15.
 */
'use strict'
var ni = require('os').networkInterfaces();
module.exports = {
    getIpAddresses({excludes = [], family}){
        var ipAddress = [];
        Object.keys(ni).filter(key => {
            return !excludes.some(exclude => {
                if (typeof exclude === 'string') {
                    return ~key.indexOf(exclude);    
                }
                if (exclude instanceof RegExp) {
                    return exclude.test(key);
                }
                return false;
            });
        }).forEach(key => {
            for(var index in ni[key]){
                if(ni[key][index].family === family && !ni[key][index].internal){
                    ipAddress.push(ni[key][index].address);
                }
            }
        });
        return ipAddress;
    },
    getLocalIP4({excludes = []}) {
        var ipAddress = module.exports.getIpAddresses({
            family: 'IPv4',
            excludes
        });
        if(ipAddress.length > 1){
            return ipAddress[Math.floor(Math.random() * ((ipAddress.length - 1) - 0 + 1)) + 0];
        }else if(ipAddress.length == 1){
            return ipAddress[0];
        }else{
            return '127.0.0.1';
        }
    },
    getLocalIP6({excludes = []}) {
        var ipAddress = module.exports.getIpAddresses({
            family: 'IPv6',
            excludes
        });
        if(ipAddress.length > 1){
            return ipAddress[Math.floor(Math.random() * ((ipAddress.length - 1) - 0 + 1)) + 0];
        }else if(ipAddress.length == 1){
            return ipAddress[0];
        }else{
            return 'fc00::/7';
        }
    }
};
