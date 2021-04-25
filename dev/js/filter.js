const choose = document.querySelector(".choose");
const chooseAll = document.querySelector(".chooseall");
choose.addEventListener("click", function(){
    chooseAll.classList.toggle("chooseform");
})

const prod1 = document.querySelectorAll(".prod1");
const form = document.querySelectorAll('.orange');
form.forEach(f => f.addEventListener("click",function(e){
    const prod1 = document.querySelectorAll(".prod1");
    console.log(e.target.parentNode.children[1].innerText);
    for(var i = 0; i<prod1.length; i++){
        switch (e.target.parentNode.children[1].innerText){
            case "ALL":
                    prod1[i].style.display = "block"
            break
            case "GAIN WEIGHT":
                if(parseFloat(prod1[i].dataset.rate) > 1){
                        prod1[i].style.display = "block"
                }else{
                        prod1[i].style.display = "none"
                }
            break;

            case "LOSE WEIGHT":
                if(parseFloat(prod1[i].dataset.rate) < 1){
                    prod1[i].style.display = "block"
                }else {
                    prod1[i].style.display = "none"
                }
            break;

            case "REGIMEN":
                if(parseFloat(prod1[i].dataset.rate) == 1 ){
                    prod1[i].style.display = "block"
                }else {
                    prod1[i].style.display = "none"
                } 
                break
            case "CEREAL":
                if(prod1[i].dataset.type == "1"){
                     prod1[i].style.display = "block"
                }else{
                     prod1[i].style.display = "none"
                }
                break
            case "CRACKERS":
                if(prod1[i].dataset.type == "2"){
                        prod1[i].style.display = "block"
                }else{
                        prod1[i].style.display = "none"
                }
                break
                case "ENERGY BAR":
                if(prod1[i].dataset.type == "3"){
                     prod1[i].style.display = "block"
                }else{
                     prod1[i].style.display = "none"
                }
            break
        } 
    }
}))

//sort by filter 

const sort = document.querySelector('.sort');
const date = document.querySelectorAll(".prod1");

sort.addEventListener('click', function(e){
    // console.log(e.target.textContent)
    switch(e.target.textContent){
        case "POPULAR":
            
            break;
        case "NEW ARRIVAL":  
        // console.log([...date]);
        [...date].sort((a,b)=>{
                // console.log(a.dataset.date);
                let latest = new Date(a.dataset.date);
                let old = new Date(b.dataset.date);
                return latest - old
                // if (latest > old) {
                //     return 1;
                // } else if (latest < old) {
                //     return -1;   
                // }
                // return 0;
            })
            break;
    }
})