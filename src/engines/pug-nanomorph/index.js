'use strict';

var morph = require('nanomorph');
var html = require('nanohtml');
var raw = require('nanohtml/raw');
var template = require("./test.pug");
var utils = require("src/utils");

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

        utils.log(start);
    }
};
