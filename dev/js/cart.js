const cart = document.querySelector(".cart");
const close = document.querySelector(".close");
const gocart = document.querySelector('.gocart')

//按按鈕 購物車出現關閉
const byn = document.querySelectorAll(".byn");
byn.forEach(btn => btn.addEventListener("click", function(){
    cart.classList.add("opencart"); 
}))
gocart.addEventListener("click",function(){
    console.log(cart)
    cart.classList.add("opencart");

})
 
const proditem = document.querySelectorAll(".prod1");
// console.log(proditem)

proditem.forEach(p => p.addEventListener("click", function(e){
    console.log(this.dataset.no)

    // sessionStorage.setItem("no", this.dataset.no)
    sessionStorage.setItem('no',this.dataset.no)
    console.log('work')

}))   
 
  

close.addEventListener("click", function(){
    cart.classList.remove("opencart");
})

//購物車即時新增刪除
let localProduct  = JSON.parse(localStorage.getItem("localProduct")) || [];

function display(){
    //購物車ul標籤
    const display = document.querySelector(".prod")

    //動態新增li進去ul
    function show(){
        localProduct.forEach(product => displayProduct(product));
    }
    //創造元素template
    function displayProduct(product){
        display.innerHTML += `
                                <li class="prodcart">
                                <p>${product.name}</p>
                                <div class="cartimg">
                                    <img src="${product.src}"> 
                                </div>
                                <img class="trash" src="./img/trash.png">
                                <div class="qty">
                                    <form>
                                        <label for="quantity">QUANTITY : </label>
                                        <div class="btn_number">
                                            <span class="btn_minus"> &minus; </span>
                                            <input type="number" value="${product.value}" min="1" max="10" class="quantity">
                                            <span class="btn_add">  &plus; </span>
                                        </div>                    
                                    </form> 
                                    <p>NT$${product.price}</p>
                                </div>
                            </li>  
                            `
        const plus = document.querySelectorAll(".btn_add");
        const minus = document.querySelectorAll(".btn_minus");
        //按加號數量加一
        function plusValue(e) {
            this.parentNode.children[1].stepUp(1);
            for(let i=0 ; i<localProduct.length;i++){
                if(this.parentNode.parentNode.parentNode.parentNode.children[0].innerText === localProduct[i].name){
                    let newValue = e.target.parentNode.children[1].value
                    localProduct[i].value = newValue;
                    update();
                    total();
                    break;
                }
            }
        }
        //按減號數量減一
        function minusValue(e) {
            this.parentNode.children[1].stepDown(1);
            for(let i=0 ; i<localProduct.length;i++){
                if(this.parentNode.parentNode.parentNode.parentNode.children[0].innerText === localProduct[i].name){
                    let newValue = e.target.parentNode.children[1].value
                    console.log(e.target.parentNode.children[1].value);
                    localProduct[i].value = newValue;
                    update();
                    total();
                    break;
                }
            }
        }
        //事件聆聽click 當點擊加號/減號 執行function
        plus.forEach(plus => plus.addEventListener("click", plusValue));
        minus.forEach(minus => minus.addEventListener("click", minusValue));

    }
    //更新localStorage裡面的資料
    function update() {
        localStorage.setItem("localProduct", JSON.stringify(localProduct));
    }

    show();
    //每按一次buyNow在購物車新增商品
    byn.forEach(btn => btn.addEventListener("click", e => {
        // console.log(e.target.parentNode.children[0]);
        let product = {
            src: e.target.parentNode.children[0].children[0].children[0].src, //商品圖片路徑
            name: e.target.parentNode.children[0].children[1].children[0].innerText, //商品名稱
            price: e.target.parentNode.children[0].children[1].children[2].children[0].innerText, //商品價錢
            value: 1 //商品數量
        }
        displayProduct(product);
        localProduct.push(product);
        update(product);
        total();

    }))
    display.addEventListener("click", e => {
        if(e.target.className !== "trash"){ return } //如果點擊的不是trash這個class就不做動作

        //如果點擊trashcan 購物車商品刪除
        const li  = e.target.parentNode;
        li.remove();
        for(let i=0; i<localProduct.length ; i++){
            if(li.children[0].textContent === localProduct[i].name){
                localProduct.splice(i,1);
                break;
            }
        }
        total();
        update();
    })
    //全部總金額
    function total(){
        let subtotal = 0;
        const total = document.querySelector(".allprice span");
        for(let i=0 ; i<localProduct.length; i++){
            let item = localProduct[i];
            subtotal += (item.price * item.value);
        }
        total.innerText = subtotal;
    }
    total()
}

display();