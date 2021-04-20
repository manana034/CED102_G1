<?php
    try{
        require_once("../connect_ced102g1.php");
        $sql = "select p.prodNo, p.fdNo, p.price, p.des, p.prodpic1, p.prodpic2, p.prodpic3, p.prodType, f.fdName, f.fdCalPer, f.calRate
                    from product p join food f on p.fdNo = f.fdNo";

        $product = $pdo->query($sql);
    }catch(PDOException $e){
        echo $e.getMessage();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/common/shop.css">
    <link rel="icon" href="../img/logo.ico" type="image/x-icon">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12/vue.min.js"></script>
    <script src="./js/header.js" defer></script>
    <title>SHOP</title>
</head>
<body>
<header>
    <div class="row container">
        <div class="logo">
            <a href="./B_index.html">
                <img src="./img/logo.png" />
            </a>
        </div>

        <form id="searchBar">
            <div class="nc-btn closeForm">X</div>
            <div class="row">
                <div class="search-input">
                    <input type="text" placeholder="SERACH" id="searchInput" autocomplete="off" />
                    <div class="suggest-items">
                        <a class="custom-item">
                            customize food
                            <img src="./icon/add.svg" />
                        </a>
                    </div>
                </div>
                <div class="custom-select">
                    <select name="sType">
                        <option value="0">FOOD</option>
                        <option value="0">FOOD</option>
                        <option value="1">EXERCISE</option>
                    </select>
                </div>
                <button 
                    class="nc-btn o-5 submitBtn"
                    type="button">
                    <img src="./icon/magnifier.png" alt="" />
                </button>
            </div>
        </form> 

        <div class="row">
            <div>
                <button class="nc-btn phoneSearch">
                    <img src="./icon/magnifier.png" />
                </button>
            </div>

            <div>
                <a href="./member.html" class="a">
                    <span>MEMBER</span>

                    <img src="./icon/member.png" alt="" />
                </a>
            </div>
            <div class="nc">
                <button class="nc-btn gocart">
                    <span>CART</span>

                    <img src="./icon/cart.png" alt="" />
                </button>
            </div>

            <div>
                <button class="nc-btn menuIcon">
                    <span>MENU</span>

                    <img src="./icon/hamburger.png" alt="" />
                </button>
            </div>
        </div>
    </div> 

    <div class="menuBody">
        <button class="nc-btn">&times;</button>
        <ul>
            <li>
                <a href="./Cal_Diary.html">Calories diary</a>
            </li>
            <li>
                <a href="./search.html">Calories search</a>
            </li>
            <li>
                <a href="./shop.html">ft. shop</a>
            </li>
            <li>
                <a href="./index.html">post board</a>
            </li> 
            <li>
                <a href="./information.html">health news</a>
            </li>
            <li>
                <a href="./member.html">member</a>
            </li>
        </ul>
    </div>
</header>
<div class="cart">
    <div class="yourcart">
        <h5>Your Cart</h5>
        <p class="close">&times;</p>
    </div>
    <ul class="prod">
        <!-- <li class="prodcart">
            <p>ALMONDS SALTED CHOCOLATE BAR</p>
            <div class="cartimg">
                <img src="productImg/prod1.png"> 
            </div>
            <img class="trash" src="./img/trash.png">
            <div class="qty">
                <form>
                    <label for="quantity">QUANTITY : </label>
                    <div class="btn_number">
                        <span class="btn_minus"> &minus; </span>
                        <input type="number" name="quantity" id="quantity" value="1" min="1" max="10">
                        <span class="btn_add">  &plus; </span>
                    </div>                    
                </form> 
                    <p>NT$250</p>
            </div>
        </li> -->
        
    </ul>
    <div class="allprice">
        <div class="line"></div>
        <p>TOTAL : NT$ <span>250</span></p>
    </div>
    <div class="checkout">
        <a href="./mycart.html"><button>CHECK OUT</button></a>
    </div>
</div>
    <div class="banner">
        <h4>Fitness starts with what you eat.</h4>
        <img src="./img/banner.jpeg">
    </div>
    <div class="productAll">
            <div class="products">
                <div class="filterAll">  
                    <div class="choose">
                        <p>FILTER</p>
                        <img src="./img/filter-filled-tool-symbol.png">
                    </div>
                    <div class="chooseall">     
                        <div class="typearrow">
                            <p>TYPE</p>
                            <!-- <img src="./img/arrow-down-sign-to-navigate.png">
                            <img class="arrowwhite" src="./img/arrow_white.png"> -->
                        </div>
                        <form>
                            <div class="filter">
                                <input class="custom" type="radio" name="type" id="all" @change="filter" checked >
                                <label class="orange cus4" for="all">ALL</label>
                            </div>
                            <div class="filter">
                                <input class="custom" type="radio" name="type" id="gain" @change="filter" >
                                <label class="orange cus1" for="gain">GAIN WEIGHT</label>
                            </div>
                            <div class="filter">
                                <input class="custom" type="radio" name="type" id="lose" @change="filter">
                                <label class="orange cus2" for="lose">LOSE WEIGHT</label>
                            </div>
                            <div class="filter">
                                <input class="custom" type="radio" name="type" id="regimen" @change="filter">
                                <label class="orange cus3" for="regimen">REGIMEN</label>
                            </div>
                    </form>
        
                        <div class="ourarrow">
                                <p>OUR PRODUCTS</p>
                                <!-- <img src="./img/arrow-down-sign-to-navigate.png">
                                <img class="arrowwhite" src="./img/arrow_white.png"> -->
                        </div>
        
                        <form>     
                            <div class="filter1">
                                <input class="custom"  type="radio" name="type" id="alls" @change="filter1" checked>
                                <label class="orange" for="alls">ALL</label>
                            </div>
                            <div class="filter1">
                                <input class="custom" type="radio" name="type" id="cereal" @change="filter1">
                                <label class="orange" for="cereal">CEREAL</label>
                            </div>
                            <div class="filter1">
                                <input class="custom" type="radio" name="type" id="crackers" @change="filter1">
                                <label class="orange" for="crackers">CRACKERS</label>
                            </div>
                            <div class="filter1">
                                <input class="custom" type="radio" name="type" id="energy" @change="filter1">
                                <label class="orange" for="energy">ENERGY BAR</label>
                            </div>
                        </form>
                   </div>  
                   <div class="custom-select sort" style="width:200px;">
                    <select>
                      <option value="0">SORT BY</option>
                      <option value="1">POPULAR</option>
                      <option value="2">NEW ARRIVAL</option>                     
                    </select>
                  </div>
            </div>
            <ul>    
                <?php
                    while($row = $product -> fetch(PDO::FETCH_ASSOC)){
                ?>
                    <li class="prod1" v-for="(item,index) in products" data-type="<?=$row['prodType']?>" data-rate="<?=$row['calRate']?>" data-no="<?=$row['prodNo']?>"> 
                        <a href="./product.html?id=<?=$row['prodNo']?>">
                            <?php if($row['calRate'] > 1){?> 
                                <div class="bg" style="background-color:#bf4659">
                                    <img src="<?=$row['prodpic1']?>">
                                </div>
                            <?php }else if($row['calRate'] == 1){?>
                                <div class="bg" style="background-color:#f9c530">
                                    <img src="<?=$row['prodpic1']?>">
                                </div>
                            <?php }else{?>
                                <div class="bg" style="background-color:#2d6ca6">
                                    <img src="<?=$row['prodpic1']?>">
                                </div>
                            <?php }?>
                            <div class="prodinfo">
                                <p><? echo $row['fdName']?></p>
                                <p>Get <?=$row['calRate']*100?>% Cal Plus</p>
                                <p>NT$<span><?=$row['price']?></span></p> 
                            </div>
                        </a>
                        <button class="byn">BUY NOW</button>   
                    </li>
                    <?php }?>
                </ul>
            </div>
        </div>
   </div>
   <footer class="container ">
        <div>
            <img src="./img/logo.png" alt="">
        </div>
        <p class="o-5 col-8">
            本網站為緯育TibaMe_前端設計工程師班第65期第一組學員專題成果作品，本平台僅供學習、展示之用。若有牴觸有關著作權，或有第三人主張侵害智慧財產權等情事，均由學員負法律上責任，緯育公司概不負責。若有侵權疑慮，您可以私訊[TibaMe-前端設計工程師養成班]，後續會由專人協助處理。<br><br>
            Copyright © 2021  ft. All rights reserved.
        </p>

    </footer>
    <script>
        const prod = document.querySelectorAll(".prod1>a");
        prod.forEach(p => p.addEventListener("click", function(){
            sessionStorage.setItem("no", p.parentNode.dataset.no)
        }))
    </script>
    <script src="./js/cart.js"></script>
    <!-- <script src="./js/buy.js"></script> -->
    <script src="./js/shop.js"></script>
    <script src="./js/filter.js"></script>
</body>
</html>
