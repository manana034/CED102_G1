let x, i, j, l, ll, selElmnt, a, b, c



/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName('custom-select')
l = x.length
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0]
    ll = selElmnt.length
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement('DIV')
    a.setAttribute('class', 'select-selected')
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
    x[i].appendChild(a)
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement('DIV')
    b.setAttribute('class', 'select-items select-hide')
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
        c = document.createElement('DIV')
        c.innerHTML = selElmnt.options[j].innerHTML
        c.addEventListener('click', function (e) {
            /*when an item is clicked, update the original select box,
        and the selected item:*/
            var y, i, k, s, h, sl, yl
            s = this.parentNode.parentNode.getElementsByTagName('select')[0]
            sl = s.length
            h = this.parentNode.previousSibling
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i
                    h.innerHTML = this.innerHTML
                    y = this.parentNode.getElementsByClassName('same-as-selected')
                    yl = y.length
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute('class')
                    }
                    this.setAttribute('class', 'same-as-selected')
                    break 
                }
            }
            h.click()
        })
        b.appendChild(c)
    }
    x[i].appendChild(b)
    a.addEventListener('click', function (e) {
        /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
        e.stopPropagation()
        closeAllSelect(this)
        this.nextSibling.classList.toggle('select-hide')
        this.classList.toggle('select-arrow-active')

        // searchSelect.value = a.innerHTML
        // searchSelect.dispatchEvent(new Event('change'))
        // // 讓客製化 select 可以產生change 事件

    })
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
        y,
        i,
        xl,
        yl,
        arrNo = []
    x = document.getElementsByClassName('select-items')
    y = document.getElementsByClassName('select-selected')
    xl = x.length
    yl = y.length
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove('select-arrow-active')
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add('select-hide')
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener('click', closeAllSelect)

// -------------------------客製化select↑↑↑↑↑↑↑↑↑↑↑↑

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
})


menuCIcon.addEventListener('click', () => {
    menuBody.style.transform = 'translate(100%,0)'
})
document.addEventListener('click', closeMenu)

// -------------------------menu open↑↑↑↑↑↑↑↑↑↑↑↑

const searchInput = document.querySelector('.search-input>input')
const sugItems = searchInput.nextElementSibling
const selectItems = document.querySelectorAll('.select-items')

const foodData = [
    { name: '麥香魚餐', cal: 2000 },
    { name: '麥噹噹', cal: 2000 },
    { name: '麥鄉紅茶', cal: 2000 },
    { name: '麥茶', cal: 2000 },
    { name: '阿嬤的麥茶', cal: 2000 },
    { name: '鮮蛋沙拉', cal: 200 },
    { name: '美味蟹寶', cal: 240 },
    { name: '美而美蛋餅', cal: 240 },
    { name: '美式咖費', cal: 240 },
    { name: '美式煎餅', cal: 240 },
    { name: '宮保雞丁餐', cal: 400 },
    { name: '羊肉爐', cal: 24 },
    { name: '惡魔蛋', cal: 200 },
    { name: '麻辣鴨血', cal: 24 },
    { name: '阿嬤炒泡麵', cal: 24 },
    { name: '是在看沙小', cal: 24 },
]
const excericeData = [
    { name: '快走', cal: 2000 },
    { name: '跑步', cal: 2000 },
    { name: '馬拉松', cal: 2000 },
    { name: '慢走', cal: 2000 },
    { name: '散步', cal: 2000 },
    { name: '跳繩', cal: 200 },
    { name: '瑜珈', cal: 240 },
    { name: '重訓', cal: 240 },
    { name: '唱歌', cal: 240 },
    { name: '劈腿', cal: 240 },
    { name: '閃老師一巴掌', cal: 400 },
    { name: '搶劫', cal: 24 },
    { name: '拉泡屎', cal: 200 },
    { name: '開車衝撞老闆', cal: 24 },
    { name: '檢石頭', cal: 24 },
    { name: '是在看沙小', cal: 24 },
]

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

const createSearchData = (data) =>{
    const list = document.querySelector('#searchBar .suggest-items')
    const custom = document.querySelector('.custom-item')
    const items = document.querySelectorAll('.search-item')

    //如果item 有存在 就要刪掉
    if (items){
        //remove 只能移除單一個
        items.forEach(item => item.remove())
    }

    for (let i in data) {
        const item = document.createElement('a')
        item.className = 'search-item'
        item.setAttribute('href', './Cal_Diary.html')
        item.innerHTML = `
        <div>
            <p>${data[i].name}</p>
            <p><span>${data[i].cal}</span> cal</p> 
        </div>
    `
        list.insertBefore(item, custom)
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

createSearchData(foodData)

const choiceSelect = (e) => {
    const status = e.target.textContent
    if(status === "FOOD"){
        createSearchData(foodData)
    } else {
        createSearchData(excericeData)
    }
}


searchInput.addEventListener('focus', showSugItem)
searchInput.addEventListener('keyup',filterData)
selectItems.forEach((item) => item.addEventListener('click', choiceSelect))
document.addEventListener('click', closeSugItem)
console.log(selectItems)


// --------rwd search 使用
const searchBody = document.querySelector('form#searchBar')
const phoneSearch = document.querySelector('.phoneSearch')
const closeSearch = document.querySelector('#searchBar>.closeForm')



phoneSearch.addEventListener('click',()=>{
    searchBody.style.display = 'inline-flex'
})

closeSearch.addEventListener('click', () => {
    searchBody.style.display = 'none'
})

window.addEventListener('resize',()=>{
    if(window.innerWidth < 1200){
        searchBody.style.display = 'none'
    } else{
        searchBody.style.display = 'inline-flex'
    }
})


