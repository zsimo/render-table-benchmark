'use strict';

const {hyper} = require("hyperhtml");

var utils = require("src/utils");

var template = function (state) {

    return hyper`<table>
                ${state.data.map((tr) => hyper`
                    <tr>${tr.map((td) => hyper`
                            <td>${td.toString()}</td>
                        `)}
                    </tr>
                `)}
                <table>`;

};


function render (state) {
    var start = Date.now();

    var newState = {};
    newState.data = state.data.map(function (datum) {
        return Object.keys(datum).map(function (key) {
            return datum[key];
        });
    });

    var htmlContent = template(newState);

    hyper(document.querySelector(".main-content"))`${htmlContent}`;

    utils.log(start);
}


module.exports = {
    start: render,
    update: render
};



