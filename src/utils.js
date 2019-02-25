'use strict';


module.exports = {
    log: function (start) {
        var log = "time in ms: " + (Date.now() - start);
        document.querySelector(".log").innerHTML = log;
        console.log(log);
    }
};