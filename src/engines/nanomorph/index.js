'use strict';

var morph = require('nanomorph');
var html = require('nanohtml');
var utils = require("src/utils");

var table;

var template = function (state) {

    return html`<table>
                ${state.data.map((tr) => html`
                    <tr>${tr.map((td) => html`
                            <td>${td}</td>
                        `)}
                    </tr>
                `)}
                <table>`;
};


module.exports = {
    start: function (state) {
        var newState = {};
        newState.data = state.data.map(function (datum) {
            return Object.keys(datum).map(function (key) {
                return datum[key];
            });
        });

        table = template(newState);

        document.body.appendChild(table);
    },
    update: function (state) {

        var start = Date.now();

        var newState = {};
        newState.data = state.data.map(function (datum) {
            return Object.keys(datum).map(function (key) {
                return datum[key];
            });
        });

        var newTable = template(newState);

        morph(table, newTable);

        utils.log(start);
    }
};



