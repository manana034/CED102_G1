let getTmp_aNo, getTmp_aId, getTmp_aPsw
// 如果session 已登入 將資料寫入adminID

function checkLoggedin() {
    let xhr = new XMLHttpRequest(); 
    xhr.onload = ()=>{
       //將獲取 id 或是 "{}"
       console.log(xhr.responseText)
       member = JSON.parse(xhr.responseText)
        if (admin.aNo || admin.aId || admin.aPsw) {
            getTmp_aNo = admin.aNo
            getTmp_aId = admin.aId
            getTmp_aPsw = admin.aPsw

            console.log('這是編號' + getTmp_aNo)
            console.log('這是帳號' + getTmp_aId)
            console.log('這是密碼' + getTmp_aPsw)
            console.log('後台抓取暫存管理員 成功 謝謝廷齊贊助')

            // console.log(app)

        }
   }
   xhr.open('get', 'php/B_checkLoggedin.php',true) 
   xhr.send(null)
}
checkLoggedin()


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