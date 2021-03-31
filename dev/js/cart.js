//cart.html
const ncBtn = document.querySelector('.nc .gocart');
const cart = document.querySelector('.cart');
const close = document.querySelector('.close');

ncBtn.addEventListener('click',function(){

    cart.classList.toggle('opencart');
})

close.addEventListener('click',function(){
    cart.classList.remove('opencart');
})

cart.addEventListener("transitionend", function(){
    menuIcon.addEventListener('click',function(){
        cart.classList.remove('opencart');
    })
})
