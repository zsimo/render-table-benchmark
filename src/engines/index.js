'use strict';

module.exports = {
    "hyperhtml" : require("src/engines/hyperhtml"),
    "lighterhtml" : require("src/engines/lighterhtml"),
    "pug" : require("src/engines/pug/"),
    "nanomorph" : require("src/engines/nanomorph/"),
    "pug-nanomorph" : require("src/engines/pug-nanomorph/"),
    "lit-html" : require("src/engines/lit-html/"),
    "vanilla-string-concatenation" : require("src/engines/vanilla-string-concatenation/"),
    "vanilla-dom-api" : require("src/engines/vanilla-dom-api/")
};