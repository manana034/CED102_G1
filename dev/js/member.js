
//登入 註冊的畫面 ---------------------------
const toggleButton = document.querySelector('.upper>div>div>button')

const upperInfo = {
    login: ['Hello, Friend !', 'Enter your personal details and start journey with us', 'sing up'],
    signup: ['Welcome Back !', 'To keep connected with us please login with your personal info', 'log in'],
}

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
        p.textContent = upperInfo.signup[1]
        button.textContent = upperInfo.signup[2]
    } else {
        upper.style.transform = 'translate(100%,0)'
        upper.style.backgroundColor = '#95b17c'
        e.target.dataset.state = 'login'

        h4.textContent = upperInfo.login[0]
        p.textContent = upperInfo.login[1]
        button.textContent = upperInfo.login[2]
    }
}

toggleButton.addEventListener('click', toggleMember)

const inputs = [...document.querySelectorAll('.under input')]

const movePlaceholder = (state, event) => {
    //**************************************** */
    //帶入參數,以及事件聆聽:html 需要給予 $event 不能命名別的
    // console.log(e.target)
    const placeholder = event.target.parentElement.children[0]

    if (state == 'focus') {
        placeholder.style.top = '-20px'
        placeholder.style.transform = 'scale(.9)'
        this.state = 'blur'
    } else {
        placeholder.style.top = '-5px'
        placeholder.style.transform = 'scale(1)'
        this.state = 'focus'
    }
}

inputs.forEach(input=>{
    input.addEventListener('focus', movePlaceholder.bind(null, 'focus'));
    input.addEventListener('blur', movePlaceholder.bind(null, 'blur'))
})
//登入 註冊的畫面 ---------------------------

//進入個人資料的畫面 ---------------------------


const statusOrderBtn = document.querySelector('.statusOrder>button')
const favPosterBtn = document.querySelector('.favPoster>button')

const openStatusOrder = () =>{
    const listBody = document.querySelector('.statusOrder>.listBody')
    const card = document.querySelector('.statusOrder>.listBody>div')

    listBody.style.height = `${card.clientHeight}px`
    if (listBody.clientHeight > 0) {
        listBody.style.height = 0;
    } else {
        listBody.style.height = `${card.clientHeight}px`
    }
}

const openFavPoster = () =>{
    const listBody = document.querySelector('.favPoster>.listBody')
    const card = document.querySelector('.favPoster>.listBody>div')

    listBody.style.height = `${card.clientHeight}px`
    if (listBody.clientHeight > 0) {
        listBody.style.height = 0
    } else {
        listBody.style.height = `${card.clientHeight}px`
    }
}

statusOrderBtn.addEventListener('click',openStatusOrder)
favPosterBtn.addEventListener('click', openFavPoster)


const loginBtn = document.getElementById('login')
const signupBtn = document.getElementById('signup')
const signoutBtn = document.querySelector('.edit-signout-button>div>button')

const account = document.querySelector('.myAccount')
const enter = document.querySelector('.logIn_signUp')

const openAccount = () =>{
    account.style.display = "flex";
    enter.style.display = 'none';
}

const leaveAccount = () =>{
    account.style.display = 'none'
    enter.style.display = 'flex'
}

loginBtn.addEventListener('click',openAccount)
signupBtn.addEventListener('click', openAccount)

signoutBtn.addEventListener('click', leaveAccount)