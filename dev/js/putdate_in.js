const daybtn =document.getElementsByClassName('day');
function changedate(){
    let date=calendarV.selecdateS;  
    inputfoodV.selecteddate=date;
    inputfoodV.datesave=date;
    console.log(document.getElementsByClassName("bookdate"));
    console.log(date);
}
function changedate2(){
    let Mfirstday=new Date(new Date(inputfoodV.selecteddate).setDate(1)).getDay();
    let today=new Date(inputfoodV.selecteddate).getDate();
    let weeksave=Math.floor((today+ Mfirstday-1)/7)+1;
   calendarV.selectcheckM=new Date(inputfoodV.selecteddate).getMonth();
   calendarV.calendar.month=new Date(inputfoodV.selecteddate).getMonth();
   calendarV.selectcheckI=weeksave;
   calendarV.selectcheckJ=new Date(inputfoodV.selecteddate).getDay()+1;
}
window.addEventListener('load',function(){
    let v=calendarV;
    let todaysend=v.today.year.toString()+'-'+(v.today.month+1).toString().padStart(2,'0')+'-'+v.today.date.toString().padStart(2,'0');
    inputfoodV.selecteddate= todaysend;
    inputfoodV.todaydatesave=todaysend;
    inputfoodV.datesave=todaysend;
})