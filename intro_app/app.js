console.log("I am connected")

function createNewItem(itemText) {
    /* 
    This is a helper function that will return new <p> object with 
    text provided by the user.
    params:
        itemText: text provided by the user
    return: 
        <p> object with itemText
    */
   var $new_item = $("<p>");
   $new_item.text(itemText);
   $new_item.hide();
   return $new_item
}

var main = function () {
    "use strict";
    console.log("I will begin to execute the main function")

    $(".userItem button").on("click", function (event) {
        console.log("I am adding an new Item");
        if ($(".userItem input").val() !== "") {
            var itemText = $(".userItem input").val();
            var newItem = createNewItem(itemText);
            $(".userItems").append(newItem);
            newItem.fadeIn();
            // here we will clear the user input
            $(".userItem input").val("");
        } 
    });
    $(".userItem input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            // keyCode 13 is the code for enter 
            console.log("keycode: ", event.keyCode);
        };
        console.log("keycode: ", event.keyCode);
    });
};

$(document).ready(main);