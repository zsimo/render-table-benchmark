'use strict';


module.exports = {
    log: function (start) {
        var log = "Update one row, time in ms: " + (Date.now() - start);
        document.querySelector(".log").innerHTML = log;
        console.log(log);
    }
};