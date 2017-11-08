const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const port = process.env.PORT || 8008;
app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/public/views`);
app.use('/scripts', express.static(path.join(__dirname + '/public/js/jquery')));
app.use('/styles', express.static(path.join(__dirname, '/public/css/')));
app.use('/controls', express.static(path.join(__dirname, '/public/js/controllers')));
app.use('/img', express.static(path.join(__dirname, '/public/imag/')));
app.use('/fonts', express.static(path.join(__dirname, '/public/fonts/')));
app.engine('html', require('ejs').renderFile);
require('./routes.js')(app);
app.use((err, req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.2.154:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
http.listen(port);
process.on('uncaughtException', (err) => {
    console.log(err.message);
    console.error(err.stack);
    process.exit(1);
});
module.exports = app;
