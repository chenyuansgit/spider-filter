const Koa = require('koa');
const app = new Koa();
const config = require('./config/config.js');
const BlockLog = require('./common/log/blocklog.js');
const logger = require('./common/log/logger.js');
const middlewares = require('./middleware/index.js');

//const apiRouter = require('./api/apiRouter.js');
//const parse = require('co-body');

// 增加日志组建
app.use(async (ctx, next) => {
    var urls = ctx.url.split('/');
    var logfile = urls.join('.').substr(1) || 'default';
    // 创建日志对象
    ctx.logs = new BlockLog(logfile);
    // 加入日志队列
    ctx.logs.push('reqParams', ctx.url, JSON.stringify(ctx.params || {}));
    next();
});

// 中间件过滤
for (var i = 0; i < middlewares.length; i++) {
    app.use(middlewares[i]);
}

//api开头的全部router
//apiRouter(app);

// 过滤成功
app.use(async (ctx, next) => {
    ctx.logs.end('testEnd');
    ctx.body = {
        code: 0,
        msg: "通过"
    }
});


app.listen(config['port']);
logger.info('server start at', config['port']);


