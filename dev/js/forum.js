

//showLoginForm  //follow功能跳窗  
function showLoginForm(){            
  if((this.innerText == "FOLLOWING") || (this.innerText == "FOLLOWER")){
    document.getElementById("lightBox").style.display = "";
  }
}
//showLoginForm



//showReportForm   //檢舉功能跳窗
function showReportForm(){
  document.getElementById("reportBox").style.display = "";
}//showReportForm





//跳窗關閉
function cancelForms(){
  document.getElementById("reportBox").style.display="none";
  document.getElementById("lightBox").style.display="none";
}
// function cancelLogin(){
//   document.getElementById("lightBox").style.display="none";
// }





function init(){
  //啟動follow功能跳窗  
  document.getElementById("sp_follower").onclick = showLoginForm;
  document.getElementById("spanLogin").onclick = showLoginForm;
  //啟動檢舉功能跳窗
  let RP= document.getElementsByClassName("nc-btn report")
  let r;
  for (r = 0; r < RP.length; r++) {
    RP[r].onclick = showReportForm;
}
  
                

  //檢舉、follow關閉視窗
  let CL=document.getElementsByClassName("btnCancel")
  let c;
  for (c = 0; c < CL.length; c++) {
    CL[c].onclick = cancelForms;
  }
}; 


window.addEventListener("load", init, false);

