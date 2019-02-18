'use strict';

var morph = require('nanomorph');
var html = require('nanohtml');

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

        var newState = {};
        newState.data = state.data.map(function (datum) {
            return Object.keys(datum).map(function (key) {
                return datum[key];
            });
        });

        console.time("render html");
        var newTable = template(newState);
        console.timeEnd("render html");

        console.time("update dom");
        morph(table, newTable);
        console.timeEnd("update dom");
    }
};



