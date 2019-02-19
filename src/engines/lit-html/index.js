'use strict';


var {html, render} = require("lit-html");


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


function renderTable (state) {
    var start = Date.now();

    var newState = {};
    newState.data = state.data.map(function (datum) {
        return Object.keys(datum).map(function (key) {
            return datum[key];
        });
    });

    var html = template(newState);
    render(html, document.querySelector(".main-content"));

    console.log("time in ms: " + (Date.now() - start));
}

module.exports = {
    start: renderTable,
    update: renderTable
};



