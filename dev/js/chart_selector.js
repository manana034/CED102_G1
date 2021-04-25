$(document).ready(function(){
    function ChangeChart(){
    //   alert($(this).index());
      let divs= document.getElementsByClassName("report_charts");
      let divs2=document.getElementsByClassName("chart_selectors");
      for(let i=0;i<divs.length;i++){
          divs[i].style.display="none";
          divs2[i].style.borderColor="";
          divs2[i].style.borderWidth="1px"
      }
      divs2[$(this).index()].style.borderColor="#EAA565";
      divs2[$(this).index()].style.borderWidth="2px"
      divs[$(this).index()].style.display="block";
    }

    function InputTypechange(){
        // alert();
        let divs = document.getElementsByClassName("input_pages_data_title");
        let divs2 = document.getElementsByClassName("input_selector");
        let divs3 = document.getElementsByClassName("data_title_selector");
        let divs4=inputfoodV;
        let divs5=foodrecordV;
        let divs6=foodrecordchange



        for(let i=0;i<divs.length;i++){
            divs[i].style.display="none";
            divs3[i].style.display="none";
            divs4.input_selector[i]=false;
            divs5.input_selector2[i]=false;
            divs6.input_selector[i]=false;
        }
        for(let i=0;i<divs2.length;i++){
          divs2[i].classList.remove("selected");
         }
         divs2[$(this).index()].classList.toggle("selected");
         divs[$(this).index()].style.display="grid";
         divs3[$(this).index()].style.display="grid";

         divs4.input_selector[$(this).index()]=true;
         divs5.input_selector2[$(this).index()]=true;
         divs6.input_selector[$(this).index()]=true;

         setTimeout(getfoodrecord(),500);
         
        // divs2[$(this).index()].style.backgroundColor = "#EAA565";
    }
    
    function init(){
      let charts=document.getElementsByClassName("chart_selectors");
      let cal_type=document.getElementsByClassName("input_selector");
      let divs = document.getElementsByClassName("input_pages_data_title");
      let divs2 = document.getElementsByClassName("data_title_selector");

      divs[1].style.display="none";
      divs2[1].style.display="none";
      charts[0].style.borderColor="#EAA565";
      charts[0].style.borderWidth="2px";
      // charts[0].style.backgroundColor="#EAA565";
      for(let i=0;i<charts.length;i++){
        charts[i].onclick=ChangeChart;
      }
      for(let j=0;j<cal_type.length;j++){
        cal_type[j].onclick=InputTypechange;
      }
    }

    init();
  });