
 


const store = new Vuex.Store({
    state: {
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
        mNo: '',

        wWeight: '',
        wDate: '',

        //report 的資料
        wData: [],
        eData: [],
        nowCData: [],
        lastCData: [],

        //order status的資料
        orderListData: [],
        orderData: [],

        //fav poster的資料
        favListData: [],

        //當日攝取卡路里資料 daily Cal
        dailySumCal: '',

        //登入畫面 與 登入後畫面切換
        loginBeforeAfter: true,
    },
    mutations: {
        //登入  抓取資料之後更新到Vuex
        updateStatus(state, payload) {
            // Object.keys(payload).forEach((key) => {
            //     if (payload[key]) {
            //         state[key] = payload[key]
            //     }
            // })

            state.goalType = payload.goalType
            state.loginDate = payload.loginDate
            state.mBday = payload.mBday
            state.mFoled = payload.mFoled
            state.mGoalE = payload.mGoalE
            state.mGoalS = payload.mGoalS
            state.mGoalW = payload.mGoalW
            state.mHeight = payload.mHeight
            state.mId = payload.mId
            state.mImg = payload.mImg
            state.mIntro = payload.mIntro
            state.mLevel = payload.mLevel
            state.mMail = payload.mMail
            state.mName = payload.mName
            state.mPhone = payload.mPhone
            state.mPoints = payload.mPoints
            state.mPsw = payload.mPsw
            state.mSex = payload.mSex
            state.mWriteD = payload.mWriteD
            state.mTotal = payload.mTotal
            state.mNo = payload.mNo

            state.wWeight = payload.wWeight
            state.wDate = payload.wDate
        },

        updateMemberInfo(state, payload) {
            state.mId = payload.mId
            state.mPsw = payload.mPsw
            state.mNo = payload.mNo
            state.mMail = payload.mMail 
        },

        //編輯 個人資訊
        updateMail(state, payload) {
            state.mMail = payload
        },
        updatePsw(state, payload) {
            state.mPsw = payload
        },
        updateBday(state, payload) {
            state.mBday = payload
        },
        updateSex(state, payload) {
            state.mSex = payload
        },
        updateWeight(state, payload) {
            state.wWeight = payload
        },
        updateHeight(state, payload) {
            state.mHeight = payload
        },
        updatePhone(state, payload) {
            state.mPhone = payload
        },
        updateIntro(state, payload) {
            state.mIntro = payload
        },
        updateImg(state, payload) {
            state.mImg = payload
        },

        //變更goal的的資料
        updataGoalStart(state, payload) {
            state.mGoalS = payload
        },
        updataGoalEnd(state, payload) {
            state.mGoalE = payload
        },
        updataGoalWeight(state, payload) {
            state.mGoalW = payload
        },

        //report 的資料
        updateWeightData(state, payload) {
            state.wData = payload
        },
        updataExerciseData(state, payload) {
            state.eData = payload
        },
        updataNowCalData(state, payload) {
            state.nowCData = payload
        },
        updataLastCalData(state, payload) {
            state.lastCData = payload
        },

        //status 的資料
        updataOrderListDate(state, payload) {
            state.orderListData = payload
        },
        updataOrderData(state, payload) {
            state.orderData = payload
        },

        //favPoster 的資料
        updataFavPosterData(state, payload) {
            state.favListData = payload
        },

        //每天daily Cal 的資料
        updataDailyCalData(state, payload) {
            state.dailySumCal = payload
        },

        //登入畫面切換
        toggleLoginBeforeAfter(state) {
            state.loginBeforeAfter = !state.loginBeforeAfter
        },

        updataMPoints(state,payload){
            state.mPoints = payload
        }
    },
    actions: {},
    getters: {
        getAge: (state) => {
            if (state.mBday) {
                const birth = Date.parse(state.mBday)
                const y = 1000 * 60 * 60 * 24 * 365
                const now = new Date()
                const birthday = new Date(birth)
                const age = parseInt((now - birthday) / y)
                return age
            } else {
                return '--'
            }
        },

        getBMR: (state, getters) => {
            if (state.wWeight && state.mHeight && getters.getAge !== '--') {
                const w = state.wWeight * 10
                const h = state.mHeight * 6.25
                const a = getters.getAge * 5 + 5

                return parseInt(w + h - a)
            } else {
                return '--'
            }
        },
        getSex: (state) => {
            if (state.mSex) {
                return state.mSex == '1' ? 'male' : 'female'
            } else {
                return '--'
            }
            // return state.mSex == '1' ? 'male' : 'female'
        },

        getCalPerDay: (state) => {
            const time = Date.parse(state.mGoalE) - Date.parse(state.mGoalS)
            const goalDuringDate = parseInt(time / (1000 * 60 * 60 * 24))

            if (goalDuringDate) {
                return parseInt((state.mGoalW * 7700) / goalDuringDate)
            } else {
                return '--'
            }
        },
    },
})

// console.log(store.state)