console.log("I am connected")

function numberToPrint(num) {
    /* 
    print number accordingly
    for multiples of three print Fizz instead of number
    for multiples of five print Buzz instead of the number
    for multiples of both three and five print FizzBuzz
    */
   if (num % 3 === 0 && num % 5 !== 0) {
       console.log("fizz")
       $(".display-box").append($("<p>").text("fizz"))
   } else if ( num % 5 === 0 && num % 3 !== 0) {
        console.log("buzz")
        $(".display-box").append($("<p>").text("buzz"))
   } else if ( num % 3 === 0 && num % 5 === 0 ) {
        console.log("fizzbuzz")
        $(".display-box").append($("<p>").text("fizzbuzz"))
   } else{
       console.log(num)
       $(".display-box").append($("<p>").text(num.toString()))
   }
}
var main = function () {
    "use strict";
    $(".fizzbuzz button").on("click", function (event) {
        console.log("i clicked")
        for (var i = 0; i <= 100; i = i + 1) {
            numberToPrint(i);
        }
    })
}

$(document).ready(main);