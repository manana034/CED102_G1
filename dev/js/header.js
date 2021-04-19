let getTmp_mNo=null, getTmp_mId=null, getTmp_mPsw=null
// 如果session 以登入 將資料寫入memberID
//共用
const select = (selector) =>{
    return document.querySelector(selector)
}
const selectAll = (selector) =>{
    return document.querySelectorAll(selector)
}

function checkLoggedin() {
    let xhr = new XMLHttpRequest(); 
   xhr.onload = ()=>{
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
   xhr.open('get', 'php/checkLoggedin.php',true) 
   xhr.send(null)
}
checkLoggedin()



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


//搜尋bar----------------------------------------------
//搜尋bar----------------------------------------------
//搜尋bar----------------------------------------------

const searchInput = document.querySelector('.search-input>input')
const sugItems = searchInput.nextElementSibling
const selectItems = document.querySelectorAll('.select-items')

const submitBtn = select('.submitBtn')
const searchType = select('.select-selected')

let foodData = []
let excericeData = []

const getFoodData = () => {
    // let xhr = new XMLHttpRequest()
    // xhr.onload = function () {

    //     foodRows = JSON.parse(xhr.responseText)
    //     foodData = foodRows
    //     createSearchData(foodData,'food')
    // }
    // xhr.open('get', 'php/getFoodData.php', true)
    // xhr.send(null)

    fetch(`php/getFoodData.php?mNo=${getTmp_mNo}`)
    .then(res => res.json()) //這個可以直接解json
    .then((res) => {
        foodData = res
        createSearchData(foodData, 'food')
    })

}

getFoodData()
//一開始設定 要先執行 foodData 的資料匯入

const getSportData = () => {
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
        sportRows = JSON.parse(xhr.responseText)
        excericeData = sportRows
        createSearchData(excericeData, 'sport')
    }
    xhr.open('get', 'php/getSportData.php', true)
    xhr.send(null)
}

const showSugItem = (e) => {
    const state = getComputedStyle(sugItems).display
    if (state == 'none') {
        sugItems.style.display = 'inline-block'
    }
}

const closeSugItem = (elmnt) => {
    let ta = elmnt.target
    //要 點集 在menuIcon 上會變true
    if (ta.matches('.search-input>input') || ta.matches('.suggest-items')) {
        return
    } else if (ta.matches('.suggest-items')) {
        return
    } else {
        sugItems.style.display = 'none'
    }
}

const createSearchData = (data,type) => {
    const list = document.querySelector('#searchBar .suggest-items')
    const custom = document.querySelector('.custom-item')
    const items = document.querySelectorAll('.search-item')

    custom.addEventListener('click',()=>{
        window.location.href = './search.html'
    })
    //如果item 有存在 就要刪掉
    if (items) {
        //remove 只能移除單一個
        items.forEach((item) => item.remove())
    }

    if (type === 'food'){
        for (let i in data) {
            const item = document.createElement('a')
            item.className = 'search-item'
            item.innerHTML = `
                <div>
                    <p>${data[i].fdName}</p>
                    <p><span>${data[i].fdCalPer}</span> cal</p> 
                </div>
            `
            //寫入session 讓一名抓地到資料
            item.addEventListener('click', () => {

                sessionStorage.setItem('type', searchType.textContent)
                sessionStorage.setItem('no', data[i].fdNo)

                window.location.href ="./Cal_Diary.html"
            })
            list.insertBefore(item, custom)
        }
    } else if(type === 'sport'){
        for (let i in data) {
            const item = document.createElement('a')
            item.className = 'search-item'
            item.innerHTML = `
                <div>
                    <p>${data[i].spName}</p>
                    <p><span>${data[i].spCalPer}</span> cal</p> 
                </div>
            `
            //寫入session 讓一名抓地到資料
            item.addEventListener('click',()=>{
                sessionStorage.setItem('type', searchType.textContent)
                sessionStorage.setItem('no', data[i].spNo)

                window.location.href = './Cal_Diary.html'
            })
            list.insertBefore(item, custom)
        }
    }


  
}

const filterData = () => {
    const inputVal = searchInput.value.toUpperCase()
    const items = document.querySelectorAll('#searchBar .search-item')
    // const sType = document.querySelector('#searchBar .custom-select select').value

    let count = 0
    let i = 0

    // count 小於5 是限制最多出現的數量
    while (count < 5 && i < items.length) {
        if (items[i].textContent.toUpperCase().indexOf(inputVal) > -1) {
            items[i].style.display = 'inline-block'
            count++
        } else {
            items[i].style.display = 'none'
        }
        i++
    }
}

const choiceSelect = (e) => {
    const status = e.target.textContent
    if (status === 'FOOD') {
        getFoodData()
    } else {
        getSportData()
    }
}

// console.log(searchType.textContent)

searchInput.addEventListener('focus', showSugItem)
searchInput.addEventListener('keyup', filterData)

selectItems.forEach((item) => item.addEventListener('click', choiceSelect))

document.addEventListener('click', closeSugItem)
submitBtn.addEventListener('click',()=>{
    if (searchInput.value){
        sessionStorage.setItem('searchInput', searchInput.value)
        sessionStorage.setItem('searchType', searchType.textContent)
    }
    window.location.href ='./search.html'
})








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


