

//第二層


//編輯個資,帳號的地方(一開始關閉狀態)
Vue.component('edit-person', {
    template: `
        <section 
            class="edit">

            <div class="bg"></div>
            <div class="editBody">

                <div class="labelrow">
                    <label class="profile">
                        <input 
                            type="radio" 
                            name="edit" 
                            @change="change"
                            checked hidden>
                        <p>profile</p>
                    </label>
                    <label 
                        class="account">
                        
                        <input 
                            type="radio" 
                            name="edit" 
                            @change="change"
                            hidden>
                        <p>account</p>
                    </label>
                </div>

                <profile-body v-show="profileStauts"></profile-body>

                <account-body v-show="accountStauts"></account-body>

            </div>

        </section>
    `,
    data() {
        return {
            profileStauts: true,
            accountStauts: false,
        }
    },
    methods: {
        change() {
            this.profileStauts = !this.profileStauts
            this.accountStauts = !this.accountStauts
        },
    },
})

//在最左邊 個人資訊區
Vue.component('person-info', {
    template: `
        <div class="col-2 col-lg-8 col-md-6 col-sm-4 personConainer">
                <div>
                    <div class="personInfo container">
                        <div class="portrait">
                            <img :src="mImg?mImg:'./icon/upfile.png'" />
                        </div>

                        <div class="mainInfo">
                            <section class="one-info">
                                <p>level <span>{{mLevel}}</span></p>
                                <p class="name">
                                    {{mName}}
                                </p>
                                <p>
                                    {{mBday?mBday:'--'}}
                                </p>
                            </section>

                            <section class="two-info">
                                <div class="age">
                                    <div>
                                        <img src="./icon/age.svg" />
                                        <p>age</p>
                                    </div>
                                    <p>
                                        {{getAge?getAge:'--'}}
                                    </p>
                                </div>
                                <div class="gender">
                                    <div>
                                        <img src="./icon/gender.svg" />
                                        <p>gender</p>
                                    </div>
                                    <p>{{getSex?getSex:'--'}}</p>
                                </div>
                                <div class="height">
                                    <div>
                                        <img src="./icon/height.svg" /> 
                                        <p>height(cm)</p>
                                    </div>
                                    <p>{{mHeight ? mHeight:'--'}}</p>
                                </div>
                                <div class="weight">
                                    <div>
                                        <img src="./icon/weight.svg"/>
                                        <p>weight(kg)</p>
                                    </div>
                                    <p>{{wWeight ? wWeight: '--'}}</p>
                                </div>
                                <div class="bmr">
                                    <div>
                                        <img src="./icon/BMR.svg" />
                                        <p>bmr</p>
                                    </div>
                                    <p>{{getBMR ? getBMR : '--' }}</p>
                                </div>
                            </section>

                            <hr/>

                            <section class="three-info">
                                <p class="email">
                                    {{mMail}}
                                </p>
                                <p class="phone">
                                    {{mPhone}}
                                </p>
                                <p class="intro">
                                    {{mIntro}}
                                </p>
                            </section>

                            <section class="edit-signout-button">
                                <div>
                                    <button 
                                        class="l-btn"
                                        @click="signOut">sign out</button>
                                </div>
                                <div>
                                    <button 
                                        class="l-btn" 
                                        @click="openEdit">
                                        <img src="./icon/pen.svg"/>
                                        edit
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div class="level container">
                        <div>
                            <p>Member Level</p>
                            <img 
                                src="./icon/question.svg" class="o-5"
                                @click="openLevelInfo">
                        </div>
                        

                        <div class="levelBar">
                            <div class="currentBar"></div>
                        </div>

                        <div>
                            <h6 id="levelPointer">80</h6>
                            /
                            <span>100</span>
                        </div>
                    </div>
                </div>
            </div>
    `,

    data() {
        return {}
    },
    methods: {
        openEdit() {
            this.$emit('open-edit', true)
        },
        openLevelInfo() {
            levelInfoBody.style.display = 'flex'
        },
        signOut() {
            let xhr = new XMLHttpRequest();
            xhr.onload = () =>{
                this.$store.commit('toggleLoginBeforeAfter')
                console.log('this sign out')
            }
            xhr.open("get","php/signout.php");
            xhr.send(null)
        },
    },
    computed: {
        // getAge() {
        //     const birth = Date.parse(this.mBday)
        //     const y = 1000 * 60 * 60 * 24 * 365
        //     const now = new Date()
        //     const birthday = new Date(birth)
        //     const age = parseInt((now - birthday) / y)

        //     return age
        // },
        // getSex() {
        //     return this.mSex == '1' ? 'male' : 'female'
        // },
        // getBMR() {
        //     const w = this.wWeight * 10
        //     const h = this.mHeight * 6.25
        //     const a = this.getAge * 5 + 5

        //     return w + h - a
        // },

        ...mapState([
            'mName',
            'mLevel',
            'mMail',
            'mPhone',
            'mSex',
            'mImg',
            'mIntro',
            'mHeight',
            'wWeight',
            'mBday',
            'wDate',
        ]),
        ...mapGetters(['getAge', 'getBMR', 'getSex']),
    },
})

//在中間主要 目標訂單資訊區
Vue.component('main-content', {
    template: `
     <div class="col-7 col-lg-8 col-md-6 col-sm-4 mainConainter">
                <div class="container">
                    <div class="goal">
                        <h6>your goal</h6>

                        <goal-body></goal-body>

                    </div>

                    <status-order></status-order>

                    <fav-poster></fav-poster>
                </div>
            </div>
    `,
})

//在最右邊 點數報表區
Vue.component('second-info', {
    template: `
    <div class="col-3 col-lg-8 col-md-6 col-sm-4 secondContainer">
                <div 
                    class="label"
                    @click="toggleAside">

                    <p>Report & points</p>

                    <img src="./icon/down.svg">
                </div>

                <aside class="r-aside">

                    <button 
                        class="nc-btn reportBtn"
                        @click="toggleReport">
                        your report
                        <img src="./icon/down.svg">
                    </button>

                    <report-body></report-body>


                    <div class="points card">
                        <div>
                            <img src="./icon/points.svg">
                            points
                        </div>

                        <div>
                            <div>
                                <h6>{{mPoints}}</h6>
                                <p>points</p>
                            </div>
                            <a class="p-btn" href="./shop.html">
                                shopping
                            </a>
                        </div>

                    </div>
                </aside>
            </div>
    `,
    methods: {
        toggleReport() {
            const reportBody = document.querySelector('.reportBody')
            const card = document.querySelector('.reportBody>.card')

            //trainsition 會影響 ↓↓↓↓↓↓↓↓↓↓↓↓↓發生的時間
            reportBody.style.height = `${card.clientHeight}px`
            if (reportBody.clientHeight > 0) {
                reportBody.style.height = 0
            } else if (reportBody.clientHeight == 0) {
                reportBody.style.height = `${card.clientHeight}px`
            }
        },

        toggleAside() {
            const asideBody = document.querySelector('.myAccount>:last-child>.label').parentElement
            const asideBodyShadow = asideBody.children[1]

            const state = getComputedStyle(asideBody).transform

            if (state == 'matrix(1, 0, 0, 1, 0, 0)') {
                asideBody.removeAttribute('style')
                asideBodyShadow.removeAttribute('style')
            } else {
                asideBody.style.transform = 'translate(0,0)'
                asideBodyShadow.style.boxShadow = '-3px 3px 5px 2px rgba(0, 0, 0, 0.3)'
            }
        },
    },
    computed: {
        ...mapState(['mPoints']),
    },
})

//登入註冊區 (一開始關閉狀態)
Vue.component('login-signup', {
    template: `
        <section class="logIn_signUp">
            <div class="container card">

                <div class="changBtn">
                    <button class="l-btn o-3">LOG IN</button>
                    <button class="l-btn">SIGN UP</button>
                </div>

                <div class="under">
                    <div class="login">
                        <h4>log in</h4>
                        <form>

                            <label class="userid">
                                <p>userid <span></span></p>
                                <input type="text" 
                                    name="userid" 
                                    maxlength="10" 
                                    minlength="6"
                                    @focus="movePlaceholder($event,'focus')"
                                    @blur="movePlaceholder($event,'blur')"/>
                            </label>

                            <label class="psd">
                                <p>password <span></span></p>
                                <input 
                                    type="password" 
                                    name="psd" 
                                    maxlength="10" 
                                    minlength="6"
                                    @focus="movePlaceholder($event,'focus')"
                                    @blur="movePlaceholder($event,'blur')"/>
                            </label>

                            <div>
                                <button class="nc-btn o-5" type="button">forget your password ?</button>
                            </div>
                            <div>
                                <button 
                                    class="g-btn" 
                                    id="login" 
                                    type="button"
                                    @click.stop="loginMember">log in</button>
                            </div>
                        </form>
                    </div>

                    <div class="signup">
                        <h4>sign up</h4>
                        <form action="">

                            <label class="Name">
                                <p>name <span>*</span></p>
                                <input 
                                    type="text" 
                                    name="name" 
                                    maxlength="20"
                                    @focus="movePlaceholder($event,'focus')"
                                    @blur="movePlaceholder($event,'blur')"/>
                            </label>

                            <label class="email">
                                <p>email <span>*</span></p>
                                <input 
                                    type="email" 
                                    name="email"
                                    @focus="movePlaceholder($event,'focus')"
                                    @blur="movePlaceholder($event,'blur')"/>
                            </label>

                            <label class="userid">
                                <p>userid <span>*</span></p>
                                <input 
                                    type="text" 
                                    name="userid" 
                                    maxlength="10" 
                                    minlength="6"
                                    @focus="movePlaceholder($event,'focus')"
                                    @blur="movePlaceholder($event,'blur')"/>
                            </label>

                            <label class="psd">
                                <p>password <span>*</span></p>
                                <input 
                                    type="password" 
                                    name="psd" 
                                    maxlength="10" 
                                    minlength="6"
                                    @focus="movePlaceholder($event,'focus')"
                                    @blur="movePlaceholder($event,'blur')"/>
                            </label>

                            <label class="cfmPsd">
                                <p>confirm password <span>*</span></p>
                                <input 
                                    type="password" 
                                    name="cfmPsd" 
                                    maxlength="10"
                                    @focus="movePlaceholder($event,'focus')"
                                    @blur="movePlaceholder($event,'blur')"/>
                            </label>

                            <div>
                                <button class="p-btn" id="signup" type="button">sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
    
                <div class="upper">
                    <div>
                        <h4>Hello, Friend !</h4>
                        <p>Enter your personal details and start journey with us</p>
                        <div>
                            <button 
                                data-state="login" 
                                class="w-btn"
                                @click="toggleMember">sing up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            upperInfo: {
                login: ['Hello, Friend !', 'Enter your personal details and start journey with us', 'sing up'],
                signup: [
                    'Welcome Back !',
                    'Can get 2000 points for Sign Up<br>Able to doing more features in FT.  ',
                    'log in',
                ],
            },

            //登入 將資料載入VueX
            checkMember(data) {
                // const enter = document.querySelector('.logIn_signUp')

                if (data === '{}') {
                    alert('帳號密碼錯誤')
                } else {
                    let member = JSON.parse(data)
                    console.log(member)
                    //寫入 VueX
                    this.$store.commit({
                        type: 'updateStatus',

                        goalType: member.goalType,
                        loginDate: member.loginDate,
                        mBday: member.mBday,
                        mFoled: member.mFoled,
                        mGoalE: member.mGoalE,
                        mGoalS: member.mGoalS,
                        mGoalW: member.mGoalW,
                        mHeight: member.mHeight,
                        mId: member.mId,
                        mImg: member.mImg,
                        mIntro: member.mIntro,
                        mLevel: member.mLevel,
                        mMail: member.mMail,
                        mName: member.mName,
                        mPhone: member.mPhone,
                        mPoints: member.mPoints,
                        mPsw: member.mPsw,
                        mSex: member.mSex,
                        mWriteD: member.mWriteD,
                        mTotal: member.mTotal,
                        mNo: member.mNo,

                        wWeight: member.wWeight,
                        wDate: member.wDate,
                    })

                    //將登入登出關閉
                    // enter.style.display = 'none'
                }
            },

            updataMnoMidMpsw(data){
                if(data === '{}'){
                    console.log('此無帳號密碼')
                } else{
                    let member = JSON.parse(data)
                    console.log(member)

                    this.$store.commit({
                        type: 'updateMemberInfo',

                        mNo: member.mNo,
                        mId: member.mId,
                        mPsw: member.mPsw,
                    })
                }
            },

            updataMWeightData(data) {
                if (data === '{}') {
                    console.log('沒有weight體重資料')
                } else {
                    let wData = JSON.parse(data)
                    // console.log(wData)
                    this.$store.commit('updateWeightData', wData)
                }
            },

            updataMExerciseData(data) {
                if (data === '{}') {
                    console.log('沒有運動報表資料')
                } else {
                    let eData = JSON.parse(data)
                    console.log(eData)
                    this.$store.commit('updataExerciseData', eData)
                }
            },

            updataMNowCalDate(data) {
                if (data === '{}') {
                    console.log('沒有這月卡路里資料(報表用)')
                } else {
                    let cData = JSON.parse(data)
                    // console.log(cData)
                    this.$store.commit('updataNowCalData', cData)
                }
            },
            updataMLastCalDate(data) {
                if (data === '{}') {
                    console.log('沒有最後卡路里(報表用)資料')
                } else {
                    let cData = JSON.parse(data)
                    // console.log(cData)
                    this.$store.commit('updataLastCalData', cData)
                }
            },

            updataMOrderListDate(data) {
                if (data === '{}') {
                    console.log('沒有orderlist資料')
                } else {
                    let mOData = JSON.parse(data)
                    // console.log(mOData)
                    this.$store.commit('updataOrderListDate', mOData)
                }
            },

            updataMOrderData(data) {
                if (data === '{}') {
                    console.log('沒有order的資料')
                } else {
                    let mOData = JSON.parse(data)
                    // console.log(mOData)
                    this.$store.commit('updataOrderData', mOData)
                }
            },

            firstSetReport: () => {
                const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000

                const filterEData = this.eData.filter((data) => {
                    return Date.parse(data.spTime) > thisMonth
                })

                const labelArray = filterEData.map((data) => data.spTime.slice(5))
                const dataArray = filterEData.map((data) => data.spCalTal)

                let barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: labelArray,
                        datasets: [
                            {
                                label: 'EXERCICE',
                                fill: true,
                                backgroundColor: '#95b17c',
                                data: dataArray,
                            },
                        ],
                    },
                    options: {
                        animation: {
                            duration: 2000,
                        },
                        legend: {
                            display: false,
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    },
                })
            },



            updataMFavPosterData(data){
                if(data === '{}'){
                    console.log('沒有favPoster資料')
                } else{
                    let favData = JSON.parse(data)
                    // console.log(favData)
                    this.$store.commit('updataFavPosterData', favData)
                }
            },
            getMFavPosterData(mNo){
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    this.updataMFavPosterData(xhr.responseText)
                }
                xhr.open('post', 'php/getFavPosterData.php', true)

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `mNo=${mNo}`
                xhr.send(data_info)
            },


            toggleLogin(){
                const idInput = select('.under .login .userid input')
                const pswInput = select('.under .login .psd input')
                idInput.value = ""
                pswInput.value =""
                this.$store.commit('toggleLoginBeforeAfter')
            }
        }
    },
    methods: {
        toggleMember(e) {
            const state = e.target.dataset.state
            const upper = document.querySelector('.upper')

            const h4 = upper.children[0].children[0]
            const p = upper.children[0].children[1]
            const button = upper.children[0].children[2].children[0]

            if (state == 'login') {
                upper.style.transform = 'translate(0,0)'
                upper.style.backgroundColor = '#EAA565'
                e.target.dataset.state = 'signup'

                h4.textContent = this.upperInfo.signup[0]
                p.innerHTML = this.upperInfo.signup[1]
                button.innerHTML = this.upperInfo.signup[2]
            } else {
                upper.style.transform = 'translate(100%,0)'
                upper.style.backgroundColor = '#95b17c'
                e.target.dataset.state = 'login'

                h4.textContent = this.upperInfo.login[0]
                p.textContent = this.upperInfo.login[1]
                button.textContent = this.upperInfo.login[2]
            }
        },
        movePlaceholder(event, state) {
            const inputVal = event.target.value
            const placeholder = event.target.parentElement.children[0]
            const ta = event.target

            const signUpPsd = select('.under .signup .psd>input')
            const signUpCfmPsd = select('.under .signup .cfmPsd>input')

            if (state == 'focus') {
                //如果再focus 狀態 將會提升
                placeholder.style.top = '-20px'
                placeholder.style.transform = 'scale(.9)'
            } else if (state == 'blur') {
                //如果在blur 狀態
                if (!inputVal) {
                    //檢查裡面 是否有內容 ,沒有內容就會掉下來
                    placeholder.style.top = '-5px'
                    placeholder.style.transform = 'scale(1)'
                }
                switch (ta.name) {
                    case 'cfmPsd':
                        //如果目標是 cfmPsd
                        if (signUpPsd.value) {
                            //如果有值

                            console.log(ta.value)
                            if (ta.value) {
                                if (signUpPsd.value.indexOf(ta.value) > -1) {
                                    //如果值是一樣的
                                    const Psd = signUpPsd.parentElement.children[0].children[0]
                                    const fmPsd = signUpCfmPsd.parentElement.children[0].children[0]

                                    fmPsd.textContent = '* 正確'
                                    fmPsd.style.color = 'green'

                                    Psd.textContent = '* 正確'
                                    Psd.style.color = 'green'
                                } else {
                                    //如果不一樣
                                    const Psd = signUpPsd.parentElement.children[0].children[0]
                                    const fmPsd = signUpCfmPsd.parentElement.children[0].children[0]

                                    fmPsd.textContent = '* 兩個密碼不符合'
                                    fmPsd.style.color = 'red'

                                    Psd.textContent = '*'
                                    Psd.removeAttribute('style')
                                }
                            }
                        }
                        break
                }
            }
        },


        loginMember() {
            const login_id = select('.login input[name="userid"]')
            const login_psw = select('.login input[name="psd"]')

            const id_prompt = login_id.parentElement.children[0].children[0]
            const psw_prompt = login_psw.parentElement.children[0].children[0]

            // 在function的 this 會指向 本身自己
            // 所以要在先指向 vue 的物件, 再提供給裡面使用
            const Vthis = this

            function getMemberData() {

                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.checkMember(xhr.responseText)
                    // console.log(JSON.parse(xhr.responseText))
                    Vthis.getMFavPosterData(JSON.parse(xhr.responseText).mNo) 
                    if (xhr.responseText !== '{}') {
                        Vthis.toggleLogin()
                    }
                    console.log('登入成功 順便寫入站存')
                }
                xhr.open('post', 'php/login.php', true)
                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)

                // let data = new FormData();

                // let payload = {
                //     memid: login_id.value,
                //     memPsw: login_psw.value,
                // }
                // data.append('json', encodeURI(JSON.stringify(payload)))

                // fetch('./php/login.php', {
                //     method: 'POST',
                //     body: JSON.stringify({
                //         memid: login_id.value,
                //         memPsw: login_psw.value,
                //     }),
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //     },
                // })
                // .then((res) => console.log(res.json()))
                // .catch(err=> console.log(err))
                    // .then((res) => res.json())
                    // .then((res) => checkMember(res))
                    // .then((res) => console.log(res))
            }

            function getMnoMidMpsw(){
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.updataMnoMidMpsw(xhr.responseText)
                    // console.log(xhr.responseText)
                    console.log('再從新寫入 mno')
                }
                xhr.open('post', 'php/getMnoMidMpsw.php', true)
                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)
            }

            function getMWeightDate() {
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.updataMWeightData(xhr.responseText)
                }
                xhr.open('post', 'php/getMWeightDate.php', true)

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)
            }

            //如果撈好資料 就會執行firstSetReport
            function getMExerciseDate() {
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.updataMExerciseData(xhr.responseText)
                    //載入好資料之後 就安裝一開始的Report


                    const checkEData = setTimeout(()=>{
                        if (Vthis.eData) {
                            Vthis.firstSetReport()
                        }
                        clearTimeout(checkEData)
                    },10)
        
                    
                }
                xhr.open('post', 'php/getMExerciseDate.php', true)

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)
            }

            function getMNowCalDate() {
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.updataMNowCalDate(xhr.responseText)
                }
                xhr.open('post', 'php/getMNowCalData.php', true)

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)
            }
            function getMLastCalDate() {
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.updataMLastCalDate(xhr.responseText)
                }
                xhr.open('post', 'php/getMLastCalData.php', true)

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)
            }

            //撈取 orderListData 的資料
            function getMOrderListData() {
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.updataMOrderListDate(xhr.responseText)
                }
                xhr.open('post', 'php/getOrderListData.php', true)

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)
            }
            //撈取 orderData 的資料
            function getMOrderData() {
                let xhr = new XMLHttpRequest()
                xhr.onload = () => {
                    Vthis.updataMOrderData(xhr.responseText)
                }
                xhr.open('post', 'php/getOrderData.php', true)

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                let data_info = `memid=${login_id.value}&memPsw=${login_psw.value}`
                xhr.send(data_info)
            }

            getMemberData()
            //mNo 抓不到再從新抓一次
            getMnoMidMpsw()

            getMWeightDate()
            getMExerciseDate()
            getMNowCalDate()
            getMLastCalDate()

            getMOrderListData()
            getMOrderData()

            

       
            //登入 就叫child 執行檢查 是否存在某資料 執行另外動作
            passValueVue.$emit('check-goalWeight')
            passValueVue.$emit('check-goalTime')
        },


    },
    computed: {
        ...mapState(['eData']),
    },
    mounted() {
        console.log('this login-signup mounted')  

 
       
    },
})