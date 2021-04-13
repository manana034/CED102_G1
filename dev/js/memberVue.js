// //更多個levelinfo  ---------------------------

//下面一開始沒寫在 vue 裡面所以可以直接抓出
const levelInfoClose = document.querySelector('section.levelInfo>.infoBody >button')
const levelInfoBody = document.querySelector('section.levelInfo')
levelInfoClose.addEventListener('click',()=>{
    levelInfoBody.removeAttribute('style')
})

// //更多個levelinfo  ---------------------------




//vue 最上層---------------------------------------------
//能夠控制第一層 資料存放地---------------------------


const app = new Vue({
    el: '#app',
    data: {
        openEditPerson: false,

        //for會員 當會員登入會直接填上資料
        goalType: '',
        loginDate: '',
        mBday: '',
        mFoled: '',
        mGoalE: '',
        mGoalS: '',
        mGoalW: '',
        mHeight: '',
        mId: '',
        mImg: '',
        mIntro: '',
        mLevel: '',
        mMail: '',
        mName: '',
        mPhone: '',
        mPoints: '',
        mPsw: '',
        mSex: '',
        mWriteD: '',
        mTotal: '',

        wWeight: '',
        wDate: '',
    },
    store,
    methods: {
        changeStauts(isOpen) {
            this.openEditPerson = isOpen
        },
    },
  
    mounted() {
        passValueVue.$on('leave-profile', () => {
            this.openEditPerson = !this.openEditPerson
        })
        passValueVue.$on('leave-account', () => {
            this.openEditPerson = !this.openEditPerson
        })
    },
    
})

//vue--------------------------------------------------
//-----------------------------------------------------
