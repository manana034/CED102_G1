const mainVision = document.querySelector('.mainVision')
const body = document.querySelector('body')

const visionChange = () => {
    const stepsHight = document.querySelector('.steps').getClientRects()[0].y
    const postHieght = document.querySelector('.postWall').getClientRects()[0].y


    mainVision.style.filter= `blur(${window.scrollY/100}px)`;
    mainVision.style.opacity = (1000-window.scrollY)/1000;

    if (postHieght < 0 && stepsHight < 0) {
        body.style.backgroundColor = '#f4f1ec'
    } else if (stepsHight < 0) {
        body.style.backgroundColor = '#c1dce8'
    } else {
        body.style.backgroundColor = '#f4f1ec'
    } 
}

document.addEventListener('scroll',visionChange);



const share = document.querySelector('.comment .share>button')
const social = document.querySelector('.comment .social')

share.addEventListener('click',(e)=>{
    e.stopPropagation()
    const state = getComputedStyle(social).display
    // console.log(state)
    if (state =="none"){
        social.style.display = 'flex'
    } else {
        social.style.display = 'none'
    }
    
});

const closeSocial = (e)=>{
    // e.stopPropagation();
    let ta = e.target

    if (ta.matches('.comment .share>button')) {
        return
    } else if (ta.matches('.comment .social') || ta.matches('.comment .social>button') || ta.matches('.comment .social>button>img')) {
        return
    } else {
        social.style.display = 'none'
    }
}


document.addEventListener('click', closeSocial)



//-scroll 第二頻smooth-------------------------------------------
const scrollDown = document.querySelector('a.scrollDown')
const stepsView = document.querySelector('section.steps')

  const scrollSmooth = function (e) {
      e.preventDefault()

      //scrollIntoView 可以給予dom 或是給予id
      stepsView.scrollIntoView({
          behavior: 'smooth',
      })
  }

 scrollDown.addEventListener('click', scrollSmooth)


//第二頻 動畫-----------------------------------
//第二頻 動畫-----------------------------------
//第二頻 動畫-----------------------------------
//第二頻 動畫-----------------------------------
//第二頻 動畫-----------------------------------
//第二頻 動畫-----------------------------------
//第二頻 動畫-----------------------------------
const buttons = [...document.querySelectorAll('.stepSlider .change>div>button')]
// [0]是goal [1]rocord [2]report
const stepContents = [...document.querySelector('.stepSlider .content').children]
//[0]是h4 [1]是內文
const decoNum = document.querySelector('.stepSlider>:first-child >span')

const tilts = document.querySelectorAll('.tilt')
// [0]是goal [1]rocord [2]report

const stepContent = [
    [
        'set up your goal',
        '「下個月要參加同學婚禮，想要回到五年前的體重」<br>填入你的理想體重和目標到期日<br>讓我們來幫助你計算每天要攝取多少卡路里才能達成目標<br>開始往你的目標邁進！'
    ],
    [
        'daily record',
        '「今天走了20分鐘去買早餐，吃了一份肉鬆蛋餅、一杯豆漿」<br>依照建議的每日卡路里攝取量來進行飲食管理<br>記錄每天的飲食和運動，讓我們來幫您達成目標！'
    ],
    [
        'analysis report',
        '「原來我有一半的卡路里是從早餐攝取，我要去搜尋卡路里低的替代食物」<br>從每天紀錄的飲食、運動、體重，觀察一個月內的變化<br>進而了解自己的飲食習慣，並針對身體需求做調整。'
    ],
]


const changeContent = function(e){
    e.stopPropagation()
    const no = parseInt(this.innerText.slice(0, 1))
 
    if(no === 1){
        buttons[0].classList.add('active')
        buttons[1].classList.remove('active')
        buttons[2].classList.remove('active')

        stepsTl.play()
        setTimeout(() => {
            decoNum.innerText = 1
            stepContents[0].innerHTML = stepContent[0][0]
            stepContents[1].innerHTML = stepContent[0][1]

            tilts[0].style.display = "flex"
            tilts[1].style.display = "none"
            tilts[2].style.display = 'none'
            
            stepsTl.reverse();
        }, 800)

    } else if( no === 2){

        buttons[0].classList.remove('active')
        buttons[1].classList.add('active')
        buttons[2].classList.remove('active')

        stepsTl.play()
        setTimeout(() => {
            decoNum.innerText = 2
            stepContents[0].innerHTML = stepContent[1][0]
            stepContents[1].innerHTML = stepContent[1][1]

            tilts[0].style.display = 'none'
            tilts[1].style.display = 'flex'
            tilts[2].style.display = 'none'

            stepsTl.reverse()
        }, 800)



    } else {
        buttons[0].classList.remove('active')
        buttons[1].classList.remove('active')
        buttons[2].classList.add('active')
        
        stepsTl.play()
        setTimeout(() => {
            decoNum.innerText = 3
            stepContents[0].innerHTML = stepContent[2][0]
            stepContents[1].innerHTML = stepContent[2][1]

            tilts[0].style.display = 'none'
            tilts[1].style.display = 'none'
            tilts[2].style.display = 'flex'

            stepsTl.reverse()
        }, 800)

    }
}

//step 的切換動畫
const stepsTl = new TimelineMax()
stepsTl
    .to('div.tiltContainer', 0.2, {
        x: '100px',
        opacity: 0,
    })
    .add([
        TweenMax.to(stepContents[0], 0.2, {
            x: '100px',
            opacity: 0,
        }),
        TweenMax.to(decoNum, 0.2, {
            opacity: 0,
            scale: 1.3,
        }),
    ])
    .to(stepContents[1], 0.2, {
        x: '10px',
        opacity: 0,
        //執行過程會做哪個動作 value function
        // onComplete: 這裡放function,
    })

stepsTl.stop()


buttons.forEach(button=>{
    button.addEventListener('click', changeContent)
})


// 傾斜套件 tilt.js 動畫 css 要transform-style: preserve-3d(寫在最外層父母) 跟 transform: translateZ(--px)(寫在小孩)
VanillaTilt.init(tilts, {
    //options 寫在這裡
    // reverse: true,
    // maxTilt: 20,
    speed: 400,
    reset: false,
    // perspective: 1000,
    // scale: 1.1,
})

