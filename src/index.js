'use strict';

require("./sass/style.sass");

//var ui = require("./engines/pug/");
// var ui = require("./engines/nanomorph/");
//var ui = require("./engines/pug-nanomorph/");
var ui = require("./engines/lit-html/");
// var ui = require("./engines/vanilla/");

var state = require("./state");

fetch('https://jsonplaceholder.typicode.com/comments')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    state = {
        data : json
    };

    ui.start(state);

    setInterval(function () {
        var index = Math.floor(Math.random() * 10) + 0;
        state.data[index].name = new Date();

        // var index = Math.floor(Math.random() * 100) + 0;
        // state.data.splice(index, 1);

        ui.update(state);
    }, 1000);
  });


