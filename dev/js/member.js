
//登入 註冊的畫面 ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
const toggleButton = document.querySelector('.upper>div>div>button')
const upperInfo = {
    login: ['Hello, Friend !', 'Enter your personal details and start journey with us', 'sing up'],
    signup: ['Welcome Back !', 'Can get 2000 points for Sign Up<br>Able to doing more features in FT.  ', 'log in'],
}
const inputs = [...document.querySelectorAll('.under input')]
// const mailInput = document.querySelector('.under .email input')



const toggleMember = (e) => {
    e.stopPropagation()
    // console.log(e.target.dataset.state)
    const state = e.target.dataset.state
    const upper = document.querySelector('.upper')

    const h4 = upper.children[0].children[0]
    const p = upper.children[0].children[1]
    const button = upper.children[0].children[2].children[0]

    if (state == 'login') {
        upper.style.transform = 'translate(0,0)'
        upper.style.backgroundColor = '#EAA565'
        e.target.dataset.state = 'signup'

        h4.textContent = upperInfo.signup[0]
        p.innerHTML = upperInfo.signup[1]
        button.innerHTML = upperInfo.signup[2]
    } else {
        upper.style.transform = 'translate(100%,0)'
        upper.style.backgroundColor = '#95b17c'
        e.target.dataset.state = 'login'

        h4.textContent = upperInfo.login[0]
        p.textContent = upperInfo.login[1]
        button.textContent = upperInfo.login[2]
    }
}

const movePlaceholder = (state, event) => {
    //**************************************** */
    //帶入參數,以及事件聆聽:html 需要給予 $event 不能命名別的

    const inputVal = event.target.value
    const placeholder = event.target.parentElement.children[0]
    const ta = event.target

    const signUpPsd = document.querySelector('.under .signup .psd>input')
    

    if (state == 'focus') {
        placeholder.style.top = '-20px'
        placeholder.style.transform = 'scale(.9)'
        this.state = 'blur'
    } else {
        if (!inputVal) {
            placeholder.style.top = '-5px'
            placeholder.style.transform = 'scale(1)'
            this.state = 'focus'
        }

        //如果目標是 cfmPsd
        if(ta.name === 'cfmPsd'){
            
            //如果沒有值
            if (!signUpPsd.value){
                const p = signUpPsd.parentElement.children[0].children[0]
                p.textContent = '* 請輸入內容'
                p.style.color = 'red';
            } else{
                //如果有值
                if(signUpPsd.value.indexOf(ta.value)> -1){
                    //如果值是一樣的
                    const cfmP = ta.parentElement.children[0].children[0]
                    cfmP.textContent = '* 正確'
                    cfmP.style.color = 'green'
                } else{
                    //如果
                }
            }
        }
    }
}



inputs.forEach((input) => {
    input.addEventListener('focus', movePlaceholder.bind(null, 'focus'))
    input.addEventListener('blur', movePlaceholder.bind(null, 'blur'))
})
toggleButton.addEventListener('click', toggleMember)
//登入 註冊的畫面 ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//登出登入按鈕  ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

const loginBtn = document.getElementById('login')
const signupBtn = document.getElementById('signup')
const signoutBtn = document.querySelector('.edit-signout-button>div>button')

const account = document.querySelector('.myAccount')
const enter = document.querySelector('.logIn_signUp')

const openAccount = () => {
    // account.style.display = 'flex'
    // enter.style.display = 'none'
}

const leaveAccount = () => {
    // account.style.display = 'none'
    // enter.style.display = 'flex'
}

loginBtn.addEventListener('click', openAccount)
signupBtn.addEventListener('click', openAccount)
signoutBtn.addEventListener('click', leaveAccount)

//登出登入按鈕  ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------


//登入註冊phone 的畫面切換  ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

const loginChangBtn = document.querySelector('.logIn_signUp .changBtn>:first-child')
const signupChangBtn = document.querySelector('.logIn_signUp .changBtn>:last-child')

const loginBody = document.querySelector('.logIn_signUp .under .login')

const signupBody = document.querySelector('.logIn_signUp .under .signup')

loginChangBtn.addEventListener('click', () => {
    loginChangBtn.classList.add('o-3')
    signupChangBtn.classList.remove('o-3')
    loginBody.style.display = 'flex'
    signupBody.style.display = 'none'
})

signupChangBtn.addEventListener('click', () => {
    signupChangBtn.classList.add('o-3')
    loginChangBtn.classList.remove('o-3')
    signupBody.style.display = 'flex'
    loginBody.style.display = 'none'
})

//登入註冊phone 的畫面切換  ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------


//---- 當視窗 在resize 的時候
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        signupBody.style.display = 'flex'
        loginBody.style.display = 'flex'
    } else {
        signupBody.style.display = 'none'
    }
})

//---- 當視窗 在resize 的時候
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
