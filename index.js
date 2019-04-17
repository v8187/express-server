const express = require('express'),
    path = require('path'),
    app = express(),
    PORT = 4022;

let appName = '';

function cmdHelpApp() {
    appName='Create Mock Data Help'
    const PATH = '../cmd-help';
    app.use('/', express.static(path.join(__dirname, PATH)));
}

cmdHelpApp();

app.listen(PORT, function () {
    console.log(`${appName} App is running on port # ${PORT}.`);
})