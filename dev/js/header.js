let getTmp_mNo=null, getTmp_mId=null, getTmp_mPsw=null
// 如果session 以登入 將資料寫入memberID

const select = (selector) => {
    return document.querySelector(selector)
}
const selectAll = (selector) => {
    return document.querySelectorAll(selector)
}
function checkLoggedin() {
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {
        //將獲取 id 或是 "{}"
        console.log(xhr.responseText)
        member = JSON.parse(xhr.responseText)
        if (member.mNo || member.mId || member.mPsw) {
            getTmp_mNo = member.mNo
            getTmp_mId = member.mId
            getTmp_mPsw = member.mPsw

            console.log('這是編號' + getTmp_mNo)
            console.log('這是帳號' + getTmp_mId)
            console.log('這是密碼' + getTmp_mPsw)
            console.log('抓取 站存 成功')

            // console.log(app)
        }
    }
    xhr.open('get', 'php/checkLoggedin.php', true)
    xhr.send(null)
}
checkLoggedin()

//共用
//自動登入 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑




let menuIcon = document.querySelector('.menuIcon')
let menuBody = document.querySelector('.menuBody')
let menuCIcon = menuBody.children[0]

// element.matches(selectorString) 只能用在element 身上
const closeMenu = (elmnt) => {
    elmnt.stopPropagation()
    let ta = elmnt.target
    //要 點集 在menuIcon 上會變true
    if (ta.matches('.menuIcon') || ta.matches('.menuIcon>img')) {
        return
    } else if (ta.matches('.menuBody')) {
        return
    } else {
        menuBody.style.transform = 'translate(100%,0)'
    }
}

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    const state = getComputedStyle(menuBody).transform
    // console.log(state)

    if (getComputedStyle(menuBody).display == 'none') {
        menuBody.style.display = 'block'

        const time = setTimeout(() => {
            menuBody.style.transform = 'translate(0,0)'
            clearTimeout(time)
        })
    } else if (state == 'matrix(1, 0, 0, 1, 0, 0)') {
        menuBody.style.transform = 'translate(100%,0)'
    } else {
        menuBody.style.transform = 'translate(0,0)'
    }
    console.log('work')
})
menuCIcon.addEventListener('click', () => {
    menuBody.style.transform = 'translate(100%,0)'
})
document.addEventListener('click', closeMenu)

// -------------------------menu open↑↑↑↑↑↑↑↑↑↑↑↑





// --------rwd search 使用
const searchBody = document.querySelector('form#searchBar')
const phoneSearch = document.querySelector('.phoneSearch')
const closeSearch = document.querySelector('#searchBar>.closeForm')

phoneSearch.addEventListener('click', () => {
    searchBody.style.display = 'inline-flex'
})

closeSearch.addEventListener('click', () => {
    searchBody.style.display = 'none'
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 1200) {
        searchBody.style.display = 'none'
    } else {
        searchBody.style.display = 'inline-flex'
    }
})


