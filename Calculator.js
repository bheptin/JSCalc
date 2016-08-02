var addbutton = document.getElementById(".addButton");
var subtractbutton = document.getElementById(".subtractButton");
var dividebutton = document.getElementById(".divideButton");
var multiplybutton = document.getElementById(".multiplyButton");
var equalbutton = document.getElementById(".equalButton");
var clearbutton = document.getElementById(".clearButton");

var allnumber = [];

var number = document.querySelectorAll(".number");
  for(var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(event) {
    var valueAsInterger = parseInt(event.target.value);
    allnumber.push(valueAsInterger);
    document.getElementById("mainline").value += event.target.value;
})
}
