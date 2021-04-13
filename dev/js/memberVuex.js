

//共用
const select = (selector) =>{
    return document.querySelector(selector)
}
const selectAll = (selector) =>{
    return document.querySelectorAll(selector)
}


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

        wWeight: '',
        wDate: '',

        //report 的資料
        wData: [],
        eData: [],
        nowCData: [],
        lastCData: [],

        //order status的資料
        orderListData: [],
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

            state.wWeight = payload.wWeight
            state.wDate = payload.wDate
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
        updataOrderListDate(state,payload){
            state.orderListData = payload
        }
    },
    actions: {},
    getters: {},
})

// console.log(store.state)