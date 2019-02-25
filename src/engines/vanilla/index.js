'use strict';

var utils = require("src/utils");

var template = function (state) {

    var html = "<table>";

    for (var i = 0; i < state.data.length; i ++) {

        var row = state.data[i];

        html += "<tr>";

        html += "<td>" + row.id + "</td>";
        html += "<td>" + row.postId + "</td>";
        html += "<td>" + row.email + "</td>";
        html += "<td>" + row.body + "</td>";
        html += "<td>" + row.name + "</td>";

        html += "</tr>";

    }

    html += "</table>";

    return html;

};


function renderTable (state) {
    var start = Date.now();

    var html = template(state);

    document.querySelector(".main-content").innerHTML = html;

    utils.log(start);
}

module.exports = {
    start: renderTable,
    update: renderTable
};



