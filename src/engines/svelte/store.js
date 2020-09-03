"use strict";

var { writable } = require('svelte/store');

var data = writable([]);

module.exports = {

    data: data

};