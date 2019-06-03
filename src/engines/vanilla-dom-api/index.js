'use strict';

var utils = require("src/utils");

function renderTable (state) {
    var start = Date.now();

    //var html = template(state);

    var container = document.querySelector(".main-content");
    if (container.firstChild) {
        console.log('rebuild');
        var table = container.firstChild;
        for (var i = 0; i < state.data.length; i ++) {
            var tr = table.childNodes[i];
            tr.childNodes[0].textContent = state.data[i].id;
            tr.childNodes[1].textContent = state.data[i].postId;
            tr.childNodes[2].textContent = state.data[i].email;
            tr.childNodes[3].textContent = state.data[i].body;
            tr.childNodes[4].textContent = state.data[i].name;
        }

        utils.log(start);
        return;
    }


    var table = document.createElement('table');
    for (var i = 0; i < state.data.length; i ++) {
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        td.textContent = state.data[i].id;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = state.data[i].postId;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = state.data[i].email;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = state.data[i].body;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.textContent = state.data[i].name;
        tr.appendChild(td);
        table.appendChild(tr);
    }
    container.appendChild(table);


    utils.log(start);
}

module.exports = {
    start: renderTable,
    update: renderTable
};



