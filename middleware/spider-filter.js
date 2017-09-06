// 过滤爬虫
var spiderFilter = function(ctx, next) {
    var userAgent = ctx.request.headers['user-agent'];

    var isSpider = false;

    if (userAgent == undefined ||userAgent == ""){
        isSpider = true;
    } else if (userAgent.indexOf('Googlebot') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('Baiduspider') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('Yahoo! Slurp') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('msnbot') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('Sosospider') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('YodaoBot') != -1 || userAgent.indexOf('OutfoxBot') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('Sogou web spider') != -1 || userAgent.indexOf('Sogou Orion spider') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('fast-webcrawler') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('Gaisbot') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('ia_archiver') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('altavista') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('lycos_spider') != -1) {
        isSpider = true;
    } else if (userAgent.indexOf('Inktomi slurp') != -1) {
        isSpider = true;
    }
    if (isSpider === true) {
        ctx.body = {
          code: 1,
          msg: `user-agent判定为爬虫${userAgent}`
        };
        return;
    }
    next();
};

module.exports = spiderFilter;