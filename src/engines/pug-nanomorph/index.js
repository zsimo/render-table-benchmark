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
        var start = Date.now();

        var newTable = html`${raw(template(state))}`;
        newTable = newTable[0];
        morph(table, newTable);

        console.log("time in ms: " + (Date.now() - start));
    }
};
