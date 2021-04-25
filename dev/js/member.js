

//登入 註冊的畫面 ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
// const toggleButton = document.querySelector('.upper>div>div>button')
// const upperInfo = {
//     login: ['Hello, Friend !', 'Enter your personal details and start journey with us', 'sing up'],
//     signup: ['Welcome Back !', 'Can get 2000 points for Sign Up<br>Able to doing more features in FT.  ', 'log in'],
// }
// const inputs = [...document.querySelectorAll('.under input')]
// const mailInput = document.querySelector('.under .email input')


// const toggleMember = (e) => {
//     e.stopPropagation()
//     // console.log(e.target.dataset.state)
//     const state = e.target.dataset.state
//     const upper = document.querySelector('.upper')

//     const h4 = upper.children[0].children[0]
//     const p = upper.children[0].children[1]
//     const button = upper.children[0].children[2].children[0]

//     if (state == 'login') {
//         upper.style.transform = 'translate(0,0)'
//         upper.style.backgroundColor = '#EAA565'
//         e.target.dataset.state = 'signup'

//         h4.textContent = upperInfo.signup[0]
//         p.innerHTML = upperInfo.signup[1]
//         button.innerHTML = upperInfo.signup[2]
//     } else {
//         upper.style.transform = 'translate(100%,0)'
//         upper.style.backgroundColor = '#95b17c'
//         e.target.dataset.state = 'login'

//         h4.textContent = upperInfo.login[0]
//         p.textContent = upperInfo.login[1]
//         button.textContent = upperInfo.login[2]
//     }
// }

// const movePlaceholder = (state, event) => {
//     //**************************************** */
//     //帶入參數,以及事件聆聽:html 需要給予 $event 不能命名別的

//     const inputVal = event.target.value
//     const placeholder = event.target.parentElement.children[0]
//     const ta = event.target

//     const signUpPsd = select('.under .signup .psd>input')
//     const signUpCfmPsd = select('.under .signup .cfmPsd>input')
    

//     if (state == 'focus') {
//         //如果再focus 狀態 將會提升
//         placeholder.style.top = '-20px'
//         placeholder.style.transform = 'scale(.9)'


//     } else if(state == 'blur') {
//         //如果在blur 狀態

//         if (!inputVal) {
//             //檢查裡面 是否有內容 ,沒有內容就會掉下來
//             placeholder.style.top = '-5px'
//             placeholder.style.transform = 'scale(1)'
//         } 

//         switch (ta.name) {
//             case 'cfmPsd':
//                 //如果目標是 cfmPsd
//                 if (signUpPsd.value) {
//                     //如果有值

//                     console.log(ta.value)
//                     if (ta.value) {
//                         if (signUpPsd.value.indexOf(ta.value) > -1) {
//                             //如果值是一樣的
//                             const Psd = signUpPsd.parentElement.children[0].children[0]
//                             const fmPsd = signUpCfmPsd.parentElement.children[0].children[0]

//                             fmPsd.textContent = '* 正確'
//                             fmPsd.style.color = 'green'

//                             Psd.textContent = '* 正確'
//                             Psd.style.color = 'green'
//                         } else {
//                             //如果不一樣
//                             const Psd = signUpPsd.parentElement.children[0].children[0]
//                             const fmPsd = signUpCfmPsd.parentElement.children[0].children[0]

//                             fmPsd.textContent = '* 兩個密碼不符合'
//                             fmPsd.style.color = 'red'

//                             Psd.textContent = '*'
//                             Psd.removeAttribute('style')
//                         }
//                     }
//                 }
//                 break;
//         }


//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener('focus', movePlaceholder.bind(null, 'focus'))
//     input.addEventListener('blur', movePlaceholder.bind(null, 'blur'))
// })

// toggleButton.addEventListener('click', toggleMember)

//登入 註冊的畫面 ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

//登出登入按鈕  ---------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

// const loginBtn = document.getElementById('login')
const signupBtn = document.getElementById('signup')
const signoutBtn = document.querySelector('.edit-signout-button>div>button')

const account = document.querySelector('.myAccount')
// const enter = document.querySelector('.logIn_signUp')


// const checkMember = (data)=>{
//     if(data === "{}"){
//         alert('帳號密碼錯誤')
//     } else {
//         let member = JSON.parse(data)

//         app.goalType = member.goalType
//         app.loginDate = member.loginDate
//         app.mBday = member.mBday
//         app.mFoled = member.mFoled
//         app.mGoalE = member.mGoalE
//         app.mGoalS = member.mGoalS
//         app.mGoalW = member.mGoalW
//         app.mHeight = member.mHeight
//         app.mId = member.mId
//         app.mImg = member.mImg
//         app.mIntro = member.mIntro
//         app.mLevel = member.mLevel
//         app.mMail = member.mMail
//         app.mName = member.mName
//         app.mPhone = member.mPhone
//         app.mPoints = member.mPoints
//         app.mPsw = member.mPsw
//         app.mSex = member.mSex
//         app.mWriteD = member.mWriteD
//         app.mTotal = member.mTotal

//         app.wWeight = member.wWeight
//         app.wDate = member.wDate        
        
//         // enter.style.display="none"
//     }
// }

// const loginMember = () => {
//     const login_id = select('.login input[name="userid"]')
//     const login_psw = select('.login input[name="psd"]')

//     const id_prompt = login_id.parentElement.children[0].children[0]
//     const psw_prompt = login_psw.parentElement.children[0].children[0]

//     // let formData = new FormData();

//     // formData.append('memid',login_id.value);
//     // formData.append('memPsw',login_psw.value);
//     // console.log(formData)

//     //先輸入url 
//     // fetch('php/login.php', {
//     //     method: 'POST',
//     //     body: encodeURI(
//     //         JSON.stringify({
//     //             memid: login_id.value,
//     //             memPsw: login_psw.value,
//     //         })
//     //     ),
//     //     headers: {
//     //         'Content-Type': 'application/www-form-urlencoded;charset=UTF-8',
//     //     },
//     // }).then((res) => console.log(res))

//         // .then((res) => res.json())
//         // .then((res) => checkMember(res))
//         // .then((res) => console.log(res))




//     let xhr = new XMLHttpRequest()
//     xhr.onload = () => {
//         checkMember(xhr.responseText)
//         console.log(xhr.responseText)
//     }
//     xhr.open('post', 'php/login.php', true)

//     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
//     let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
//     xhr.send(data_info)




//     // xhr.open('get', `php/login.php?memid=${login_id.value}&memPsw=${login_psw.value}`)
//     // xhr.send(null)
// }

// const signupMember =() =>{
//     const signup_name = select('.signup input[name="name"]')
//     const signup_email = select('.signup input[name="email"]')
//     const signup_id = select('.signup input[name="userid"]')
//     const signup_psd = select('.signup input[name="psd"]')
//     const signup_cfmPsd = select('.signup input[name="cfmPsd"]')

//     let xhr = new XMLHttpRequest()
//     xhr.onload = () => {
//         console.log(xhr.responseText)
//     }
//     xhr.open('post', 'php/signup.php', true)
//     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
//     let data_info = `memid=${signup_id.value}&memPsw=${signup_psd.value}`
//     xhr.send(data_info)

// }

// loginBtn.addEventListener('click', loginMember)
// signupBtn.addEventListener('click', signupMember)
// signoutBtn.addEventListener('click', leaveAccount)







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
    if (window.innerWidth > 992) {
        signupBody.removeAttribute('style')
        loginBody.removeAttribute('style')
    } 
})

//---- 當視窗 在resize 的時候
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
