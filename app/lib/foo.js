// For a classic Titanium project, save the file to 'Resources/foo.js'
var data = {};

function setData(obj) {
    data = obj;
}

function getData() {
    return data;
}

// The special variable 'exports' exposes the functions as public
exports.setData = setData;
exports.getData = getData;
