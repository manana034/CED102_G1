window.addEventListener("load", function(){

    const logout = document.getElementById('logout');
    logout.addEventListener('click', loginOut);
    function loginOut(){
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            location.href = "B_login.html";
        }
        xhr.open('post', './php/B_logout.php', true);
        xhr.send(null);
    }
});