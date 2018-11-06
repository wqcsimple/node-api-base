var date = require('locutus/php/datetime/date');
var Config = require('../config');
var winston = require('winston');
const {format} = require('winston');
const {combine, timestamp, printf} = format;

var logger;

const myFormat = printf(info => {
    return `${date('Y-m-d H:i:s O', new Date().getTime() / 1000)} [${info.level}]: ${JSON.stringify(info)}`;
});

function initLogger() {
    if (!logger)
    {
         logger = winston.createLogger({
             level: Config.LOG_LEVEL,
             format: format.combine(
                 winston.format.colorize(),
                 myFormat
             ),
             transports: [
                 new winston.transports.Console(),
                 // new winston.transports.File({ filename: 'log/combined.log' })
             ]
         });
    }
}

function log(level, arguments)
{
    // args.unshift(date('Y-m-d H:i:s O', new Date().getTime() / 1000));
    // console.log.apply(null, args);

    initLogger();
    // arguments.unshift(level);
    // logger.log.apply(logger, arguments);
    logger.log(level, arguments)
}

function debug(){
    var args = Array.prototype.slice.call(arguments);
    log('debug', args)
}

function info(){
    var args = Array.prototype.slice.call(arguments);
    log('info', args)
}

function warn(){
    var args = Array.prototype.slice.call(arguments);
    log('warn', args)
}

function error(){
    var args = Array.prototype.slice.call(arguments);
    log('error', args)
}

function trace(){
    var args = Array.prototype.slice.call(arguments);
    log('silly', args)
}

module.exports = {
    log: log,

    trace: trace,
    t: trace,

    debug: debug,
    d: debug,

    info: info,
    i: info,

    warn: warn,
    w: warn,

    error: error,
    e: error,


};
