const daybtn =document.getElementsByClassName('day');
function changedate(){
    let date=calendarV.selecdateS;  

    inputfoodV.selecteddate=date;
    inputfoodV.datesave=date;
     //更改食物記錄欄位資料
    foodrecordV.fdrecordday=date;
    console.log(foodrecordV.fdrecordday);
    getfoodrecord();
    getsportrecord();
}
function changedate2(){
    //更改圖像化日歷選擇日期位置
    let Mfirstday=new Date(new Date(inputfoodV.selecteddate).setDate(1)).getDay();
    let today=new Date(inputfoodV.selecteddate).getDate();
    let weeksave=Math.floor((today+ Mfirstday-1)/7)+1;

    calendarV.selectcheckM=new Date(inputfoodV.selecteddate).getMonth();
    calendarV.calendar.month=new Date(inputfoodV.selecteddate).getMonth();
    calendarV.selectcheckI=weeksave;
    calendarV.selectcheckJ=new Date(inputfoodV.selecteddate).getDay()+1;
    //更改食物記錄欄位資料
    let Y="2021"
    let M=(new Date(inputfoodV.selecteddate).getMonth()+1).toString().padStart(2,'0');
    let D=new Date(inputfoodV.selecteddate).getDate().toString().padStart(2,'0');
    calendarV.selecdateS=Y+M+D;
    console.log(calendarV.selecdateS);


    foodrecordV.fdrecordday=calendarV.selecdateS;
    getfoodrecord();
    getsportrecord();
}
// function changedate3(){
//     foodrecordV.fdrecordday=date;
//     console.log(foodrecordV.fdrecordday);
//     getfoodrecord();
// }



window.addEventListener('load',function(){
    let v=calendarV;
    let todaysend=v.today.year.toString()+'-'+(v.today.month+1).toString().padStart(2,'0')+'-'+v.today.date.toString().padStart(2,'0');
    
    inputfoodV.selecteddate= todaysend;
    inputfoodV.todaydatesave=todaysend;
    inputfoodV.datesave=todaysend;

    // 將今天日期送到食物日至
    foodrecordV.fdrecordday=todaysend;
    getfoodrecord();
    getsportrecord();
    xhr.onload = function () {
        getfoodrecord();
        getsportrecord();
    }
})