
const path = require('path')
const winston = require('winston')
const moment = require('moment')

module.exports = () => {
    winston.emitErrs = true
    winston.exitOnError = false

    winston.remove(winston.transports.Console)

    winston.add(winston.transports.Console, {
        level: 'debug',
        handleExceptions: true,
        humanReadableUnhandledException: true,
        json: false,
        colorize: true,
        timestamp() {
            return moment().format('YYYY-MM-DD HH:mm:ss')
        },
    })

    winston.add(winston.transports.File, {
        level: 'info',
        filename: path.join(__dirname, '..', 'logs', 'app.log'),
        handleExceptions: true,
        humanReadableUnhandledException: true,
        json: false,
        maxsize: 10242880, // ~10MB
        maxFiles: 1,
        colorize: false,
        timestamp() {
            return moment().format('YYYY-MM-DD HH:mm:ss')
        },
    })
}
