'use strict';

require("src/sass/style.sass");

var state = require("src/state");
var templateEngines = require("src/engines/");
var interval;

document.querySelector("select").addEventListener("change", function () {

    var ui = templateEngines[this.value];
    clearInterval(interval);

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            state = {
                data : json
            };

            ui.start(state);

            interval = setInterval(function () {
                var index = Math.floor(Math.random() * 10) + 0;
                state.data[index].name = new Date();

                // var index = Math.floor(Math.random() * 100) + 0;
                // state.data.splice(index, 1);

                ui.update(state);
            }, 1000);
        });
});




