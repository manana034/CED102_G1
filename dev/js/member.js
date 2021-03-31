
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


const statusOrderBtn = document.querySelector('.statusOrder>:first-child>button')
const favPosterBtn = document.querySelector('.favPoster>:first-child>button')

const reportBtn = document.querySelector('.reportBtn');

const toggleStatusOrder = () =>{
    const listBody = document.querySelector('.statusOrder>.listBody')
    const card = document.querySelector('.statusOrder>.listBody>div')

    listBody.style.height = `${card.clientHeight}px`
    if (listBody.clientHeight > 0) {
        listBody.style.height = 0;
    } else {
        listBody.style.height = `${card.clientHeight}px`
    }
}

const toggleFavPoster = () =>{
    const listBody = document.querySelector('.favPoster>.listBody')
    const card = document.querySelector('.favPoster>.listBody>div')

    
    listBody.style.height = `${card.clientHeight}px`
    if (listBody.clientHeight > 0) {
        listBody.style.height = 0
    } else {
        listBody.style.height = `${card.clientHeight}px`
    }
}

const toggleReport = (e) =>{
    e.stopPropagation()
    const reportBody = document.querySelector('.reportBody')
    const card = document.querySelector('.reportBody>.card')

    //trainsition 會影響 ↓↓↓↓↓↓↓↓↓↓↓↓↓發生的時間
    reportBody.style.height = `${card.clientHeight}px`
    if (reportBody.clientHeight > 0) {
        reportBody.style.height = 0
        console.log('work2')
    } else if (reportBody.clientHeight == 0) {
        console.log('work')
        reportBody.style.height = `${card.clientHeight}px`
    }
}

statusOrderBtn.addEventListener('click',toggleStatusOrder)
favPosterBtn.addEventListener('click', toggleFavPoster)
reportBtn.addEventListener('click', toggleReport)






//登出登入按鈕  ---------------------------

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


//登出登入按鈕  ---------------------------

const profileLabel = document.querySelector('.labelrow>label.profile>p')
const accountLabel = document.querySelector('.labelrow>label.account>p')

const profileBody = document.querySelector('.editBody>.profileBody')
const accountBody = document.querySelector('.editBody>.accountBody')

const leaveEditbtn = [...document.querySelectorAll('.leaveEdit')]
const editBody = document.querySelector('section.edit')

const editbtn = document.querySelector('.edit-signout-button>:last-child>button')


editbtn.addEventListener('click', () => {
    editBody.style.display = "flex"
})

leaveEditbtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        

        editBody.style.display="none"
    })
})


profileLabel.addEventListener('click',(e)=>{
    e.stopPropagation()

    accountBody.style.display = "none";
    profileBody.style.display = 'block';
})

accountLabel.addEventListener('click',()=>{
    
    accountBody.style.display = 'block';
    profileBody.style.display = 'none';
})


//出貨detail  ---------------------------


const orderDetail = document.querySelector('.orderDetail')

const orderDetailClose = document.querySelector('.orderDetail>.detailBody>button.nc-btn')

const statusOrderList = [...document.querySelectorAll('.statusOrder>.listBody tbody tr')]


orderDetailClose.addEventListener('click', () => {
    orderDetail.style.display = 'none'
})

statusOrderList.forEach(item =>{
    item.addEventListener('click',()=>{
        orderDetail.style.display = "flex"
    })
})


//登入註冊phone 的畫面切換  ---------------------------

const loginChangBtn = document.querySelector('.logIn_signUp .changBtn>:first-child')
const signupChangBtn = document.querySelector('.logIn_signUp .changBtn>:last-child')

const loginBody = document.querySelector('.logIn_signUp .under .login')

const signupBody = document.querySelector('.logIn_signUp .under .signup')


loginChangBtn.addEventListener('click',()=>{
    loginChangBtn.classList.add('o-3');
    signupChangBtn.classList.remove('o-3');
    loginBody.style.display= "flex";
    signupBody.style.display= "none"
})

signupChangBtn.addEventListener('click', () => {
    signupChangBtn.classList.add('o-3')
    loginChangBtn.classList.remove('o-3')
    signupBody.style.display = 'flex'
    loginBody.style.display = 'none'
})



//Phone asie 點擊拉出 ---------------------------------

const asideLable = document.querySelector('.myAccount>:last-child>.label')

const toggleAside = () =>{
    const asideBody = asideLable.parentElement
    const asideBodyShadow = asideBody.children[1]

    const state = getComputedStyle(asideBody).transform



    if (state == 'matrix(1, 0, 0, 1, 0, 0)') {
         asideBody.style.transform = 'translate(100%,0)'
         x.style.boxShadow = '-3px 3px 5px 2px rgba(0, 0, 0, 0)'
    } else {
        asideBody.style.transform = 'translate(0,0)'
        x.style.boxShadow = '-3px 3px 5px 2px rgba(0, 0, 0, 0.3)'
    } 
}


asideLable.addEventListener('click',toggleAside)



//---- 當視窗 在resize 的時候 
window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        signupBody.style.display = 'flex'
        loginBody.style.display = 'flex'
    } else {
        signupBody.style.display = 'none'
    }
})
