var text = document.querySelector("mainline");
var numbers = document.querySelectorAll("#buttons");
for(var i = 1; i < numbers.length; i++){

  var calcNumbers=text[i];
  calcNumbers.addEventListener("click", function(event){
    var clickedItem = event.target;
    var text = clickedItem.innerText;
    var newItem = document.createElement("numbers")
  })
}
