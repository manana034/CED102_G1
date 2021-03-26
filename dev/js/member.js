

//vue
Vue.component('login-signup', {
    data() {
        return {
            upperInfo: {
                login: ['Hello, Friend !', 'Enter your personal details and start journey with us', 'sing up'],

                signup: ['Welcome Back !', 'To keep connected with us please login with your personal info', 'log in'],
            },
        }
    },
    template: `
    <section class="logIn_signUp">
        <div class="container card">

            <div class="under">

                <inner-login></inner-login>
                <inner-signup></inner-signup>

            </div>

            <div class="upper">
                <div>
                    <h4>Hello, Friend !</h4>
                    <p>
                        Enter your personal details and start journey with us
                    </p>
                    <div>

                        <button 
                            class="w-btn" 
                            id="toggleMemberbtn" 
                            data-state="login"
                            @click="toggleMember"
                        >
                            sing up
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </section>
    `,

    methods: {
        toggleMember(e) {
            e.stopPropagation()
            // console.log(e.target.dataset.state)
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
                p.textContent = this.upperInfo.signup[1]
                button.textContent = this.upperInfo.signup[2]
            } else {
                upper.style.transform = 'translate(100%,0)'
                upper.style.backgroundColor = '#95b17c'
                e.target.dataset.state = 'login'

                h4.textContent = this.upperInfo.login[0]
                p.textContent = this.upperInfo.login[1]
                button.textContent = this.upperInfo.login[2]
            }
        },
    },
}) 


Vue.component('inner-login', {
    template: `
        <div class="login">
            <h4>log in</h4>
            <form action="">
                <label class="userid">
                    <p>userid <span></span> </p>
                    <input 
                        type="text" 
                        name="userid"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>
                <label class="psd">
                    <p>password <span></span></p>
                    <input 
                        type="text" 
                        name="psd"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>
                <div>
                    <button class="nc-btn o-5" type="button">
                        forget your password ? 
                    </button>
                </div>
                <div>
                    <button class="g-btn" id="login" type="button">
                        log in
                    </button>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            state: 'focus',
        }
    },
    methods: {
        movePlaceholder(state, event) {
            //**************************************** */
            //帶入參數,以及事件聆聽:html 需要給予 $event 不能命名別的
            // console.log(e.target)
            const placeholder = event.target.parentElement.children[0]

            if (state == 'focus') {
                placeholder.style.top = '-20px'
                placeholder.style.transform = 'scale(.9)'
                this.state = 'blur'
            } else {
                placeholder.style.top = '-5px'
                placeholder.style.transform = 'scale(1)'
                this.state = 'focus'
            }
        },
    },
})


Vue.component('inner-signup', {
    template: `
        <div class="signup">
            <h4>sign up</h4>
            <form action="">
                <label class="fristName">
                    <p>frist name  <span>*</span></p>
                    <input 
                        type="text" 
                        name="fristName"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>

                <label class="lastName">
                    <p>last name  <span>*</span></p>
                    <input 
                        type="text" 
                        name="lastName"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>

                <label class="email">
                    <p>email  <span>*</span></p>
                    <input 
                        type="text" 
                        name="email"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>              

                <label class="userid">
                    <p>userid  <span>*</span></p>
                    <input 
                        type="text" 
                        name="userid"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>              
    
                <label class="psd">
                    <p>password  <span>*</span></p>
                    <input 
                        type="text" 
                        name="psd"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>              
                
                <label class="cfmPsd">
                    <p>confirm password  <span>*</span></p>
                    <input 
                        type="text" 
                        name="cfmPsd"
                        @focus="movePlaceholder(state,$event)"
                        @blur="movePlaceholder(state,$event)"
                    >
                </label>

                <div>
                    <button class="p-btn" id="signup" type="button">
                        sign up 
                    </button>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            state: 'focus',
        }
    },
    methods: {
        movePlaceholder(state, event) {
            //**************************************** */
            //帶入參數,以及事件聆聽:html 需要給予 $event 不能命名別的
            // console.log(e.target)
            const placeholder = event.target.parentElement.children[0]

            if (state == 'focus') {
                placeholder.style.top = '-20px'
                placeholder.style.transform = 'scale(.9)'
                this.state = 'blur'
            } else {
                placeholder.style.top = '-5px'
                placeholder.style.transform = 'scale(1)'
                this.state = 'focus'
            }
        },
    },
})


new Vue({
    el: "#app",
    data() {
        return {
            message: "hellow Vuejs"
        }
    },
});
//vue


const aside = document.querySelector('.r-aside')


//window.pageYOffset 是頁面滑動了多
//aside.getBoundingClientRect().y 是物件的最頂端 與 頁面的最頂端距離

// console.log(window.pageYOffset + aside.getBoundingClientRect().y)
// console.log( aside.getBoundingClientRect().y)
// console.log(aside.offsetParent)


function getPosition(element) {
    var xPosition = 0
    var yPosition = 0

    while (element) {
        xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft
        yPosition += element.offsetTop - element.scrollTop + element.clientTop
        element = element.offsetParent
    }

    return { x: xPosition, y: yPosition }
}

const postion = getPosition(aside)

console.log(postion)
console.log(aside.getBoundingClientRect().y)

// aside.style.top = `${aside.getBoundingClientRect().y}px`
