
                function showLoginForm(){            
                  if((this.innerText == "FOLLOWING") || (this.innerText == "FOLLOWER")){
                    document.getElementById("lightBox").style.display = "";
                  }
                }//showLoginForm


                function cancelLogin(){
                  document.getElementById("lightBox").style.display="none";
                }



                function showReportForm(){            
                  // if((this.innerText == "FOLLOWING") || (this.innerText == "FOLLOWER")){
                    document.getElementById("reportBox").style.display = "";
                  // }
                }//showReportForm


                // function cancelReport(){
                //   document.getElementById("reportBox").style.display="none";
                // }



                function init(){
                    
                  //===設定spanLogin.onclick 事件處理程序是 showLoginForm
                  document.getElementById("sp_follower").onclick = showLoginForm;
                  document.getElementById("spanLogin").onclick = showLoginForm;
                  document.getElementsByClassName("nc-btn report").onclick = showReportForm;
                  
                  
                                
                  //===設定btnCancel.onclick 事件處理程序是 cancelLogin
                  document.getElementById("btnCancel").onclick = cancelLogin;
                  
                
                  // document.getElementById("pic").style.display = "none";
                
                }; //window.onload
                
                window.addEventListener("load", init, false);
          