'use strict';

var template = require("./test.pug");


function renderTable (state) {
    var start = Date.now();

    var html = template(state);

    document.querySelector(".main-content").innerHTML = html;

    console.log("time in ms: " + (Date.now() - start));
}

module.exports = {
    start: renderTable,
    update: renderTable
};

