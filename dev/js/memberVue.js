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

        // showMyAcount: false,
        // showLoginSignup: true,
    },
    store,
    methods: {
        changeStauts(isOpen) {
            this.openEditPerson = isOpen
        },
    },
    computed: {
        ...mapState(['loginBeforeAfter','eData']), 
    },
    mounted() {
        passValueVue.$on('leave-profile', () => {
            this.openEditPerson = !this.openEditPerson
        })
        passValueVue.$on('leave-account', () => {
            this.openEditPerson = !this.openEditPerson
        })

        //reload 之後一段時間 就會看看 mid 有沒有被寫入
        //如果有就自動登入 沒有就要自己登入
        const timeCheckLoggedin = setTimeout(() => {
            if (getTmp_mNo || getTmp_mId || getTmp_mPsw) {
                console.log(getTmp_mNo)
                console.log(getTmp_mId)
                console.log(getTmp_mPsw)

                //將登入畫面給取消掉 直接到主畫面
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
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
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
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
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
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
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
                        console.log(xhr.responseText)
                        //載入好資料之後 就安裝一開始的Report

                        function firstSetReport() {
                            const thisMonth = Date.parse(new Date()) - 28 * 24 * 60 * 60 * 1000

                            console.log(Vthis.eData)
                            const filterEData = Vthis.eData.filter((data) => {
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
                        }
                        const checkEData = setTimeout(()=>{
                            if (Vthis.eData) {
                                firstSetReport()
                            }
                            clearTimeout(checkEData)
                        },10)
                
                        
                    }
                    xhr.open('post', 'php/getMExerciseDate.php', true)

                    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
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
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
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
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
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
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
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
                    let data_info = `memid=${getTmp_mId}&memPsw=${getTmp_mPsw}`
                    xhr.send(data_info)
                }

                //取得 當天攝取卡路里 資料
                function getMDailyCalData(){
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
                    fetch(`php/getDailyCal.php?mNo=${getTmp_mNo}&curTime=${now}`)
                        .then((res) => res.json())
                        .then((res) => Vthis.$store.commit('updataDailyCalData', res.dailySumCal? parseInt(res.dailySumCal):0))
                        //如果沒資料就回傳0
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

                passValueVue.$emit('check-goalWeight')
                passValueVue.$emit('check-goalTime')
                console.log('自動登入這裡 成功')
                clearTimeout(timeCheckLoggedin)
            }
        },100)
    },
})

//vue--------------------------------------------------
//-----------------------------------------------------
