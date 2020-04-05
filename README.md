# quick-local-ip-stzhang

quick-local-ip-stzhang is a utility module which provides straight-forward access to local network addresses. it provides 2 functions to get local ip addresses. What's more, it's simple to manually strip off all virtual network cards.

## Installation

    npm install --save quick-local-ip-stzhang

- If System is connected to multiple internet connections like wifi and ethernet and usb internet, following methods will return any active internet address in string format.
- If System is connected with one internet connection, methods will return ip address in string format.
- If system is not connected with internet default local address will be returned by all methods.
- These method will never return null or undefined.

## Quick Examples

    var myIp = require('quick-local-ip-stzhang');

### getting ip4 network address of local system

    myIp.getLocalIP4({
        excludes: [ // There're all names of excluded virtual network cards.
            'VMware Network Adapter',
            'Pseudo-Interface'
        ]
    });

### getting ip6 network address of local system

    ```javascript
    myIp.getLocalIP6({
        excludes: [ // There're all names of excluded virtual network cards.
            'VMware Network Adapter',
            'Pseudo-Interface'
        ]
    });
    ```
