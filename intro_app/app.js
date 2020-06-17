console.log("I am connected")

var main = function () {
    "use strict";
    console.log("I will begin to execute the main function")
    $(".userItem button").on("click", function (event) {
        console.log("I am adding an new Item");
        $(".userItems").append("<p> placeholder text for new Item</p>");
    });

};

$(document).ready(main);