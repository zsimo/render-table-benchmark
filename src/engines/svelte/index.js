'use strict';



var App = require('./index.svelte').default;
var store = require("./store");
var {set} = require("svelte/store");

var utils = require("src/utils");

var table;

function renderTable (state) {
    var start = Date.now();

    if (!table) {
        table = new App({
            target: document.querySelector(".main-content")
        });
    }

    store.data.set(state.data);

    utils.log(start);
}

module.exports = {
    start: renderTable,
    update: renderTable
};
