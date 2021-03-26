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


const chatRobotIcon = document.querySelector('#chatRobot');
const chatRobotCloseIcon = document.querySelector('.chatRoomBody>div>button')

//  const body2 = chatRobotIcon.querySelector('.chatRoomBody')
// body2.style.display = "none"


chatRobotIcon.addEventListener('click',(e)=>{
    e.stopPropagation()
    const body = chatRobotIcon.querySelector('.chatRoomBody')

    console.log(body)
    body.classList.remove('bodynone');

})

chatRobotCloseIcon.addEventListener('click',(e)=>{
    e.stopPropagation()
    const body2 = document.querySelector('.chatRoomBody')
    body2.classList.add('bodynone')
    
})


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
