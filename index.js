/**
 * Created by Tristan on 2016/12/7.
 */
const modelInit = require('./lib/LogModel')

exports.info = function (content, type, who) {
    modelInit.saveLog(null, type, content, who);
}
exports.warn = function (content, type, who) {
    modelInit.saveLog('warn', type, content, who);
}
exports.debug = function (content, type, who) {
    modelInit.saveLog('debug', type, content, who);
}
exports.error = function (content, type, who) {
    modelInit.saveLog('error', type, content, who);
}






