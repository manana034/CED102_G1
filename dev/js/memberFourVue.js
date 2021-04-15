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
                            <p><span>{{mHeight}}</span></p>
                        </div>
                    </div>

                    <div class="r-side">
                        <div>
                            <img src="./icon/weight.svg" />
                            <p><span>{{wWeight}}</span></p>
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
                            <p>{{getCalPerDay}}</p>
                            <span>daliy cal</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block">
                <div>
                    <button class="l-btn createGoal">
                        <img src="./icon/pen.svg" />
                        create goal
                    </button>

                     <button class="l-btn editGoal">
                        <img src="./icon/pen.svg" />
                        edit goal
                    </button>

                    <button class="l-btn finishGoal">
                        finish goal
                    </button>

                </div>
            </div>
 
        </div>
    `,
    data() {
        return {}
    },
    mounted() {
        new Cleave('.goalWeight input', {
            numeral: true,
            numeralIntegerScale: 3,
            numeralDecimalScale: 1,
        })

        let Vthis = this;
        passValueVue.$on('check-goalWeight', () => {
            const time = setTimeout(() => {
                const label = select('.goalBody .goalWeight label')
                const input = label.children[0]
                const img = label.children[1]

                const createGoal = select('.createGoal')
                const editGoal = select('.editGoal')
                const finishGoal = select('.finishGoal')

                console.log('一開始登入可能沒值')
                //檢查有設目標體重
                if (input.value) {

                    console.log(input.value+'有時候可以有時候吃不到??')
                    label.style.backgroundColor = '#EAA565'
                    img.style.opacity = 0

                    input.setAttribute('readonly', true)

                    createGoal.style.display = 'none'
                    finishGoal.style.display = 'none'
                    editGoal.removeAttribute('style')

                    if (Date.parse(new Date()) >= Date.parse(Vthis.mGoalE)) {
                        editGoal.style.display = 'none'
                        finishGoal.removeAttribute('style')
                    }
                } else {
                    label.removeAttribute('style')
                    img.removeAttribute('style')
                    input.removeAttribute('readonly')

                    createGoal.removeAttribute('style')
                    editGoal.style.display = 'none'
                    finishGoal.style.display = 'none'
                }

                clearTimeout(time)
            }, 100)
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
    },

    computed: {
        ...mapGetters(['getAge', 'getBMR', 'getSex', 'getCalPerDay']),
        ...mapState(['wWeight', 'mHeight', 'mGoalW', 'goalType', 'mGoalE']),
    },

})
