//product.html

//Quantity

const btn_minus = document.querySelector(".btn_minus");
const btn_add = document.querySelector(".btn_add");
const quantity = document.querySelector("#quantity");

btn_minus.addEventListener("click",function(){
    quantity.stepDown(1)
});

btn_add.addEventListener("click",function(){
    quantity.stepUp(1)
});