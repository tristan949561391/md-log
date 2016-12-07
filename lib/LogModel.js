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
        userId: String,
        logContent: String,
        logType: {
            type: String
        },
        time: {
            type: Date,
            default: Date.now(),
        },
        level: {
            type: String,
            default: "info"
        }
    }
)
LogModel = mongoose.model("md_logs", LogSchema)

const saveLog = (level, type, logContent, who) => {
    let log = new LogModel(
        {
            userId: who,
            logContent: logContent,
            level: level || "info",
            logType: type
        }
    )
    log.save((err, data) => {
        if (err) {
            console.warn(err.message)
            return
        }
        console.log(`${data.logType}:${data.time}:${data.level}:${data.logContent}`)
    })
}
module.exports.saveLog = saveLog