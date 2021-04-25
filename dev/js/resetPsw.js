


Vue.component('loading', VueLoading)

const resetPswModule = new Vue({
    el: '#app',
    data: {
        id: '',

        mName: '',
        mMail: '',

        mPsw: '',
        mCfmPsw: '',

        //一開始就loading
        isLoading: true,
    },
    methods: {
        movePlaceholder(event, state) {
            const inputVal = event.target.value
            const placeholder = event.target.parentElement.children[0]
            const ta = event.target
            let Vthis = this

            const span1 = select('#resetPswForm .cfmPsw span')
            const span2 = select('#resetPswForm .psw span')

            if (state == 'focus') {
                //如果再focus 狀態 將會提升
                placeholder.style.top = '-20px'
                placeholder.style.transform = 'scale(.9)'

                if (ta.name == 'cfmPsw') {
                    span1.textContent = '*'
                    span1.removeAttribute('style')
                } else if (ta.name == 'psw') {
                    span2.textContent = '*'
                    span2.removeAttribute('style')
                }
            } else if (state == 'blur') {
                if (!inputVal) {
                    //檢查裡面 是否有內容 ,沒有內容就會掉下來
                    placeholder.style.top = '-5px'
                    placeholder.style.transform = 'scale(1)'
                } else {
                    if (ta.name == 'cfmPsw') {
                        //如果字長不夠
                        if (Vthis.mCfmPsw.length < 6) {
                            span1.textContent = '* 字數必須6以上'
                            span1.style.color = 'red'
                        } else {
                            if (Vthis.mCfmPsw == Vthis.mPsw) {
                                //如果有內容
                                span1.style.color = 'green'
                                span1.textContent = '* 正確'
                                span2.style.color = 'green'
                                span2.textContent = '*正確'
                            } else {
                                span2.textContent = '*'
                                span2.removeAttribute('style')
                                span1.style.color = 'red'
                                span1.textContent = '* 兩者密碼不正確'
                            }
                        }
                    } else if (ta.name == 'psw') {
                        if (Vthis.mPsw.length < 6) {
                            span2.textContent = '* 字數必須6以上'
                            span2.style.color = 'red'
                        }
                    }
                }
            }
        },

        updatePsw() {
            const span1 = select('#resetPswForm .cfmPsw span')
            const span2 = select('#resetPswForm .psw span')
            let Vthis = this
            if (this.mPsw || this.mCfmPsw) {
                if (span1.style.color == 'green' && span2.style.color == 'green') {
                    //寫入update password table
                    fetch(`php/updateMPsw.php?mPsw=${Vthis.mPsw}&mId=${Vthis.id}`)
                        .then((res) => res.text())
                        .then((res) => {
                            console.log(res)

                            function setSession() {
                                let xhr = new XMLHttpRequest()
                                xhr.onload = () => {
                                    console.log(JSON.parse(xhr.responseText))
                                    console.log('已經寫入session')
                                    alert('您的帳號已重設了')
                                    //跳轉 到member

                                    window.location.href = './member.html'
                                }
                                xhr.open('POST', 'php/getMnoMidMpsw.php', true)
                                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
                                let data_info = `memid=${Vthis.id}&memPsw=${Vthis.mPsw}`
                                xhr.send(data_info)
                            }
                            setSession()
                        })
                } else {
                    alert('兩者密碼不一樣, 請再次確認')
                }
            } else {
                alert('請輸入新的密碼')
            }
        },
    },
    mounted() {
        let Vthis = this 
        //共用

        function getRestMemberInfo() {
            const arr = new String(window.location.href).split('?mId=')

            if (arr.length < 2) {
                console.log('不是用mail登入')
            } else {
                Vthis.id = arr[1]
                console.log(Vthis.id)
                fetch(`php/checkMemberID.php?memid=${Vthis.id}`)
                    .then((res) => res.json())
                    .then((res) => {
                        Vthis.mName = res.mName
                        Vthis.mMail = res.mMail

                        Vthis.isLoading = !Vthis.isLoading
                    })
            }
        }
        getRestMemberInfo()
    },
})

