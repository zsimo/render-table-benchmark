'use strict';

var template = require("./test.pug");
var utils = require("src/utils");

function renderTable (state) {
    var start = Date.now();

    var html = template(state);

    document.querySelector(".main-content").innerHTML = html;

    utils.log(start);
}

module.exports = {
    start: renderTable,
    update: renderTable
};

