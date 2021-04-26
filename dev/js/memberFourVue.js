//用來傳遞 資料用的
const passValueVue = new Vue()


const mapState = Vuex.mapState
const mapMutations = Vuex.mapMutations
const mapActions = Vuex.mapActions
const mapGetters = Vuex.mapGetters

//是threeVue status-order 的兒子
//主要資料的部分在這裡
Vue.component('order-detail', {
    template: `
        <section class="orderDetail">
            <div class="bg"></div>
            <div class="detailBody">
                <button 
                    class="nc-btn"
                    @click="closeDetail">
                    <img src="./icon/close.svg">
                </button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>PRODID</th>
                            <th>Time</th>
                            <th>PROD NAME</th>
                            <th>QTY</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr v-for="data in detailData">
                                <td data-label="ID">
                                    {{data.prodNo}}
                                </td>
                                <td data-label="TIME">
                                    {{data.orderDate.slice(0,10)}}    
                                </td>
                                <td data-label="NAME">
                                    {{data.fdName}}
                                </td>
                                <td data-label="QTY">
                                    {{data.quantity}}
                                </td>
                            </tr>
                        </tbody>
                </table>

                <div class="total">
                    
                    <div>
                        <div>SUBTOTAL</div>
                        <div>NT$ {{this.detailData.length == 0 ? '--' : this.detailData[0].total}}</div>
                    </div>
                        
                    <div>
                        <div>USE POINTS</div>
                        <div>{{this.detailData.length == 0 ? '--' : this.detailData[0].usePoints}}</div>
                    </div>
                    
                    <div class="hr"></div>
                    <div>
                        <p>TOTAL</p>
                        <p>{{getTotal}}</p>
                    </div>
                </div>
            </div>

        </section>
    `,
    props: ['detail-data'],
    mounted() {
        console.log(this.detailData)
    },
    methods: {
        closeDetail() {
            this.$emit('close-detail')
        },
    },
    computed: {
        getTotal() {
            if (this.detailData.length == 0) {
                return 'empty'
            } else {
                return parseInt(this.detailData[0].total) - parseInt(this.detailData[0].usePoints)
            }
        },
    },
})

//是threeVue main-goal 的兒子
Vue.component('bottom-info', {
    template: `
        <div class="goal-row-4">
            <div class="block currentState">
                <p>current state</p>
                <div>
                    <div class="l-side">

                        <div>
                            <img src="./icon/gender.svg" />
                            <p>{{getSex}}</p>
                        </div>

                        <div>
                            <img src="./icon/age.svg" />
                            <p><span>{{getAge}}</span></p>
                        </div>
                        <div>
                            <img src="./icon/height.svg" />
                            <p><span>{{mHeight?mHeight:'--'}}</span></p>
                        </div>

                    </div>

                    <div class="r-side">
                        <div>
                            <img src="./icon/weight.svg" />
                            <p><span>{{wWeight?wWeight:'--'}}</span></p>
                        </div>
                        <div>
                            <img src="./icon/BMR.svg" />
                            <p><span>{{getBMR}}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block goalWeight">
                <p>goal weight</p>
                <label>
                    <input 
                        type="text"
                        :value="mGoalW"
                        maxlength="5"
                        @input="setGoalWeight"/>

                    <img src="./icon/pen.svg" />
                </label>
            </div>

            <div class="block restCal">
                <p>rest Calories</p>
                <div>
                    <div class="peopleInfoGraphic">
                        
                        <div 
                            class="tookCal"
                            :style ="'height:'+setCalPercent+'%'">
                        </div>
                        <p>
                            {{setCalPercent}}
                            <span>%</span>
                        </p>
                    </div>

                    <div class="infoNum">
                        <div class="row-1">
                            <p>{{getRestCalPerDay}}</p>
                            <span>rest cal</span>
                        </div>
                        <div class="hr"></div>
                        <div class="row-2">
                            <p>{{getCalPerDay}}</p>
                            <span>daliy cal</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block">
                <div>
                    <button 
                        class="l-btn createGoal"
                        type="button"
                        @click="createGoalBtn"
                        v-show="CBtnOpen">

                        <img src="./icon/pen.svg" />
                        create goal
                    </button>

        

                    <button 
                        class="l-btn editGoal"
                        type="button"
                        v-show="EBtnOpen"
                        @click="editGoalBtn">
                        
                        <img src="./icon/pen.svg" />
                        edit goal
                    </button>


                    <button 
                        class="l-btn createGoal"
                        type="button"
                        v-show="SBtnOpen"
                        @click="saveGoalBtn">
                        <img src="./icon/pen.svg" />

                        save
                    </button>

                    <button 
                        class="l-btn finishGoal"
                        type="button"
                        @click="finishGoalBtn"
                        v-show="FBtnOpen">

                        finish goal
                    </button>

                </div>
            </div>
 
        </div>
    `,
    data() {
        return {
            //先建立變數 mounted 之後就會寫入
            checkGoalWeightState: null,

            goalWeightInput: null,

            editSaveButtonState: null,

            FBtnOpen: true,
            SBtnOpen: true,
            EBtnOpen: true,
            CBtnOpen: true,
        }
    },
    mounted() {
        new Cleave('.goalWeight input', {
            numeral: true,
            numeralIntegerScale: 3,
            numeralDecimalScale: 1,
        })

        let Vthis = this

        //將變數 存入function 給大家做使用
        this.checkGoalWeightState = function () {
            const label = select('.goalBody .goalWeight label')
            const input = label.children[0]
            const img = label.children[1]

            const createGoal = select('.createGoal')
            const editGoal = select('.editGoal')
            const finishGoal = select('.finishGoal')

            console.log('測試看看別的地方有沒有收到')
            //檢查有設目標體重
            if (input.value) {
                console.log(input.value + '有時候可以有時候吃不到??')
                label.style.backgroundColor = '#EAA565'
                img.style.opacity = 0

                input.setAttribute('readonly', true)

                // createGoal.style.display = 'none'
                // finishGoal.style.display = 'none'
                // editGoal.removeAttribute('style')

                this.CBtnOpen = false
                this.FBtnOpen = false
                this.SBtnOpen = false
                this.EBtnOpen = true

                if (Date.parse(new Date()) >= Date.parse(Vthis.mGoalE)) {
                    // editGoal.style.display = 'none'
                    // finishGoal.removeAttribute('style')
                    this.EBtnOpen = false
                    this.SBtnOpen = false
                    this.CBtnOpen = false
                    this.FBtnOpen = true
                }
            } else {
                label.removeAttribute('style')
                img.removeAttribute('style')
                input.removeAttribute('readonly')

                // createGoal.removeAttribute('style')
                // editGoal.style.display = 'none'
                // finishGoal.style.display = 'none'

                this.FBtnOpen = false
                this.SBtnOpen = false
                this.EBtnOpen = false
                this.CBtnOpen = true
            }
        }

        this.editSaveButtonState = () => {
            console.log('變更編輯的狀態')
            const label = select('.goalBody .goalWeight label')
            const input = label.children[0]
            const editGoal = select('.editGoal')

            input.removeAttribute('readonly')
            editGoal.textContent = 'save'
        }

        this.goalWeightInput = select('.goalWeight input')

        passValueVue.$on('check-goalWeight', () => {
            const time = setTimeout(() => {
                this.checkGoalWeightState()
                clearTimeout(time)
            }, 500)
        })
    },
    methods: {
        setGoalWeight() {
            const label = document.querySelector('.goalBody .goalWeight label')
            const input = label.children[0]
            const img = label.children[1]

            if (input.value) {
                label.style.backgroundColor = '#EAA565'
                img.style.opacity = 0
            } else {
                label.removeAttribute('style')
                img.removeAttribute('style')
            }
        },

        finishGoalBtn() {
            //將Vuex 的內容mGoalS mGoalE mGoalW 都規程零
            //送出Vuex 會需要點時間
            const y = new Date().getFullYear()
            const m = new Date().getMonth()
            const d = new Date().getDate()

            this.$store.commit('updataGoalStart', `${y}-${m + 1}-${d}`)
            this.$store.commit('updataGoalEnd', '--')
            this.$store.commit('updataGoalWeight', '')

            //ajax 修改 table mGoalS mGoalE mGoalW 拿掉
            function updateGoalTime_Weight() {
                let xhr = new XMLHttpRequest()
                xhr.onload = function () {
                    console.log(xhr.responseText)
                }
                xhr.open('GET', `php/updateGoalTime_Weight.php?mNo=${getTmp_mNo}&mGoalW=null&mGoalS=null&mGoalE=null`)
                xhr.send(null)
            }
            updateGoalTime_Weight()

            // 將button 做切換 內容作變化
            setTimeout(() => {
                this.checkGoalWeightState()
            }, 300)
            passValueVue.$emit('clear-time')
        },

        //將 element 抓入當成value 寄出
        //讓 下一個compoent 一起處理
        createGoalBtn() {
            const goalW = select('.goalWeight input').value

            if (this.mHeight && this.wWeight && this.getSex !== '--' && this.getAge !== '--') {
                //傳到 memberThreeVue 進行動作
                passValueVue.$emit('create-goal', this.goalWeightInput, this.checkGoalWeightState)

                if (goalW) {
                    //button 變更成編輯
                    this.FBtnOpen = false
                    this.SBtnOpen = false
                    this.CBtnOpen = false
                    this.EBtnOpen = true
                }
                // this.editSaveButtonState()
            } else {
                alert('請先填上、生日、性別、體重、身高等資訊')
            }
        },

        editGoalBtn() {
            //隱藏button
            this.FBtnOpen = false
            this.CBtnOpen = false
            this.EBtnOpen = false
            this.SBtnOpen = true

            const label = select('.goalBody .goalWeight label')
            const input = label.children[0]
            const img = label.children[1]
            //可以 開始修改內容
            input.removeAttribute('readonly')
        },

        saveGoalBtn() {
            const label = select('.goalBody .goalWeight label')
            const input = label.children[0]
            const img = label.children[1]
            let Vthis = this

            if (input.value) {
                this.FBtnOpen = false
                this.CBtnOpen = false
                this.SBtnOpen = false
                this.EBtnOpen = true

                this.$store.commit('updataGoalWeight', input.value)
                input.setAttribute('readonly', true)

                //體重修改後 直接從Vuex 抓取
                //修改table 修改體重 其他抓之前的
                function updateGoalTime_Weight() {
                    let xhr = new XMLHttpRequest()
                    xhr.onload = function () {
                        console.log(xhr.responseText)
                    }
                    xhr.open(
                        'GET',
                        `php/updateGoalTime_Weight.php?mNo=${getTmp_mNo}&mGoalW=${Vthis.mGoalW}&mGoalS=${Vthis.mGoalS}&mGoalE=${Vthis.mGoalE}`
                    )
                    xhr.send(null)
                }
                updateGoalTime_Weight()
            } else {
                alert('請輸入目標體重')
            }
        },
    },

    computed: {
        ...mapGetters(['getAge', 'getBMR', 'getSex', 'getCalPerDay', 'getRestCalPerDay']),
        ...mapState(['wWeight', 'mHeight', 'mGoalW', 'goalType', 'mGoalE', 'dailySumCal', 'mGoalS']),
        // getCalPerDay - dailySumCal 就會等於 剩餘體重

        setCalPercent() {
            const percent = this.dailySumCal / this.getCalPerDay
            if (percent >= 1) {
                return 100
            } else if (!percent) {
                return 0
            } else {
                return parseInt(percent * 100)
            }
        },
    },
})
