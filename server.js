const express = require('express');
require('dotenv').config();
const proxy = require('http-proxy-middleware');


const app = express();
const UI_SERVER_PORT = process.env.UI_SERVER_PORT || 8000;
const apiProxyTarget = 'http://localhost:3000';

app.use('/', express.static('public'));

app.use('/api', proxy({ target: apiProxyTarget }));

app.listen(UI_SERVER_PORT, () => {
    console.log(`App started at http://localhost:${UI_SERVER_PORT}`);
})