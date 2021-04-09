// //更多個levelinfo  ---------------------------

//下面一開始沒寫在 vue 裡面所以可以直接抓出
const levelInfoClose = document.querySelector('section.levelInfo>.infoBody >button')
const levelInfoBody = document.querySelector('section.levelInfo')
levelInfoClose.addEventListener('click',()=>{
    levelInfoBody.removeAttribute('style')
})

// //更多個levelinfo  ---------------------------


//第二層
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

Vue.component('person-info', {
    template: `
        <div class="col-2 col-lg-8 col-md-6 col-sm-4 personConainer">
                <div>
                    <div class="personInfo container">
                        <div class="portrait">
                            <img src="./img/selfie.png" />
                        </div>

                        <div class="mainInfo">
                            <section class="one-info">
                                <p>level <span>1</span></p>
                                <p class="name">
                                    {{name}}
                                </p>
                                <p>
                                    {{birthday}}
                                </p>
                            </section>

                            <section class="two-info">
                                <div class="age">
                                    <div>
                                        <img src="./icon/age.svg" />
                                        <p>age</p>
                                    </div>
                                    <p>
                                        {{getAge}}
                                    </p>
                                </div>
                                <div class="gender">
                                    <div>
                                        <img src="./icon/gender.svg" />
                                        <p>gender</p>
                                    </div>
                                    <p>male</p>
                                </div>
                                <div class="height">
                                    <div>
                                        <img src="./icon/height.svg" /> 
                                        <p>height(cm)</p>
                                    </div>
                                    <p>180</p>
                                </div>
                                <div class="weight">
                                    <div>
                                        <img src="./icon/weight.svg"/>
                                        <p>weight(kg)</p>
                                    </div>
                                    <p>100</p>
                                </div>
                                <div class="bmr">
                                    <div>
                                        <img src="./icon/BMR.svg" />
                                        <p>bmr</p>
                                    </div>
                                    <p>22000</p>
                                </div>
                            </section>

                            <hr/>

                            <section class="three-info">
                                <p class="email">
                                    {{email}}
                                </p>
                                <p class="phone">
                                    {{phone}}
                                </p>
                                <p class="intro">
                                    {{intro}}
                                </p>
                            </section>

                            <section class="edit-signout-button">
                                <div>
                                    <button class="l-btn">sign out</button>
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
        return {
            name: 'Dorothy Weber',
            birthday: '1996/02/21',
            intro:
                'Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu.',
            phone: '09-1111-1111',
            email: 'archie111@gmail.com',
        }
    },
    methods: {
        openEdit() {
            this.$emit('open-edit', true)
        },
        openLevelInfo(){
            levelInfoBody.style.display="flex";
        }
    },
    computed: {
        getAge() {
            const birth = Date.parse(this.birthday)
            const y = 1000 * 60 * 60 * 24 * 365
            const now = new Date()
            const birthday = new Date(birth)
            const age = parseInt((now - birthday) / y)

            return age
        },
    },
})

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

                    <div class="reportBody">
                        <div class="card">

                            <div class="custom-select">
                                <select name="month">
                                    <option value="thisMonth">This Month</option>
                                    <option value="thisMonth">This Month</option>
                                    <option value="lastMonth">Last Month</option>
                                </select>
                            </div>

                            <div class="rePortBtns">
                                <button class="l-btn o-3">
                                    weight
                                </button>
                                <button class="l-btn">
                                    cal
                                </button>
                                <button class="l-btn">
                                    Exercise
                                </button>
                            </div>
                            
                            <div class="reportContent">
                                <div class="barCContainer">
                                    <canvas id="barChart" width="10" height="10"></canvas>
                                </div>

                                <div class="pieCContainer">
                                    <canvas id="pieChart" width="10" height="10"></canvas>
                                </div>

                                <div class="lineCContainer">
                                    <canvas id="lineChart" width="10" height="10"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="points card">
                        <div>
                            <img src="./icon/points.svg">
                            points
                        </div>

                        <div>
                            <div>
                                <h6>200000</h6>
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
})

//vue 最上層---------------------------------------------
//能夠控制第一層 資料存放地---------------------------

new Vue({
    el: '#myAccount',
    data: {
        openEditPerson: false,
    },
    methods: {
        changeStauts(val) {
            this.openEditPerson = val
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
