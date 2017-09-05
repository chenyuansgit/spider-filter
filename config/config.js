var path = require('path');

//环境不同的配置
var envConf = {
    port: "3000",
    prod: {},
    beta: {},
    other: {}
};

module.exports = envConf;