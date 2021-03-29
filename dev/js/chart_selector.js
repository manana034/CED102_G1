$(document).ready(function(){
    function ChangeChart(){
    //   alert($(this).index());
      let divs= document.getElementsByClassName("report_charts");
      for(let i=0;i<divs.length;i++){
          divs[i].style.display="none";
      }
      divs[$(this).index()].style.display="block";
    }

    function InputTypechange(){
        // alert();
        let divs = document.getElementsByClassName("input_pages");
        for(let i=0;i<divs.length;i++){
            divs[i].style.display="none";
        }
        divs[$(this).index()].style.display="block";
    }
    
    function init(){
      let charts=document.getElementsByClassName("chart_selectors");
      let cal_type=document.getElementsByClassName("input_selector");
      for(let i=0;i<charts.length;i++){
        charts[i].onclick=ChangeChart;
      }
      for(let j=0;j<cal_type.length;j++){
        cal_type[j].onclick=InputTypechange;
      }
    }

    init();
  });