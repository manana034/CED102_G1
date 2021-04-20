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