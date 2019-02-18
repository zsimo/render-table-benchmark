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
    var newState = {};
    newState.data = state.data.map(function (datum) {
        return Object.keys(datum).map(function (key) {
            return datum[key];
        });
    });

    console.time("render html");
    var html = template(newState);
    console.timeEnd("render html");
    console.time("update dom");
    render(html, document.querySelector(".main-content"));
    console.timeEnd("update dom");
}

module.exports = {
    start: renderTable,
    update: renderTable
};



