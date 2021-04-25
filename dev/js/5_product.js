const  product_5 = new Vue({
    el: '#product_5',
    data: {
        product:[],
        imgs:[],
        sell:[],
        sellindex:0,
        producteditsave:[],
        producteditdes:"none",
        Typesave:"1",
        Typesave2:"1",
        productadd:[],
    },
    methods: {
        changesellindex:function(e){
          this.sellindex=e;
          this.Typesave= this.product[e].prodType;
          this.producteditsave[0]=this.product[e].fdName;
          this.producteditsave[1]=this.product[e].fdCalPer;
          this.producteditsave[2]=this.product[e].calRate;
          this.producteditsave[3]=this.product[e].price;
          this.producteditdes=this.product[e].des;
        },
        changeselect:function(){
          sendsellchange();
        },
        delproduct:function(){
            senddelproduct();    
        },
        productedit:function(){
            sendeditproduct();
        },
        cleanedit:function(){
            this.producteditsave[0]="";
            this.producteditsave[1]="";
            this.producteditsave[2]="";
            this.producteditsave[3]="";
            this.producteditdes="none";
        },
        addproduct:function(){
            sendaddproduct();
        }
    },
});









function Products_info(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        prodRows = JSON.parse(xhr.responseText);
        product_5.product = prodRows;
        // product_5.imgs= product_5.product[0].prodPic1;
        // alert( product_5.imgs);
        for(let i=0;i<product_5.product.length;i++){
            product_5.imgs[i]= product_5.product[i].prodPic1;
            if(product_5.product[i].prodState==1){
                product_5.sell[i]= true;
            }else{
                product_5.sell[i]= false;
            }
        }
    }
    xhr.open("get","./php/5_getproduct.php",true);
    xhr.send(null);
}
//改變上下架
function sendsellchange(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        Products_info();
    }
    let v=product_5;
    if(v.sell[v.sellindex]){
        var prodState=0;
    }else{
        var prodState=1;
    }
    let url="./php/5_productSell.php?"+"prodNo="+v.product[v.sellindex].prodNo
            +"&prodState="+prodState;
    xhr.open("get",url,true);
    xhr.send(null);
}
//刪除商品
function senddelproduct(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        Products_info();
    }
    let v=product_5;
    let url="./php/5_productDel.php?"+"prodNo="+v.product[v.sellindex].prodNo
            +"&fdNo"+v.product[v.sellindex].fdNo;
    xhr.open("get",url,true);
    xhr.send(null);
}
//修改資料
function sendeditproduct(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        Products_info();
    }
    let v=product_5;
    let url="./php/5_productEdit.php?"+"prodNo="+v.product[v.sellindex].prodNo
            +"&prodType="+v.Typesave
            +"&fdName="+v.producteditsave[0]
            +"&fdCalPer="+v.producteditsave[1]
            +"&calRate="+v.producteditsave[2]
            +"&price="+v.producteditsave[3]
            +"&des="+v.producteditdes;
    xhr.open("get",url,true);
    xhr.send(null);
}
//新增資料
function sendaddproduct(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        Products_info();
    }
    let v=product_5;
    let url="./php/5_productAdd.php?"
            +"prodType="+v.Typesave2
            +"&fdName="+v.productadd[0]
            +"&fdCalPer="+v.productadd[1]
            +"&calRate="+v.productadd[2]
            +"&price="+v.productadd[3]
            +"&des="+v.productadd[4];
    xhr.open("get",url,true);
    xhr.send(null);
}















window.addEventListener('load',function(){
    Products_info();
});