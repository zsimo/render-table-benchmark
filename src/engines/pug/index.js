'use strict';

var template = require("./test.pug");


function renderTable (state) {
    console.time("render html");
    var html = template(state);
    console.timeEnd("render html");
    console.time("update dom");
    document.querySelector(".main-content").innerHTML = html;
    console.timeEnd("update dom");
}

module.exports = {
    start: renderTable,
    update: renderTable
};

