


//vue 第三層------

//是 edit-person 的child
Vue.component('profile-body', {
    template: `
        <div class="profileBody">
            <div class="row-1">
                <h4>edit profile</h4>
            </div>
            <form 
                class="row-2"
                id="profileForm">

                <input name="mNo" :value="mNo" hidden>

                <label class="protrait">
                    <input 
                        type="file" 
                        name="protraitImg"
                        :value = "imgSrc"
                        @change="getImg"
                        hidden>

                    <div>
                        <img :src="mImg?mImg : './icon/upfile.png' ">
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
                        maxlength="10">
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

            protraitImg: '',
            imgSrc: '',

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
            let choiceSex = [...this.mSexinputs].filter((input) => input.checked == true)[0]
            //一開始先選 哪個為checked 如果沒有 直接.value 會報錯

            choiceSex ? choiceSex.value : choiceSex

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
  
                this.$store.commit('updateHeight', this.mHeightInput.value)

                this.$store.commit('updateMail', this.mMailInput.value)
                this.$store.commit('updatePhone', this.mPhoneInput.value)
                this.$store.commit('updateIntro', this.mIntroInput.value)

                this.$store.commit('updateImg', this.mImgInput.src)

                function updateProfile() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = function () {
                        console.log(xhr.responseText)
                    }
                    xhr.open('POST', 'php/updateProfile.php', true)
                    let data_info = new FormData(select('#profileForm'))
                    xhr.send(data_info)
                }

                function updataMWeight() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = function () {
                        console.log(xhr.responseText)
                        if(xhr.responseText !== "更新成功"){
                            alert('每天只能更新一次')
                        }
                    }
                    xhr.open('POST', 'php/updateWeight.php', true)
                    let data_info = new FormData(select('#profileForm'))
                    xhr.send(data_info)
                }

                function updataMemberImg() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = function () {
                        console.log(xhr.responseText)
                    }
                    xhr.open('POST', 'php/updateMemberImg.php', true)
                    let data_info = new FormData(select('#profileForm'))
                    xhr.send(data_info)
                } 

                //如果體重 Vuex的資料 跟 現場資料不一樣 
                //才做更新
                if (this.wWeight !== this.wWeightInput.value) {
                    this.$store.commit('updateWeight', this.wWeightInput.value)
                    updataMWeight()
                }
  
 

                // updataMWeight()
                updateProfile()
                updataMemberImg()

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
        // new Cleave('.profileBody label.phone>input', {
        //     blocks: [2, 4, 4],
        //     // delimiter: '-',
        //     //無法一起 使用
        //     // phone: true, // 電話模式
        //     // phoneRegionCode: 'tw', // 需仔入 taiwan 的cdn
        // })
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
            'mNo',

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
//時間的部分在這裡
Vue.component('goal-body', {
    template: `
        <form class="card goalBody">
            <div class="goal-row-1">
                <p>start Date</p>
                <div class="dateLine">
                    <div 
                        class="crrentLine"
                        :style="{'width': setCurrentTimeBar + '%'}">
                        <p id="moveDate">
                            {{getCurrentDate}}
                        </p>
                    </div>
                </div>

                <p>end date</p>
            </div>

            <div class="goal-row-2">
                <p class="starDate">
                    {{mGoalS}}
                </p>

                <p class="endDate">
                    {{mGoalE}}
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

                <div class="restDay">
                    <p>Rest Day</p>
                    <div>{{getRestDay}}</div> 
                </div> 
            </div>

            <bottom-info></bottom-info>

        </form>
    `,
    data() {
        return {
            goalTime: '',
            customEndDate: '',


            //以下為 function
            checkGoalTimeState: null,
            resetTimeBar: null,
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
    },

    computed: {
        getCurrentDate() {
            const m = new Date().getMonth()
            const d = new Date().getDate()

            return `${m + 1}-${d}`
        },

        setCurrentTimeBar() {

            const s = Date.parse(this.mGoalS)
            const e = Date.parse(this.mGoalE)
            const now = Date.parse(new Date())

            const all = e - s //分母
            const n = now - s //分子

            const nInAll = n / all

            if (nInAll >= 1) {
                return 100
            } else if (!nInAll) {
                //如果他不是 數字的話
                return 0
            } else {
                return nInAll * 100
            }
        },

        getRestDay() {
            const y = new Date().getFullYear()
            const m = new Date().getMonth()
            const d = new Date().getDate()

            const now = `${y}-${m + 1}-${d}`
            if (Date.parse(now) >= Date.parse(this.mGoalE)) {
                return 0
            } else {
                const rest = Date.parse(this.mGoalE) - Date.parse(now)
                return parseInt(rest / 1000 / 60 / 60 / 24)
            }
        },

        ...mapState(['mGoalE', 'mGoalS', 'mGoalW']),
    },

    mounted() {
        let formatDate = function (date) {
            let y = date.getFullYear()
            let m = date.getMonth() + 1
            m = m < 10 ? '0' + m : m
            let d = date.getDate()
            d = d < 10 ? '0' + d : d
            return y + '-' + m + '-' + d
        }
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

        const nd = new Date(Date.parse(currentDate)+(1000*60*60*24*30))
        const y = nd.getFullYear()
        const m = nd.getMonth()+1
        const d = nd.getDate()
        const minDate = `${y}-${m}-${d}`

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
            dateMin: `${minDate}`,
            dateMax: `${maxDate}`,
        })

        //將全域變數帶入
        this.checkGoalTimeState = ()=>{
            console.log('確認是否傳到這')

            const durationTime = select('.durationTime')
            const customDate = select('.customDate')
            const restDay = select('.restDay')
            // const currentLine = select('.crrentLine')

            if (this.mGoalE && this.mGoalE !== '--') {
                //如果 有值 還要 不等於'--'
                //就會 -> 選項消失 出現剩餘天數
                durationTime.style.display = 'none'
                customDate.style.display = 'none'
                restDay.removeAttribute('style')
            } else {  
                durationTime.removeAttribute('style')
                customDate.removeAttribute('style')
                restDay.style.display = 'none'
                
            }

        }

        passValueVue.$on('check-goalTime', () => {
            const time = setTimeout(() => {
                this.checkGoalTimeState()
                clearTimeout(time)
            }, 100)
        })
        passValueVue.$on('clear-time',()=>{
            this.checkGoalTimeState()
        })

        passValueVue.$on('create-goal', (inputEl, checkGoalWeightFun) => {
            const y = new Date().getFullYear()
            const m = new Date().getMonth() + 1
            const d = new Date().getDate()

            const now = `${y}-${m}-${d}` 
            const Vthis = this

            //確認下面的if goaltime 才送出table
            function updateGoalTime_Weight(){
                
                let xhr = new XMLHttpRequest()
                xhr.onload = function(){
                    console.log(xhr.responseText)
                }
                xhr.open(
                    'GET',
                    `php/updateGoalTime_Weight.php?mNo=${getTmp_mNo}&mGoalW=${Vthis.mGoalW}&mGoalS=${Vthis.mGoalS}&mGoalE=${Vthis.mGoalE}`
                )
                xhr.send(null)
            }

            if (this.goalTime || this.customEndDate) {
                //兩個其中有值
                if (inputEl.value) {
                    //將Vuex 的內容mGoalS mGoalE mGoalW 都規程零
                    //送出Vuex 會需要點時間
                    Vthis.$store.commit('updataGoalStart', now)
                    // Vthis.$store.commit('updataGoalEnd', this.goalTime ? this.goalTime : this.customEndDate)
                    if (this.goalTime) {
                        //如果是goalTime 有值
                        let nowDate = Date.parse(now)
                        let addDate = this.goalTime * 1000 * 60 * 60 * 24
                        let endDate = nowDate + addDate

                        let iy = new Date(endDate).getFullYear()
                        let im = new Date(endDate).getMonth() + 1
                        let id = new Date(endDate).getDate()

                        this.$store.commit('updataGoalEnd', `${iy}-${im}-${id}`)
                    } else {
                        //customEndDate 的值直接傳給Vuex
                        console.log(this.customEndDate)
                        this.$store.commit('updataGoalEnd', this.customEndDate)
                    }
                    //傳目標體重的 value
                    Vthis.$store.commit('updataGoalWeight', inputEl.value)

                    //將值送去給table
                    updateGoalTime_Weight()

                } else {
                    //inputEl沒有填值
                    alert('請輸入日期、體重')
                }
            } else {
                //兩個均沒有值
                alert('請輸入日期、體重')
            }

            //檢查GoaTimel 是否有值
            //查看GoalWeight 目前是甚麼狀態
            const time = setTimeout(() => {
                this.checkGoalTimeState()
                //來自memberFourVue 的method
                //將goalWeight 無法更動變成readonly
                checkGoalWeightFun()
                console.log('可以讓這裡執行 執行其他method 的function')
                clearTimeout(time)
            }, 100)

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
                        @input="checkList"
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
                                    {{order.fdName}}--{{order.qty}}
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
                v-show="orderDetailOpen"
                @close-detail="closeDetail"
                :detail-data="detailData">
            </order-detail>

        </div> 
    `,
    data() {
        return {
            search: '',

            orderStateListEl: null,
            orderStateLine: null,

            orderDetail: null,
            orderDetailOpen: false,

            detailData: [],
        }
    },
    mounted() {
        this.orderDetail = select('.orderDetail')
        this.orderStateListEl = select('.statusOrder tbody')
        this.orderStateLine = select('.statusOrder thead')
    },
    methods: {
        showDetail(e) {
            const id = e.target.parentElement.children[0].textContent.trim()
            this.detailData = this.orderListData.filter((item) => item.orderNo == id)

            this.orderDetailOpen = !this.orderDetailOpen
        },
        closeDetail() {
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
        checkList() {
            if (!this.orderStateListEl.children[0]) {
                this.orderStateLine.style.borderBottom = 'none'
            } else {
                this.orderStateLine.removeAttribute('style')
            }
        },
    },

    computed: {
        filteredList() {
            // console.log(this.orderData.length)
            if (this.orderData.length){
                console.log('orderData 成功抓取')
                return this.orderData.filter((post) => {
                    return post.fdName.toLowerCase().includes(this.search.toLowerCase())
                })
            } else{
                console.log('orderData 抓取失敗')
                return {}
            }

        },

        ...mapState(['orderData', 'orderListData']),
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
                        @input="checkList"
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
                                <td data-label="TYPE">
                                    {{post.infoType=='1'?'Food':post.infoType=='2'?'Exercise':'Heath'}}
                                </td>
                                
                                <td data-label="NAME">
                                    {{post.infoTitle.slice(0,10)+'...'}}
                                </td>

                                <td>
                                    <a 
                                        class="l-btn"
                                        @click="toFavPost(post)">
                                        CHECK POST
                                    </a>
                                </td>
                                
                                <td>
                                    <button 
                                        class="l-btn"
                                        @click="deletPost(i,post.infoNo)">DELETE
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

            favListEl: null,
            favListLine: null,
        }
    },
    mounted() {
        this.favListEl = select('.favPoster tbody')
        this.favListLine = select('.favPoster thead')
    },
    methods: {
        deletPost: async function (i, infoNo) {
            this.favListData.splice(i, 1)

            const res = await fetch('./php/deleteFavPoster.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'infoNo': infoNo,
                    'mNo': getTmp_mNo,
                }),
            }).then(res => {console.log(res)})

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

        checkList() {
            if (!this.favListEl.children[0]) {
                this.favListLine.style.borderBottom = 'none'
            } else {
                this.favListLine.removeAttribute('style')
            }
        },

        toFavPost(target) {
            sessionStorage.setItem('infoNo', target.infoNo)
            //跳轉到別的頁面
            window.location.href = './info_content.html'
        },
    },
    computed: {
        filteredList() {
            if (this.favListData.length) {
                console.log('favOrder 抓取成功')
                return this.favListData.filter((post) => {
                    return post.infoTitle.toLowerCase().includes(this.search.toLowerCase())
                })
            } else {
                console.log('favOrder 抓取失敗')
                return {}
            }
        },

        ...mapState(['favListData']),
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
                let labelArray, dataArray
                
                //來判斷 是否有無內容 有就裝載資料
                if(this.nowCData.length){
                    labelArray = this.nowCData.map((data) => {
                        switch (data.dtPd) {
                            case '1':
                                return 'BREAKFAST'
                            case '2':
                                return 'LUNCH'
                            case '3':
                                return 'DINNER'
                        }
                    })
                    dataArray = this.nowCData.map((data) => data.dtCalTal)
                }

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
                let labelArray, dataArray
                if(this.lastCData.length){
                    labelArray = this.lastCData.map((data) => {
                        switch (data.dtPd) {
                            case '1':
                                return 'BREAKFAST'
                            case '2':
                                return 'LUNCH'
                            case '3':
                                return 'DINNER'
                        }
                    })
                    dataArray = this.lastCData.map((data) => data.dtCalTal)
                }
                
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
                let filterWData, labelArray, dataArray
                const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000

                if (this.wData.length){
                    filterWData = this.wData.filter((data) => {
                        return Date.parse(data.wDate) > thisMonth
                    })

                    labelArray = filterWData.map((data) => data.wDate.slice(5))
                    dataArray = filterWData.map((data) => data.wWeight)
                }


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
                let filterWData, labelArray, dataArray
                const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000
                const lastMonth = Date.parse(new Date()) - 56 * 24 * 60 * 60 * 1000

                if (this.wData.length){
                    filterWData = this.wData.filter((data) => {
                        return Date.parse(data.wDate) > lastMonth && Date.parse(data.wDate) < thisMonth
                    })

                    labelArray = filterWData.map((data) => data.wDate.slice(5))
                    dataArray = filterWData.map((data) => data.wWeight)
                }
               

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
                        let labelArray, dataArray
                        if (this.nowCData.length){
                            labelArray = this.nowCData.map((data) => {
                                switch (data.dtPd) {
                                    case '1':
                                        return 'BREAKFAST'
                                    case '2':
                                        return 'LUNCH'
                                    case '3':
                                        return 'DINNER'
                                }
                            })
                            dataArray = this.nowCData.map((data) => data.dtCalTal)
                        }
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
                        let labelArray, dataArray

                        if (this.lastCData.length){
                            labelArray = this.lastCData.map((data) => {
                                switch (data.dtPd) {
                                    case '1':
                                        return 'BREAKFAST'
                                    case '2':
                                        return 'LUNCH'
                                    case '3':
                                        return 'DINNER'
                                }
                            })
                            dataArray = this.lastCData.map((data) => data.dtCalTal)
                        }

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
                        let filterWData, labelArray, dataArray
                        const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000

                        if (this.wData.length){
                            filterWData = this.wData.filter((data) => {
                                return Date.parse(data.wDate) > thisMonth
                            })
                            labelArray = filterWData.map((data) => data.wDate.slice(5))
                            dataArray = filterWData.map((data) => data.wWeight)
                        }
      
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
                        let filterWData, labelArray, dataArray

                        const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000
                        const lastMonth = Date.parse(new Date()) - 56 * 24 * 60 * 60 * 1000
                        if (this.wData.length){
                            filterWData = this.wData.filter((data) => {
                                return Date.parse(data.wDate) > lastMonth && Date.parse(data.wDate) < thisMonth
                            })

                            labelArray = filterWData.map((data) => data.wDate.slice(5))
                            dataArray = filterWData.map((data) => data.wWeight)
                        }

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



//是 login-signup 的child 這裡存放sign up
Vue.component('sign-up', {
    template: `
        <div class="signup">
            <h4>sign up</h4>
            <form action="">

                <label class="name">
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
                    <button 
                        class="p-btn" 
                        id="signup" 
                        type="button"
                        @click="signUpMember">
                        
                        sign up
                    </button>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            signUpLogin(mId,mPsw,mNo){
                this.$store.commit('toggleLoginBeforeAfter')

                let Vthis = this
                function getMemberData() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function checkMember(data) {
                            let member = JSON.parse(data)

                            //寫入 VueX
                            Vthis.$store.commit({
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
                        }
                        checkMember(xhr.responseText)

                        function getMFavPosterData(mNo) {
                            let xhr = new XMLHttpRequest()
                            xhr.onload = () => {
                                function updataMFavPosterData(data) {
                                    let favData = JSON.parse(data)
                                    Vthis.$store.commit('updataFavPosterData', favData)
                                }
                                updataMFavPosterData(xhr.responseText)
                            }
                            xhr.open('post', 'php/getFavPosterData.php', true)

                            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                            let data_info = `mNo=${mNo}`
                            xhr.send(data_info)
                        }
                        getMFavPosterData(JSON.parse(xhr.responseText).mNo)
                    }
                    xhr.open('post', 'php/login.php', true)
                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }

                function getMnoMidMpsw() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function updataMnoMidMpsw(data) {
                            if (data === '{}') {
                                console.log('此無帳號密碼')
                            } else {
                                let member = JSON.parse(data)
                                console.log(member)

                                Vthis.$store.commit({
                                    type: 'updateMemberInfo',

                                    mNo: member.mNo,
                                    mId: member.mId,
                                    mPsw: member.mPsw,
                                })
                            }
                        }
                        updataMnoMidMpsw(xhr.responseText)
                    }
                    xhr.open('post', 'php/getMnoMidMpsw.php', true)
                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }

                function getMWeightDate() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function updataMWeightData(data) {
                            let wData = JSON.parse(data)

                            Vthis.$store.commit('updateWeightData', wData)
                        }
                        updataMWeightData(xhr.responseText)
                    }
                    xhr.open('post', 'php/getMWeightDate.php', true)

                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }

                function getMExerciseDate() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function updataMExerciseData(data) {
                            if (data === '{}') {
                                console.log('沒有weight體重資料')
                            } else {
                                let eData = JSON.parse(data)

                                Vthis.$store.commit('updataExerciseData', eData)
                            }
                        }
                        updataMExerciseData(xhr.responseText)
                        //載入好資料之後 就安裝一開始的Report

                        function firstSetReport() {
                            const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000

                            console.log(Vthis.eData)
                            const filterEData = Vthis.eData.filter((data) => {
                                return Date.parse(data.spTime) > thisMonth
                            })

                            const labelArray = filterEData.map((data) => data.spTime.slice(5))
                            const dataArray = filterEData.map((data) => data.spCalTal)

                            let barChart = new Chart(
                                document.getElementById('barChart').getContext('2d'),
                                {
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
                                }
                            )
                        }
                        const checkEData = setTimeout(() => {
                            if (Vthis.eData) {
                                firstSetReport()
                            }
                            clearTimeout(checkEData)
                        }, 10)
                    }
                    xhr.open('post', 'php/getMExerciseDate.php', true)

                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }

                function getMNowCalDate() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function updataMNowCalDate(data) {
                            let cData = JSON.parse(data)

                            Vthis.$store.commit('updataNowCalData', cData)
                        }
                        updataMNowCalDate(xhr.responseText)
                    }
                    xhr.open('post', 'php/getMNowCalData.php', true)

                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }

                function getMLastCalDate() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function updataMLastCalDate(data) {
                            let cData = JSON.parse(data)
                            Vthis.$store.commit('updataLastCalData', cData)
                        }
                        updataMLastCalDate(xhr.responseText)
                    }
                    xhr.open('post', 'php/getMLastCalData.php', true)

                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }

                //撈取 orderListData 的資料
                function getMOrderListData() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function updataMOrderListDate(data) {
                            let mOData = JSON.parse(data)
                            Vthis.$store.commit('updataOrderListDate', mOData)
                        }
                        updataMOrderListDate(xhr.responseText)
                    }
                    xhr.open('post', 'php/getOrderListData.php', true)

                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }
                //撈取 orderData 的資料
                function getMOrderData() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = () => {
                        function updataMOrderData(data) {
                            let mOData = JSON.parse(data)
                            Vthis.$store.commit('updataOrderData', mOData)
                        }
                        updataMOrderData(xhr.responseText)
                    }
                    xhr.open('post', 'php/getOrderData.php', true)

                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${mId}&memPsw=${mPsw}`
                    xhr.send(data_info)
                }

                //取得 當天攝取卡路里 資料
                function getMDailyCalData() {
                    function formatDate(date) {
                        let d = new Date(date),
                            month = '' + (d.getMonth() + 1),
                            day = '' + d.getDate(),
                            year = d.getFullYear()

                        if (month.length < 2) month = '0' + month
                        if (day.length < 2) day = '0' + day

                        return [year, month, day].join('-')
                    }
                    const now = formatDate(new Date())
                    fetch(`php/getDailyCal.php?mNo=${mNo}&curTime=${now}`)
                        .then((res) => res.json())
                        .then((res) =>
                            Vthis.$store.commit('updataDailyCalData', res.dailySumCal ? parseInt(res.dailySumCal) : 0)
                        )
                    //如果沒資料就回傳0
                }

               function checkOrderAndFavList() {
                   const listBody = selectAll('.listBody tbody')
                   const listHead = selectAll('.listBody thead')

                   if (listBody[0].children.length == 0) {
                       listHead[0].setAttribute('style', 'border-bottom: none')
                       console.log('orderlist 沒有內容')
                   } else {
                       listHead[0].removeAttribute('style')
                       console.log('oderlist 有內容')
                   }

                   //favlist 的table
                   if (listBody[1].children.length == 0) {
                       listHead[1].setAttribute('style', 'border-bottom: none')
                       console.log('favlist 沒有內容')
                   } else {
                       listHead[0].removeAttribute('style')
                       console.log('favlist 有內容')
                   }
               }

                getMemberData()
                //自動登入 執行這段
                getMnoMidMpsw()

                getMWeightDate()
                getMExerciseDate()
                getMNowCalDate()
                getMLastCalDate()

                getMOrderListData()
                getMOrderData()

                getMDailyCalData()
                

                const checkGoaltime = setTimeout(() => {
                    passValueVue.$emit('check-goalWeight')
                    passValueVue.$emit('check-goalTime')
                    checkOrderAndFavList()
                    clearTimeout(checkGoaltime)
                }, 300)
            }
        }
    },
    methods: {
        movePlaceholder(event, state) {
            const inputVal = event.target.value
            const placeholder = event.target.parentElement.children[0]
            const ta = event.target

            const signUpPsd = select('.under .signup .psd>input')
            const signUpCfmPsd = select('.under .signup .cfmPsd>input')

            //提示小字
            const span = select(`.signup .${ta.name} p>span`)

            if (state == 'focus') {
                //如果再focus 狀態 將會提升
                placeholder.style.top = '-20px'
                placeholder.style.transform = 'scale(.9)'

                span.textContent = '*'
                span.removeAttribute('style')

            } else if (state == 'blur') {
                //如果在blur 狀態
                if (!inputVal) {
                    //檢查裡面 是否有內容 ,沒有內容就會掉下來
                    placeholder.style.top = '-5px'
                    placeholder.style.transform = 'scale(1)'
                }

                if (ta.name == 'cfmPsd') {
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
                }

                if (ta.name == 'userid') {
                    // const span = select('.signup .userid p>span')
                    fetch(`php/checkMemberID.php?memid=${inputVal}`)
                        .then((res) => res.json())
                        .then((res) => {
                            // console.log(res.length)
                            if (!res.length) {
                                span.textContent = '* 可以使用該帳號'
                                span.setAttribute('style', 'color:green')
                            } else {
                                span.textContent = '已被使用'
                                span.setAttribute('style', 'color: red')
                            }
                        })
                }

                if(ta.name == 'email'){
                    if (inputVal){
                        emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/

                        if (inputVal.search(emailRule) != -1) {
                            span.textContent = '* 正確'
                            span.setAttribute('style', 'color:green')
                        } else {
                            span.textContent = '* 格式錯誤'
                            span.setAttribute('style', 'color:red')
                        }
                    } 
                }
            }
        },

        signUpMember() {
            const name = select('.signup .name input').value
            const email = select('.signup .email input').value
            const userid = select('.signup .userid input').value
            const psd = select('.signup .psd input').value
            const cfmPsd = select('.signup .cfmPsd input').value

            const mailSpan = select('.signup .email span').style.color
            const idSpan = select('.signup .userid span').style.color
            const psdSpan = select('.signup .psd span').style.color
            const cfmSpan = select('.signup .cfmPsd span').style.color


            //註冊成功 將直接登入
            if (name&&email&&userid&&psd&&cfmPsd) {
               if(mailSpan=='red'|| idSpan=='red'||psdSpan=='red'||cfmSpan=='red'){
                   alert('請輸入正確格式') 
               } else {
                   alert('恭喜加入FT.')

                   fetch(`php/createMAccount.php?mName=${name}&mId=${userid}&mPsw=${psd}&mMail=${email}`)
                   .then(res=>res.json())
                   .then(res=>{
                        const signUp_id = userid
                        const signUp_psd = psd
                        const signUp_mNo = res
                        console.log('signUp之後直接登入')

                        this.signUpLogin(signUp_id, signUp_psd, signUp_mNo)

                    })
               }
            } else{
                alert('請填寫帳戶資料')
            }
 
        },
    },
})