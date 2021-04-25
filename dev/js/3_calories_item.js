const  calories_3 = new Vue({
    el: '#calories3',
    data: {
        test:1, 
        foods:[],
        sports:[],
        spindex:0,
        fdindex:0,
        foodtype:2,
        foodname:"",
        foodcal:0,
        foodrate:1,
        sporttype:1,
        sportname:"",
        sportcal:1,
        page_check:0,
        foodeditsave:[{fdName:"",fdCalPer:0,calRate:1}]
    },
    computed:{
        foodtypeedit(){
            return this.foods[this.fdindex].fdType
        }
    },
    methods:{
        saveindex:function(e){
            this.fdindex=e;
        },
        saveindex2:function(e){
            this.spindex=e;
        },
        changepage1(){
            this.page_check=1;
        },
        changepage2(){
            this.page_check=0;
        }
    }
})

function getProducts(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        prodRows = JSON.parse(xhr.responseText);
        calories_3.foods = prodRows;
    }
    xhr.open("get","./php/getMore2_JSON.php",true);
    xhr.send(null);
}

function getsports(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        prodRows = JSON.parse(xhr.responseText);
        calories_3.sports = prodRows;
    }
    xhr.open("get","./php/getSport.php",true);
    xhr.send(null);
}
//===============運動(修改)=========================
function sportsDel(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            getsports();
        }
        let url="./php/3_cal_sportsDel.php?"+"spNo="+calories_3.sports[calories_3.spindex].spNo;
        xhr.open("get",url,true);
        xhr.send(null);
}

function sportsEdit(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
            getsports();
    }
    let url="./php/3_cal_sportsEdit.php?";
    xhr.open("get",url,true);
    xhr.send(null);
}

function sportsAdd(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
            getsports();
            $('img.delete').click(function(){
                $('.lightbox_delete_black').css('display','block');
            });
    }
    let v=calories_3;
    let url="./php/3_cal_sportsAdd.php?"
            +"spType="+v.sporttype
            +"&spCalPer="+v.sportcal
            +"&spName="+v.sportname;
    xhr.open("get", url,true);
    xhr.send(null);
}
//===============食物(修改)=========================
function foodsDel(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
                getProducts();
        }
        let url="./php/3_cal_foodsDel.php?"+"fdNo="+calories_3.foods[calories_3.fdindex].fdNo;
        xhr.open("get",url,true);
        xhr.send(null);
}

function foodsEdit(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
            getProducts();
    }
    let v=calories_3;
    let url="./php/3_cal_foodsEdit.php?"
             +"fdName="+decodeURIComponent(v.foodeditsave[0].fdName)
             +"&fdCalPer="+v.foodeditsave[0].fdCalPer
             +"&fdType="+v.foods[v.fdindex].fdType
             +"&calRate="+v.foodeditsave[0].calRate
             +"&fdNo="+v.foods[v.fdindex].fdNo;
    xhr.open("get",url,true);
    xhr.send(null);
}

function foodsAdd(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        getProducts();
        $('img.delete').click(function(){
            $('.lightbox_delete_black').css('display','block');
        });
    }
    let v=calories_3;
    let url="./php/3_cal_foodsAdd.php?"+
            "fdType="+v.foodtype
            +"&fdName="+v.foodname
            +"&fdCalPer="+v.foodcal
            +"&calRate="+v.foodrate;
    xhr.open("get",url,true);
    xhr.send(null);
}
//=============================================
window.addEventListener('load',function(){
    getProducts();
    getsports();
});