var text = document.querySelector("mainline");
var numbers = document.querySelectorAll(".numbers");
for(var i = 1; i < numbers.length; i++){

  var calcNumbers=text[i];
  calcNumbers.addEventListener("click", function(event){
    var clickedItem = event.target;
    var numbers = clickedItem.innerText;
    var text = document.createElement("numbers")
  })

}
