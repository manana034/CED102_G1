//moreproduct.html / shop.html

   //buy now to cart
   const buynow = document.querySelectorAll(".byn");

   buynow.forEach(byn =>{
       byn.addEventListener("click",function(){
           cart.classList.add("opencart");
       })
   })