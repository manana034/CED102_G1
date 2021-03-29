//product.html

const addtocart = document.querySelector('addtocart');
const cart = document.querySelector('.cart');
const close = document.querySelector('.close');

addtocart.addEventListener('click',function(){

    cart.classList.toggle('opencart');
})

close.addEventListener('click',function(){
    cart.classList.remove('opencart');
})