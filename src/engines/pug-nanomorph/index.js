'use strict';

var morph = require('nanomorph');
var html = require('nanohtml');
var raw = require('nanohtml/raw');
var template = require("./test.pug");


var table;

module.exports = {
    start: function (state) {
        table = html`${raw(template(state))}`;
        table = table[0];

        document.body.appendChild(table);
    },
    update: function (state) {
        console.time("render html");
        var newTable = html`${raw(template(state))}`;
        newTable = newTable[0];

        console.timeEnd("render html");
        console.time("update dom");
        morph(table, newTable);
        console.timeEnd("update dom");
    }
};
