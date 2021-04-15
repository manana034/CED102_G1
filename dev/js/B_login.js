window.addEventListener("load", function(){

    const login_id = document.getElementById("login_id");
    const login_psw = document.getElementById("login_psw");
    const login = document.getElementById("login");

    login.addEventListener('click', sendForm);
    
    function sendForm(){
        // 確認欄位是否為空
        login_id.value.replace(/\s+/g, '');
        login_psw.value.replace(/\s+/g, '');

        if(login_id.value == '' || login_id.value == undefined || login_id.value == null){
            alert('Please enter ID');
        }else if(login_psw.value == '' || login_psw.value == undefined || login_psw.value == null){
            alert('Please enter the password');
        }else{
            let xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if(xhr.status == 200) {  // 是否已有該管理員
                    if(xhr.responseText.indexOf('無此管理員') == -1){  // 登入成功
                        // 清空欄位
                        login_id.value = '';  
                        login_psw.value = '';
                        location.href = "1_admin.html";
                    }else{
                        alert('ID or password is incorrect, please re-enter.');
                        // 清空欄位
                        login_id.value = '';  
                        login_psw.value = '';  
                    }
                } else{
                    alert(xhr.status);
                    // console.log(xhr.responsetext);
                }
            }
            
            xhr.open('post', './php/B_login.php', true);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            let data_info = `aId=${login_id.value}&aPsw=${login_psw.value}`;
            xhr.send(data_info);
        }
    }
});