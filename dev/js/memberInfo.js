const  cal_diarr_memberInfo = new Vue({
    el: '#app7',
    data: {
        memberInfo:[],
        wieght:[],
        BMR:0,
        age:"21",
        gender:["Male","Female"],
    },
    methods:{
        cal_caculation(){
            let Today=new Date();
            let birth=new Date(this.memberInfo.mBday);
            // alert(this.memberInfo.mBday.getFullYear());
            let year=Today.getFullYear()-birth.getFullYear();
            if(new Date().getMonth-(birth.getMonth+1)>=0 & new Date().getDate-birth.getDate>=0){
                year=year+1;
            }
            this.age=year;
            // this.age=this.memberInfo.mBday;
        //    this.age=this.memberInfo.mBday;
            switch (this.memberInfo.mSex-1){
                case 0:this.BMR=5+(13.7*this.wieght[0].wWeight)+(5*this.memberInfo.mHeight)-(6.8*this.age);  break;
                case 1:this.BMR=655+(9.6*this.wieght[0].wWeight)+(1.8*this.memberInfo.mHeight)-(4.7*this.age);
            }  
            this.BMR=parseInt(this.BMR*100/70);
            cal_diarr_memberInfo2.BMR=this.BMR;
        }
    }
})


const  cal_diarr_memberInfo2 = new Vue({
    el: '#app8',
    data: {
        BMR:0,
        curent_year:'',
        curent_month:'',
        curent_date:'',
        goal:[],
        time_total:0,
        time_rest:0,
        compare_date:[],
        compare_date_7:[],
        sch_width:0,
        spcaltal:0,
        fdcaltal:0,
        fdcaltal2:0,
        fdcaltal3:0,
        // cal_sch:{clip-path:inset(80% 0px 0px 0px)},
    },
    computed:{
        caltal:function(){return parseInt(this.fdcaltal)+parseInt(this.fdcaltal2)+parseInt(this.fdcaltal3)-parseInt(this.spcaltal)},
        // cal_sch:function(){return 'clip-path:inset('+'50'+'%'+'0 0 0)'},
        test:function(){
            return parseInt(100-(this.caltal*100/this.BMR)).toString();},
        cal_sch:function(){return 'clip-path:inset('+this.test+'%'+'0 0 0)'}
    },
    methods:{
        today(){
            let today=new Date();
            this.curent_year=today.getFullYear();
            this.curent_month=today.getMonth()+1;
            this.curent_date=today.getDate();

            this.time_total=(new Date(this.goal[1])-new Date(this.goal[0]))/86400000;
            this.time_rest=parseInt((new Date(this.goal[1])-new Date())/86400000);
            // alert(time_rest);
            if(this.time_rest<0){
                this.time_rest=0;
            }

            let last7Days=new Date(today.setDate(today.getDate()-30));
            this.compare_date=[this.curent_month,this.curent_date];
            this.compare_date_7=[last7Days.getMonth()+1,last7Days.getDate()];

            //計算進度條
            this.sch_width=parseInt((this.time_total-this.time_rest)*100/this.time_total)+"%";

        }
    }
})




function cal_getmember(){
    let xhr = new XMLHttpRequest();

    var url = "./php/cal_diary_memberInfo.php?" + "mNo=" + getTmp_mNo;
    xhr.open("GET", url, true);
    xhr.send();
    
    xhr.onload = function () {
       let prodRows = JSON.parse(xhr.responseText);
       cal_diarr_memberInfo.memberInfo=prodRows[0];
       cal_getweight();

       cal_diarr_memberInfo2.goal=[prodRows[0].mGoalS,prodRows[0].mGoalE];
       cal_diarr_memberInfo2.today();
    }
}

function cal_getweight(){
    let xhr = new XMLHttpRequest();

    var url = "./php/cal_diary_memberWieght.php?" + "mNo=" + getTmp_mNo;
    xhr.open("GET", url, true);
    xhr.send();
    
    xhr.onload = function () {
       let prodRows = JSON.parse(xhr.responseText);
       cal_diarr_memberInfo.wieght=prodRows;
       foodrecordchange.weight=prodRows;
       inputfoodV.weight=prodRows;



       cal_diarr_memberInfo. cal_caculation();
    }
}

window.addEventListener('load',function(){
    document.getElementById("coverall3").style.display='none';
    if(getTmp_mNo==null){
        // document.getElementById("coverall").style.display='block';
        document.getElementById("coverall2").style.display='block';
        document.getElementById("unlogin_alert").style.display='block';
  
    }else{
        cal_getmember();
        // alert(getTmp_mNo);
    }
})