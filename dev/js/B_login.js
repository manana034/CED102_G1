window.addEventListener("load", function(){

    const login_id = document.getElementById("login_id");
    const login_psw = document.getElementById("login_psw");
    const login = document.getElementById("login");

    login.addEventListener('click', sendForm);
    
    function sendForm(){
        if(login_id.value == '' || login_id.value == undefined || login_id.value == null){
            alert('Please enter ID');
        }else if(login_psw.value == '' || login_psw.value == undefined || login_psw.value == null){
            alert('Please enter the password');
        }else{
            let xhr = new XMLHttpRequest()
            xhr.onload = function () {
                // this.adminrow(xhr.responseText)
                var adminNo = JSON.parse(xhr.responseText)
                if (adminNo !== '{}') {
                    login_id.value = '';  
                    login_psw.value = '';
                    location.href = "1_admin.html";
                }
                    login_id.value = '';  
                    login_psw.value = '';
            }
        xhr.open('post', 'php/B_login.php', true)
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        let data_info = `adminid=${login_id.value}&adminPsw=${login_psw.value}`
        xhr.send(data_info)
        }
    }
});
             