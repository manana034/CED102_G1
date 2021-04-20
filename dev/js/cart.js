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

//購物車及時新增刪除
let localProduct = JSON.parse(localStorage.getItem("localProduct")) || [];

function display(){
    const display = document.querySelector('.prod');

    //顯示新增的項目
    function show(){
        localProduct.forEach(product=> displayProduct(product));
    }
    //在購物車創造元素
    function displayProduct(item){
        displayArea.innerHTML += `
                                <li class="prodcart">
                                    <p>"${item.product}"</p>
                                    <div class="qty">
                                            <p>${item.value}</p> 
                                            <p>${item.price}</p>
                                    </div>
                                    <div class="cartimg">
                                        <img src="${item.src}"> 
                                    </div>
                                    <img class="trash" src="./img/trash.png">
                                </li>
                                 `
        //按 +-按鈕value增加/減少
        const plus = document.querySelector('.plus');
        const minus = document.querySelector('.minus');

        function plusValue(e){
            this.parentNode.children[1].stepUp(1);
            for(let i=0; i<localProduct.length; i++){
                if(e.target.parentElement.parentElement.parentElement.children[0].innerText === localProduct[i].product){
                    let newValue = e.target.parentElement.children[1].value;
                    localProduct[i].value = newValue;
                    update() ;
                    total();
                    break;
                }
            }
        }
        function minusValue(e){
            this.parentNode.children[1].stepDown(1);
        }
    }
}
