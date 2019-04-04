'use strict';

const {render, html} = require("lighterhtml");

var utils = require("src/utils");

var template = function (state) {

    return html`<table>
                ${state.data.map((tr) => html`
                    <tr>${tr.map((td) => html`
                            <td>${td.toString()}</td>
                        `)}
                    </tr>
                `)}
                <table>`;

};


function renderTable (state) {
    var start = Date.now();

    var newState = {};
    newState.data = state.data.map(function (datum) {
        return Object.keys(datum).map(function (key) {
            return datum[key];
        });
    });

    var htmlContent = template(newState);

    render(document.querySelector(".main-content"), function () {
        return html`${htmlContent}`;
    });

    utils.log(start);
}

module.exports = {
    start: renderTable,
    update: renderTable
};



