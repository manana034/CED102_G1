const navCart = document.querySelector(".nav-cart") ;
const cart_btn = document.querySelectorAll(".cart_btn") ;
const cart_slide = document.querySelector(".cart_slide") ;
const close_btn = document.querySelector(".close_btn") ;
const cart_info = document.querySelector(".cart_info") ;
const empty = document.querySelector(".cart_info h3") ;
//按ADD TO CART和購物車icon購物車選單從旁邊滑出
const cartSlide = () => {
    close_btn.addEventListener("click" , () => {
        cart_slide.classList.remove("cart-active") ;
    })
    navCart.addEventListener("click",function() {
        cart_slide.classList.toggle("cart-active") ;
    })

    cart_btn.forEach(btn => btn.addEventListener("click" , function(){
        cart_slide.classList.add("cart-active") ;
    })) ;
}
cartSlide();

//購物車即時新增刪除

let localProduct = JSON.parse(localStorage.getItem("localProduct")) || [] ;

function display(){
    const displayArea = document.querySelector(".displayArea") ;

    //顯示新增的項目
    function show(){
        localProduct.forEach(product => displayProduct(product)) ;
    }
    //在購物車創造元素
    function displayProduct(item){
        displayArea.innerHTML +=`
                                    <li class="element">
                                        <img src="${item.src}">
                                        <div class="el_info">
                                            <h3 class="mb-1">${item.product}</h3>
                                            <p class="mb-1">${item.price}</p>
                                            <form>
                                                <div class="quality_group mb-3">
                                                    <input class="minus" type="button" value="-">
                                                    <input type="number" value="${item.value}" readonly min="1">
                                                    <input class="plus" type="button" value="+">
                                                </div>
                                            </form>
                                        </div>
                                        <span class="cancel_btn">&times;</span>
                                    </li>
                                `

        //按 + - 按鈕 value增加/減少
        const plus = document.querySelectorAll(".plus") ;
        const minus = document.querySelectorAll(".minus") ;
    
        function plusValue(e) {
            this.parentNode.children[1].stepUp(1);
            for(let i = 0 ; i<localProduct.length ; i++){
                if(e.target.parentElement.parentElement.parentElement.children[0].innerText === localProduct[i].product){
                    let newValue = e.target.parentElement.children[1].value ;
                    localProduct[i].value = newValue;
                    update() ;
                    total();
                    break;
                }
            }
            // console.log(e.target.parentElement.parentElement.parentElement.children[0].innerText) ;
        }
    
        function minusValue(e){
            this.parentNode.children[1].stepDown(1);
            for(let i = 0 ; i<localProduct.length ; i++){
                if(e.target.parentElement.parentElement.parentElement.children[0].innerText === localProduct[i].product){
                    let newValue = e.target.parentElement.children[1].value ;
                    localProduct[i].value = newValue;
                    update() ;
                    total() ;
                    break;
                }
            }
        }
    
        plus.forEach(plus => plus.addEventListener("click", plusValue));
    
        minus.forEach(minus => minus.addEventListener("click" , minusValue));
    }

    //更新localStorage資料

    function update() {
        localStorage.setItem('localProduct', JSON.stringify(localProduct)) ;
    }

    show();

    //按ADD TO CART新增清單
    cart_btn.forEach(btn => btn.addEventListener("click" , e => {
        let item = {
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
    //點按X刪除鍵
    displayArea.addEventListener('click', event => {
        if (event.target.tagName !== 'SPAN') { return }
        const li = event.target.parentElement
        li.remove();
        for(let i = 0 ; i<localProduct.length ; i++){
            if(li.children[1].children[0].textContent === localProduct[i].product){
                localProduct.splice(i, 1) ;
                break;
            }
        }
        total()
        update()
        });
 
    //更新Total的值
    function total(){
        let subtotal = 0 ;
        const total = document.querySelector(".total h3 span") ;
        for(let i=0 ; i<localProduct.length ; i++){
            let item = localProduct[i] ;
            subtotal += (item.price * item.value) ;
        }
        total.innerText = subtotal ;
    };
    total() ;
}

display() ;

