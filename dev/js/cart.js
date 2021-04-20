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
            for(let i = 0; i <localProduct.length; i++){
                if(e.target.parentElement.parentElement.parentElement.children[0].innerText === localProduct[i].product){
                    let newValue = e.target.parentElement.children[1].value;
                    localProduct[i].value = newValue;
                    update();
                    total();
                    break;
                }
            }
        }
        plus.forEach(plus =>plus.addEventListener("click",plusValue));
        minus.forEach(minus =>minus.addEventListener("click",minusValue));
    }

    //更新localStorage資料
    function update(){
        localStorage.setItem('localProduct', JSON.stringify(localProduct));
    }
    show();

    //按 add to cart 新增清單
    byn.forEach(btn =>btn.addEventListener("click",e=>{
        let item ={
            src: e.target.parentNode.children[0].children[0].children[0].src,
            product: e.target.parentNode.children[1].children[0].innerText,
            price: e.target.parentNode.children[1].children[1].dataset.price,
            value: e.target.parentNode.dataset.value
        }
        
        displayProduct(item)
        
        localProduct.push(item)

        update(item)

        total()
    }))

    //點按 X 刪除鍵
    displayArea.addEventListener('click', event =>{
        if(event.target.tagName !== 'SPAN') {return}
        const li = event.target.parentElement
        li.remove();
        for(let i = 0; i <localProduct.length; i++){
            if(li.children[1].children[0].textContent === localProduct[i].product){
                localProduct.splice(i,1);
                break;
            }
        }
        total()
        update()
    });

    // 更新total的值
    function total() {
        let subtotal = 0;
        const total = document.querySelector(".total h3 span");
        for(let i =0; i<localProduct.length ; i++){
            let item = localProduct[i];
            subtotal += (item.price * item.value);
        }
        total.innerText = subtotal;
    };
    total();
}
display();
