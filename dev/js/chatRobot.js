const chatRobotIcon = document.querySelector('#chatRobot')
const chatRobotCloseIcon = document.querySelector('.chatRoomBody>div>button')

//  const body2 = chatRobotIcon.querySelector('.chatRoomBody')
// body2.style.display = "none"

chatRobotIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    const body = chatRobotIcon.querySelector('.chatRoomBody')

    body.classList.remove('bodynone')

    body.parentElement.style.zIndex = 20
})

chatRobotCloseIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    const body = document.querySelector('.chatRoomBody')
    body.classList.add('bodynone')

    body.parentElement.style.zIndex = 3
})
