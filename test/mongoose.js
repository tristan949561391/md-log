/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moondust');
mongoose.connection.on('connect', function () {
    console.log('mongodb connect success')
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongoDb connnected')
});
let log=require('../index')

log.info('content','normal')






