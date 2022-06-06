var allProducts = document.querySelectorAll(".list li");
var content = document.querySelector(".content");

var myButton = document.querySelector(".btn");
var result = document.querySelector(".result");
var totalPrice =0;

allProducts.forEach(function(item) {
  item.onclick = function(){
    content.innerHTML +=  item.textContent + " ";
    if(content.innerHTML != ""){
      myButton.style.display ="block";
    }
    totalPrice+= parseInt(item.getAttribute("price"));
    
  }
  myButton.onclick = function(){
    result.innerHTML = totalPrice;
  }
})