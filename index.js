/**
 * Created by Tristan on 2016/12/7.
 */
const modelInit = require('./lib/LogModel')

exports.info = function (content, type, who, ip) {
    modelInit.saveLog(null, type, content, who, ip);
}
exports.warn = function (content, type, who, ip) {
    modelInit.saveLog('warn', type, content, who, ip);
}
exports.debug = function (content, type, who, ip) {
    modelInit.saveLog('debug', type, content, who, ip);
}
exports.error = function (content, type, who, ip) {
    modelInit.saveLog('error', type, content, who, ip);
}






