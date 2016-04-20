var Bleacon = require('bleacon');


var uuid = 'db9a9a4a106aca9340e22930d76789a3';
// var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)



Bleacon.startAdvertising(uuid, major, minor, measuredPower);
