//用來傳遞 資料用的
const passValueVue = new Vue()

//status-order 的showDetail 用的

// const orderDetail = document.querySelector('.orderDetail')

// orderDetail 沒有寫在 vue 裡面所以只能寫在外面
// 不是用vue 一開始就有, vue一開始沒有要建過內容才有東西可以抓

// const orderDetailClose = document.querySelector('.orderDetail>.detailBody>button.nc-btn')

// orderDetailClose.addEventListener('click', () => {
//     orderDetail.removeAttribute('style')
// })


const mapState = Vuex.mapState
const mapMutations = Vuex.mapMutations
const mapActions = Vuex.mapActions
const mapGetters = Vuex.mapGetters





//vue 第三層------

//是 edit-person 的child
Vue.component('profile-body', {
    template: `
        <div class="profileBody">
            <div class="row-1">
                <h4>edit profile</h4>
            </div>
            <form class="row-2">
                <label class="protrait">
                    <input 
                        type="file" 
                        name="protraitImg"
                        @change="getImg"
                        hidden>

                    <div>
                        <img :src="mImg">
                    </div>
                </label>

                <div class="name">
                    <p>Name</p>
                    <p>{{mName}}</p>
                </div>

                <label class="birthday">
                    <p>birthday *</p>
                    <input 
                        type="text" 
                        name="birthday"
                        :value="mBday"
                        placeholder="YY/MM/DD">

                </label>


                <div class="gender">
                    <p>gender *</p>
                    <label>
                        <p>male</p>
                        
                        <input 
                            type="radio" 
                            name="gender"
                            value="1" 
                            :checked="mSex == '1' ? true : false"
                            hidden>

                        <div></div>
                    </label>
                    <label>
                        <p>female</p>

                        <input 
                            type="radio" 
                            name="gender"
                            value="2" 
                            :checked="mSex == '2' ? true : false"
                            hidden>

                        <div></div>
                    </label>
                </div>

                <label class="weight">
                    <p>weight *</p>
                    <input 
                        type="text" 
                        name="weight" 
                        :value="wWeight"
                        maxlength="5">

                </label>

                <label class="height">
                    <p>height *</p>
                    <input 
                        type="text" 
                        name="height" 
                        :value="mHeight"
                        maxlength="3">

                </label>

                <label class="email">
                    <p>email</p>
                    <input 
                        type="text" 
                        name="email" 
                        :value="mMail">
                </label>

                <label class="phone">
                    <p>phone</p>
                    <input 
                        type="text" 
                        name="phone"
                        :value="mPhone"
                        maxlength="12">
                </label>

                <label class="intro">
                    <p>introduction</p>
                    <textarea 
                        maxlength="200"
                        name="intro"
                        :value="mIntro"></textarea>
                </label>

                <div>
                    <button 
                        class="l-btn leaveEdit" 
                        type="button"
                        @click="leave">
                        cancel

                    </button>
                    <button 
                        type="button"
                        class="p-btn"
                        @click="saveProfile">
                        save
                    </button> 
                </div>

            </form>
        </div>
    `,
    data() {
        return {
            bdayInput: '',
            mSexinputs: '',
            wWeightInput: '',
            mHeightInput: '',
            mMailInput: '',
            mPhoneInput: '',
            mIntroInput: '',
            mImgInput: '',

            // gender: '',
        }
    },

    methods: {
        getImg(e) {
            //當 change 事件發生 就會執行這methods
            let file = e.target.files[0]
            //當有 file 就會執行下面那段

            if (file) {
                let readFile = new FileReader()
                readFile.readAsDataURL(file)

                readFile.addEventListener('load', function (e) {
                    let image = document.querySelector('.protrait>div>img')
                    image.src = readFile.result
                    image.style.width = '100%'
                    image.style.height = '100%'
                    image.style.objectFit = 'cover'
                    console.log(image)
                })
            }
        },
        leave() {
            //還原內容
            this.bdayInput.value = this.mBday
            this.mSexinputs[0].checked = this.mSex == '1' ? true : false
            this.mSexinputs[1].checked = this.mSex == '2' ? true : false
            this.wWeightInput.value = this.wWeight
            this.mHeightInput.value = this.mHeight
            this.mMailInput.value = this.mMail
            this.mPhoneInput.value = this.mPhone
            this.mIntroInput.value = this.mIntro
            this.mImgInput.src = this.mImg

            passValueVue.$emit('leave-profile')
        },
        saveProfile() {
            const choiceSex = [...this.mSexinputs].filter((input) => input.checked == true)[0].value
     

            if (
                !this.bdayInput.value.trim() ||
                !this.wWeightInput.value.trim() ||
                !this.mHeightInput.value.trim() ||
                !choiceSex
            ) {
                //如果其中沒有值
                alert('* 為必填表格, 請繼續填寫')
            } else {
                this.$store.commit('updateBday', this.bdayInput.value)
                this.$store.commit('updateSex', choiceSex)
                this.$store.commit('updateWeight', this.wWeightInput.value)
                this.$store.commit('updateHeight', this.mHeightInput.value)
                if (this.mMailInput.value.trim()) {
                    this.$store.commit('updateMail', this.mMailInput.value)
                }
                if (this.mPhoneInput.value.trim()) {
                    this.$store.commit('updatePhone', this.mPhoneInput.value)
                }
                if (this.mIntroInput.value.trim()) {
                    this.$store.commit('updateIntro', this.mIntroInput.value)
                }
                if (this.mImgInput.src) {
                    this.$store.commit('updateImg', this.mImgInput.src)
                    console.log('work')
                    // console.log(this.mImgInput.src)
                    // console.log(this.mImg)
                }

                passValueVue.$emit('leave-profile')
            }
        },
  
    },
    mounted() {
        //針對 DOM input 限制格式
        new Cleave('.profileBody .birthday>input', {
            date: true,
            datePattern: ['Y', 'm', 'd'],
            delimiter: '-',
        })
        new Cleave('.profileBody label.phone>input', {
            blocks: [2, 4, 4],
            // delimiter: '-',
            //無法一起 使用
            // phone: true, // 電話模式
            // phoneRegionCode: 'tw', // 需仔入 taiwan 的cdn
        })
        new Cleave('.profileBody label.height>input', {
            numeral: true,
            numeralIntegerScale: 3,
            numeralDecimalScale: 0,
        })
        new Cleave('.profileBody label.weight>input', {
            numeral: true,
            numeralIntegerScale: 3,
            numeralDecimalScale: 1,
        })

        //註冊DOM的element
        this.bdayInput = select('.birthday input')
        this.mSexinputs = selectAll('.gender input')
        this.wWeightInput = select('.weight input')
        this.mHeightInput = select('.height input')
        this.mMailInput = select('.email input')
        this.mPhoneInput = select('.phone input')
        this.mIntroInput = select('.intro textarea')
        this.mImgInput = select('.protrait>div>img')
    },
    computed: {
        ...mapState([
            'goalType',
            'loginDate',
            'mBday',
            'mFoled',
            'mGoalE',
            'mGoalS',
            'mGoalW',
            'mHeight',
            'mId',
            'mImg',
            'mIntro',
            'mLevel',
            'mMail',
            'mPhone',
            'mPoints',
            'mPsw',
            'mSex',
            'mWriteD',
            'mTotal',
            'mName',

            'wWeight',
            'wDate',
        ]),
    },
})

Vue.component('account-body', {
    template: `
        <div class="accountBody">
            <div class="row-1">
                <h4>edit account</h4>
            </div>
            <form class="row-2">
            
                <div class="userid">
                    <p>userid</p>
                    <p>{{mId}}</p>
                </div>

                <label class="email">
                    <p>email</p>
                    
                    <input type="text" 
                        name="email" 
                        :value="mMail">
                </label>


                <label class="oldPwd">
                    <p>old password *</p>

                    <input 
                        type="password" 
                        name="oldPwd" 
                        v-model="oldPwd"
                        maxlength="10">
                </label>

                <label class="newPwd">
                    <p>new password *</p>

                    <input 
                        type="password" 
                        name="newPwd"
                        v-model="newPwd"
                        maxlength="10">

                </label>
            

                <label class="cfmPwd">
                    <p>confirm password *</p>

                    <input 
                        type="password" 
                        name="cfmPwd"
                        v-model="cfmPwd"
                        maxlength="10">

                </label>

                <div>
                    <button 
                        class="l-btn leaveEdit" 
                        type="button"
                        @click="leave">
                        cancel
                    </button>
                    <button
                        type="button"
                        class="p-btn"
                        @click="submitInfo">
                        save
                    </button>
                </div>

            </form>
        </div>
    `,
    data() {
        return {
            mMailInput : '',

            //共用變數
            oldPwd: '',
            newPwd: '',
            cfmPwd: '',
        }
    },
    mounted() {
        //當mounted 完成再把值給抓一次
        this.mMailInput = select('.accountBody .email input')
    },
    methods: {
        leave() {
            this.oldPwd = ''
            this.newPwd = ''
            this.cfmPwd = ''
            this.mMailInput.value = this.mMail

            passValueVue.$emit('leave-account')
        },
        submitInfo() {

            //寄出 更改信箱
            this.$store.commit('updateMail', this.mMailInput.value)
            
            // if(this.oldPwd && this.newPwd && this.cfmPwd){
            //     //如果都有值就會寄出
            //     this.$store.commit('updatePsw', this.newPwd)
            // } else if(this.oldPwd || this.newPwd || this.cfmPwd) {
            //     //如果其中一個有值
            //     alert('密碼填寫完成')
            // } 
            passValueVue.$emit('leave-account')
        },
    },
    computed: {
        ...mapState(['mId', 'mMail']),
    },
})





//是 main-content 的child
Vue.component('goal-body', {
    template: `
        <form class="card goalBody">
                            <div class="goal-row-1">
                                <p>start Date</p>
                                <div class="dateLine">
                                    <div class="crrentLine">
                                        <p id="moveDate">
                                           {{getCurrentDate}}
                                        </p>
                                    </div>
                                </div>

                                <p>end date</p>
                            </div>

                            <div class="goal-row-2">
                                <p class="starDate">
                                    {{startDate}}
                                </p>

                                <p class="endDate">
                                    {{endDate}}
                                </p>
                            </div>

                            <div class="goal-row-3">
                                <div class="durationTime">
                                    <p>duration time of goal</p>
                                    <div>
                                        <label>
                                            <input 
                                                type="radio" 
                                                name="goalTime"
                                                v-model="goalTime" 
                                                value="30" 
                                                @click="clickSetTime"
                                                hidden/>
                                            <p>30</p>
                                        </label>

                                        <label>
                                            <input 
                                                type="radio" 
                                                name="goalTime" 
                                                value="60" 
                                                v-model="goalTime"
                                                @click="clickSetTime"
                                                hidden />
                                            <p>60</p>
                                        </label>

                                        <label>
                                            <input 
                                                type="radio" 
                                                name="goalTime" 
                                                value="90" 
                                                v-model="goalTime"
                                                @click="clickSetTime"
                                                hidden />
                                            <p>90</p>
                                        </label>

                                        <label>
                                            <input 
                                                type="radio" 
                                                name="goalTime" 
                                                value="180" 
                                                v-model="goalTime"
                                                @click="clickSetTime"
                                                hidden />
                                            <p>180</p>
                                        </label>

                                        <label class="enterDurTime">
                                            <input 
                                                type="text" 
                                                name="goalTime"
                                                v-model="goalTime"
                                                @input="setDurTime"/>
                                            <p><img src="./icon/pen.svg" /></p>
                                        </label>

                                    </div>
                                </div>
                                <div class="customDate">
                                    <p>Custom end date</p>
                                    <div>
                                        <input type="text" placeholder="YY/MM/DD" name="goalTime"
                                        @input="setCustomDate"
                                        v-model="customEndDate"/>
                                    </div>
                                </div>
                            </div>

                            <div class="goal-row-4">
                                <div class="block currentState">
                                    <p>current state</p>
                                    <div>
                                        <div class="l-side">
                                            <div>
                                                <img src="./icon/gender.svg" />
                                                <p>male</p>
                                            </div>

                                            <div>
                                                <img src="./icon/age.svg" />
                                                <p><span>20</span> y</p>
                                            </div>
                                            <div>
                                                <img src="./icon/height.svg" />
                                                <p><span>180</span> cm</p>
                                            </div>
                                        </div>

                                        <div class="r-side">
                                            <div>
                                                <img src="./icon/weight.svg" />
                                                <p><span>100</span> kg</p>
                                            </div>
                                            <div>
                                                <img src="./icon/BMR.svg" />
                                                <p><span>2200</span> cal</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block goalWeight">
                                    <p>goal weight</p>
                                    <label>
                                        <input 
                                            type="text"
                                            v-model="goalWeight"
                                            maxlength="3"
                                            @input="setGoalWeight"/>

                                        <img src="./icon/pen.svg" />
                                    </label>
                                </div>
                                <div class="block restCal">
                                    <p>rest Calories</p>
                                    <div>
                                        <div class="peopleInfoGraphic">
                                            <div class="tookCal"></div>
                                            <p>0 <span>%</span></p>
                                        </div>

                                        <div class="infoNum">
                                            <div class="row-1">
                                                <p>12000</p>
                                                <span>rest cal</span>
                                            </div>
                                            <div class="hr"></div>
                                            <div class="row-2">
                                                <p>24000</p>
                                                <span>daliy cal</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block">
                                    <div>
                                        <button class="l-btn">
                                            <img src="./icon/pen.svg" />
                                            create goal
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
    `,
    data() {
        return {
            startDate: '2020/04/03',
            endDate: '2099/05/06',

            goalTime: '',
            customEndDate: '',
            goalWeight: '',
        }
    },
    methods: {
        clickSetTime(e) {
            const input = e.target.parentElement.parentElement.children[4]
            const p = input.children[1]

            if (this.customEndDate) {
                input.style.backgroundColor = '#F2F2F2'
                p.style.opacity = 1
                this.customEndDate = ''
            } else if (this.goalTime) {
                input.removeAttribute('style')
                p.removeAttribute('style')
            }
        },

        setDurTime(e) {
            const label = e.target.parentElement
            const p = label.children[1]

            const inputs = document.querySelectorAll('.goalBody input[name=goalTime]')
            if (e.target.value) {
                inputs.forEach((input) => (input.checked = false))
                label.style.backgroundColor = '#EAA565'
                p.style.opacity = 0
                this.customEndDate = ''
            } else {
                //沒有值會執行以下
                console.log('work')
                label.removeAttribute('style')
                p.removeAttribute('style')
            }
        },

        setCustomDate() {
            if (this.goalTime) {
                const input = document.querySelector('.goalBody .enterDurTime')
                const img = input.children[1]
                this.goalTime = ''
                input.style.backgroundColor = '#F2F2F2'
                img.style.opacity = 1
            }
        },

        setGoalWeight() {
            const input = document.querySelector('.goalBody .goalWeight label')
            const img = input.children[1]

            // console.log(input)
            if (this.goalWeight) {
                input.style.backgroundColor = '#EAA565'
                img.style.opacity = 0
            } else {
                input.removeAttribute('style')
                img.removeAttribute('style')
            }
        },
    },

    computed: {
        getCurrentDate() {
            const y = new Date().getFullYear()
            const m = new Date().getMonth()
            const d = new Date().getDate()

            return `${y}/${m + 1}/${d}`
        },
    },
    //Vue 開始時執行
    mounted() {
        //js 轉換日期格式
        let formatDate = function (date) {
            let y = date.getFullYear()
            let m = date.getMonth() + 1
            m = m < 10 ? '0' + m : m
            let d = date.getDate()
            d = d < 10 ? '0' + d : d
            return y + '-' + m + '-' + d
        }

        //限制input輸入的最大時間
        let getMaxDate = function (date) {
            let y = date.split('-')[0]
            let m = date.split('-')[1]
            let d = date.split('-')[2]

            y = parseInt(y) + 3
            //最大時間年
            return y + '-' + m + '-' + d
        }

        const currentDate = formatDate(new Date()) //目前日期
        const maxDate = getMaxDate(currentDate)

        new Cleave('.enterDurTime>input', {
            numeral: true,
            //整數最大輸入多少
            numeralIntegerScale: 3,
            numeralDecimalScale: 0,
        })

        //表單 格式限制設定
        new Cleave('.customDate input', {
            date: true,
            datePattern: ['Y', 'm', 'd'],
            //要以下面的格式才可以接收
            delimiter: '-',
            dateMin: `${currentDate}`,
            dateMax: `${maxDate}`,
        })

        new Cleave('.goalWeight input', {
            numeral: true,
            numeralIntegerScale: 3,
            numeralDecimalScale: 0,
        })
    },
})

Vue.component('status-order', {
    template: `
        <div class="statusOrder">
            <div>
                <button 
                    class="nc-btn"
                    @click="toggleStatusOrder">Status of the Order
                    <img src="./icon/down.svg">
                </button>

                <form>
                    <input 
                        type="text" 
                        placeholder="Eenter Name"
                        v-model="search">

                    <button class="nc-btn" type="button">
                        <img src="./icon/magnifier.png">
                    </button>
                </form>
            </div>
            
            <div class="listBody">
                <div class="card ">

                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID Number</th>
                                <th>Time</th>
                                <th>detail</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr 
                                v-for="order in filteredList"
                                @click="showDetail">

                                <td data-label="ID">
                                    {{order.orderNo}}
                                </td>

                                <td data-label="TIME">
                                    {{order.orderDate.slice(5,10)}}
                                </td>

                                <td data-label="DETAIL">
                                    {{order.fdName}}--{{order.quantity}}
                                </td>

                                <td data-label="PRICE">
                                    NT$ 
                                    {{order.total}} 
                                </td>
                                
                                <td data-label="STATUS">
                                    {{order.orderState == '1' ? '已付款' : '已出貨'}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 原本style 必須是none 以外才有動作 -->
            <order-detail
                v-show="orderDetailOpen"></order-detail>

        </div> 
    `,
    data() {
        return {
            search: '',
            orderList: [
                {
                    ID: 32898843,
                    TIME: '2020/02/21',
                    PRICE: '200',
                    STATUS: 'ARRIVAL',

                    name: 'vegetables',
                    qty: 2,
                },
                {
                    ID: 88433289,
                    TIME: '2021/12/11',
                    PRICE: '400',
                    STATUS: 'CANCEL',

                    name: 'chocolate bar',
                    qty: 1,
                },
                {
                    ID: 88984332,
                    TIME: '2021/12/11',
                    PRICE: '400',
                    STATUS: 'CANCEL',

                    name: 'banna juice',
                    qty: 1,
                },
                {
                    ID: 32888439,
                    TIME: '2021/12/11',
                    PRICE: '400',
                    STATUS: 'CANCEL',

                    name: 'Apple juice',
                    qty: 1,
                },
            ],

            orderDetail: null,
            orderDetailOpen: false,
        }
    },
    methods: {
        showDetail() {
            // this.orderDetail.style.display = 'flex'
            this.orderDetailOpen = !this.orderDetailOpen
        },

        toggleStatusOrder() {
            const listBody = document.querySelector('.statusOrder>.listBody')
            const card = document.querySelector('.statusOrder>.listBody>div')

            listBody.style.height = `${card.clientHeight}px`
            if (listBody.clientHeight > 0) {
                listBody.style.height = 0
            } else {
                listBody.style.height = `${card.clientHeight}px`
            }
        },
    },
    mounted() {
        this.orderDetail = select('.orderDetail')
    },
    computed: {
        filteredList() {
            return this.orderListData.filter((post) => {
                return post.fdName.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        ...mapState(['orderListData']),
    },
})

Vue.component('fav-poster', {
    template: `
        <div class="favPoster">
            <div>
                <button 
                    class="nc-btn"
                    @click="toggleFavPoster">Favorites poster
                    
                    <img src="./icon/down.svg">
                </button>

                <form>
                    <input 
                        type="text" 
                        placeholder="Enter Name"
                        v-model="search">

                    <button class="nc-btn" type="button">
                        <img src="./icon/magnifier.png">
                    </button>
                </form>
            </div>

            <div class="listBody">
                <div class="card">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>poster type</th>
                                <th>poster name</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(post,i) in filteredList">
                                <td data-label="TYPE">{{post.TYPE}}</td>
                                <td data-label="NAME">{{post.NAME}}</td>

                                <td>
                                    <a 
                                        class="l-btn" 
                                        :href="post.href">
                                        CHECK POST
                                    </a>
                                </td>
                                
                                <td>
                                    <button 
                                        class="l-btn"
                                        @click="deletPost(i)">DELETE
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>

                </div>
            </div>
            
        </div>
    `,

    data() {
        return {
            search: '',
            posterList: [
                {
                    TYPE: 'health',
                    NAME: 'Eat and Fit',

                    href: './info_content.html',
                },
                {
                    TYPE: 'excrice',
                    NAME: 'ease excrice',

                    href: './info_content.html',
                },
                {
                    TYPE: 'get fatness',
                    NAME: 'how to eat',

                    href: './info_content.html',
                },
                {
                    TYPE: 'excrice',
                    NAME: 'ease excrice',

                    href: './info_content.html',
                },
            ],
        }
    },
    methods: {
        deletPost(i) {
            //刪除item
            this.posterList.splice(i, 1)
        },
        toggleFavPoster() {
            const listBody = document.querySelector('.favPoster>.listBody')
            const card = document.querySelector('.favPoster>.listBody>div')

            listBody.style.height = `${card.clientHeight}px`
            if (listBody.clientHeight > 0) {
                listBody.style.height = 0
            } else {
                listBody.style.height = `${card.clientHeight}px`
            }
        },
    },
    computed: {
        filteredList() {
            return this.posterList.filter((post) => {
                return post.NAME.toLowerCase().includes(this.search.toLowerCase())
            })
        },
    },
})


//是 second-info 的child
Vue.component('report-body', {
    template: `
        <div class="reportBody">
            <div class="card">

                <div>
                    <select 
                        name="month"
                        @change="changeReport">
                        <option value="now">This Month</option>
                        <option value="last">Last Month</option>
                    </select>
                </div>

                <div class="rePortBtns">

                    <button 
                        class="l-btn o-3"
                        @click="showExerceReport">
                        Exercise
                    </button>

                    <button 
                        class="l-btn"
                        @click="showCalReport">
                        cal
                    </button>

                    <button 
                        class="l-btn"
                        @click="showWeightReport">
                        weight
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
    `,
    data() {
        return {
            //template 的圖表
            barCContainer: null,
            pieCContainer: null,
            lineCContainer: null,
            rePortBtns: null,

            selectedOption: null,

            checkCContainer(container, id) {
                if (container.children[1]) {
                    const removeBeforeElCanvas = select(`#${id}Chart`)
                    const removeBeforeEldiv = select(`.${id}CContainer .chartjs-size-monitor`)
                    removeBeforeElCanvas.remove()
                    removeBeforeEldiv.remove()
                    const newChart = document.createElement('canvas')
                    newChart.id = `${id}Chart`
                    newChart.width = '10'
                    newChart.height = '10'
                    container.appendChild(newChart)
                }
            },
        }
    },
    mounted() {
        this.barCContainer = select('.barCContainer')
        this.pieCContainer = select('.pieCContainer')
        this.lineCContainer = select('.lineCContainer')
        this.rePortBtns = [...select('.reportBody .rePortBtns').children]

        this.selectedOption = select('.reportBody select[name="month"]')
    },
    methods: {
        showExerceReport() {
            this.barCContainer.style.display = 'block'
            this.pieCContainer.style.display = 'none'
            this.lineCContainer.style.display = 'none'

            this.rePortBtns[0].classList.add('o-3')
            this.rePortBtns[1].classList.remove('o-3')
            this.rePortBtns[2].classList.remove('o-3')

            //偵測 container 裡面是否有值,有的話刪除並新增
            this.checkCContainer(this.barCContainer, 'bar')

            if (this.selectedOption.value == 'now') {
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
            } else if (this.selectedOption.value == 'last') {
                const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000
                const lastMonth = Date.parse(new Date()) - 56 * 24 * 60 * 60 * 1000

                const filterEData = this.eData.filter((data) => {
                    return Date.parse(data.spTime) > lastMonth && Date.parse(data.spTime) < thisMonth
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
            }
        },
        showCalReport() {
            this.barCContainer.style.display = 'none'
            this.pieCContainer.style.display = 'block'
            this.lineCContainer.style.display = 'none'

            this.rePortBtns[0].classList.remove('o-3')
            this.rePortBtns[1].classList.add('o-3')
            this.rePortBtns[2].classList.remove('o-3')

            //偵測 container 裡面是否有值,有的話刪除並新增
            this.checkCContainer(this.pieCContainer, 'pie')

            if (this.selectedOption.value == 'now') {
                const labelArray = this.nowCData.map((data) => {
                    switch (data.dtPd) {
                        case '1':
                            return 'BREAKFAST'
                        case '2':
                            return 'LUNCH'
                        case '3':
                            return 'DINNER'
                    }
                })
                const dataArray = this.nowCData.map((data) => data.dtCalTal)

                const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
                    type: 'doughnut',
                    data: {
                        labels: labelArray,
                        datasets: [
                            {
                                backgroundColor: ['#9F1600', '#D25541', '#ff826e'],
                                data: dataArray,
                            },
                        ],
                    },
                    options: {
                        animation: {
                            duration: 2000,
                        },
                    },
                })
            } else if (this.selectedOption.value == 'last') {
                const labelArray = this.lastCData.map((data) => {
                    switch (data.dtPd) {
                        case '1':
                            return 'BREAKFAST'
                        case '2':
                            return 'LUNCH'
                        case '3':
                            return 'DINNER'
                    }
                })
                const dataArray = this.lastCData.map((data) => data.dtCalTal)

                const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
                    type: 'doughnut',
                    data: {
                        labels: labelArray,
                        datasets: [
                            {
                                backgroundColor: ['#9F1600', '#D25541', '#ff826e'],
                                data: dataArray,
                            },
                        ],
                    },
                    options: {
                        animation: {
                            duration: 2000,
                        },
                    },
                })
            }
        },
        showWeightReport() {
            this.barCContainer.style.display = 'none'
            this.pieCContainer.style.display = 'none'
            this.lineCContainer.style.display = 'block'

            this.rePortBtns[0].classList.remove('o-3')
            this.rePortBtns[1].classList.remove('o-3')
            this.rePortBtns[2].classList.add('o-3')

            //偵測 container 裡面是否有值,有的話刪除並新增
            this.checkCContainer(this.lineCContainer, 'line')

            if (this.selectedOption.value == 'now') {
                const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000

                const filterWData = this.wData.filter((data) => {
                    return Date.parse(data.wDate) > thisMonth
                })

                const labelArray = filterWData.map((data) => data.wDate.slice(5))
                const dataArray = filterWData.map((data) => data.wWeight)

                // console.log('labelArray' + labelArray)
                // console.log('dataArray' + dataArray)
                const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
                    // The type of chart we want to create
                    type: 'line',

                    // The data for our dataset
                    data: {
                        labels: labelArray,
                        datasets: [
                            {
                                label: 'WEIGHT',
                                backgroundColor: 'transparent',
                                borderColor: '#2274A5',
                                data: dataArray,
                                borderCapStyle: 'round',
                                lineTension: 0.1,
                            },
                        ],
                    },
                    options: {
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
            } else if (this.selectedOption.value == 'last') {
                const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000
                const lastMonth = Date.parse(new Date()) - 56 * 24 * 60 * 60 * 1000
                const filterWData = this.wData.filter((data) => {
                    return Date.parse(data.wDate) > lastMonth && Date.parse(data.wDate) < thisMonth
                })

                const labelArray = filterWData.map((data) => data.wDate.slice(5))
                const dataArray = filterWData.map((data) => data.wWeight)

                const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
                    // The type of chart we want to create
                    type: 'line',

                    // The data for our dataset
                    data: {
                        labels: labelArray,
                        datasets: [
                            {
                                label: 'WEIGHT',
                                backgroundColor: 'transparent',
                                borderColor: '#2274A5',
                                data: dataArray,
                                borderCapStyle: 'round',
                                lineTension: 0.1,
                            },
                        ],
                    },
                    options: {
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
            }
        },

        changeReport(){
            const position = select('.rePortBtns .o-3').textContent.trim()
            
            switch (position){
                case 'Exercise':
                    this.checkCContainer(this.barCContainer, 'bar')
                    if (this.selectedOption.value == 'now') {
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
                    } else if (this.selectedOption.value == 'last') {
                        const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000
                        const lastMonth = Date.parse(new Date()) - 56 * 24 * 60 * 60 * 1000

                        const filterEData = this.eData.filter((data) => {
                            return Date.parse(data.spTime) > lastMonth && Date.parse(data.spTime) < thisMonth
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
                    }
                    break;
                case 'cal':
                    this.checkCContainer(this.pieCContainer, 'pie')

                    if (this.selectedOption.value == 'now') {
                        const labelArray = this.nowCData.map((data) => {
                            switch (data.dtPd) {
                                case '1':
                                    return 'BREAKFAST'
                                case '2':
                                    return 'LUNCH'
                                case '3':
                                    return 'DINNER'
                            }
                        })
                        const dataArray = this.nowCData.map((data) => data.dtCalTal)

                        const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
                            type: 'doughnut',
                            data: {
                                labels: labelArray,
                                datasets: [
                                    {
                                        backgroundColor: ['#9F1600', '#D25541', '#ff826e'],
                                        data: dataArray,
                                    },
                                ],
                            },
                            options: {
                                animation: {
                                    duration: 2000,
                                },
                            },
                        })
                    } else if (this.selectedOption.value == 'last') {
                        const labelArray = this.lastCData.map((data) => {
                            switch (data.dtPd) {
                                case '1':
                                    return 'BREAKFAST'
                                case '2':
                                    return 'LUNCH'
                                case '3':
                                    return 'DINNER'
                            }
                        })
                        const dataArray = this.lastCData.map((data) => data.dtCalTal)

                        const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
                            type: 'doughnut',
                            data: {
                                labels: labelArray,
                                datasets: [
                                    {
                                        backgroundColor: ['#9F1600', '#D25541', '#ff826e'],
                                        data: dataArray,
                                    },
                                ],
                            },
                            options: {
                                animation: {
                                    duration: 2000,
                                },
                            },
                        })
                    }
                    break;
                case 'weight':
                    this.checkCContainer(this.lineCContainer, 'line')

                    if (this.selectedOption.value == 'now') {
                        const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000

                        const filterWData = this.wData.filter((data) => {
                            return Date.parse(data.wDate) > thisMonth
                        })

                        const labelArray = filterWData.map((data) => data.wDate.slice(5))
                        const dataArray = filterWData.map((data) => data.wWeight)

                        // console.log('labelArray' + labelArray)
                        // console.log('dataArray' + dataArray)
                        const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
                            // The type of chart we want to create
                            type: 'line',

                            // The data for our dataset
                            data: {
                                labels: labelArray,
                                datasets: [
                                    {
                                        label: 'WEIGHT',
                                        backgroundColor: 'transparent',
                                        borderColor: '#2274A5',
                                        data: dataArray,
                                        borderCapStyle: 'round',
                                        lineTension: 0.1,
                                    },
                                ],
                            },
                            options: {
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
                    } else if (this.selectedOption.value == 'last') {
                        const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000
                        const lastMonth = Date.parse(new Date()) - 56 * 24 * 60 * 60 * 1000
                        const filterWData = this.wData.filter((data) => {
                            return Date.parse(data.wDate) > lastMonth && Date.parse(data.wDate) < thisMonth
                        })

                        const labelArray = filterWData.map((data) => data.wDate.slice(5))
                        const dataArray = filterWData.map((data) => data.wWeight)

                        const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
                            // The type of chart we want to create
                            type: 'line',

                            // The data for our dataset
                            data: {
                                labels: labelArray,
                                datasets: [
                                    {
                                        label: 'WEIGHT',
                                        backgroundColor: 'transparent',
                                        borderColor: '#2274A5',
                                        data: dataArray,
                                        borderCapStyle: 'round',
                                        lineTension: 0.1,
                                    },
                                ],
                            },
                            options: {
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
                    }
                    break;
            }
        }
    },
    computed: {
        ...mapState(['eData', 'nowCData', 'lastCData', 'wData']),
    },
})