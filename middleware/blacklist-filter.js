var blacklist = require("../config/blacklist.js");

module.exports =  async (ctx, next) => {
    // 获取请求的ip信息
    var ip = ctx.req.headers["x-real-ip"] || ctx.req.headers["x-forwarded-for"];

    // 判断ip是否在黑名单中
    var index = blacklist.indexOf(ip);
    if (index != -1) {
        //logger.error(`client ip is in blacklist(${ip})`);
        ctx.body = {
            code: 1,
            msg: `该ip在黑名单中${ip}`
        };
        return;
    }
    await next();
};