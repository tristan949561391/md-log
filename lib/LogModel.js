/**
 * Created by Tristan on 2016/12/7.
 */
/**
 * Created by tc949 on 2016/10/14.
 */
let LogModel;
let LogSchema;
let mongoose = require('mongoose')
LogSchema = mongoose.Schema(
    {
        userId: {type: String, default: ''},
        logContent: String,
        logType: {
            type: String,
            default: 'normal'
        },
        time: {
            type: Date,
            default: Date.now(),
        },
        level: {
            type: String,
            default: "info"
        },
        ip: {
            type: String, default: ''
        }
    }
)
LogModel = mongoose.model("md_logs", LogSchema)

const saveLog = (level, type, logContent, who, ip) => {
    let log = new LogModel(
        {
            userId: who,
            logContent: logContent,
            level: level,
            logType: type,
            ip: ip
        }
    )
    log.save((err, data) => {
        if (process.ENV != 'PRO') console.log(`[${data.logType}:${data.time}:${data.level}]:>>${data.logContent}--(${data.ip}::${data.who})`);
    })
}
module.exports.saveLog = saveLog