

//是threeVue status-order 的兒子
Vue.component('order-detail', {
    template: `
        <section class="orderDetail">
            <div class="bg"></div>
            <div class="detailBody">
                <button class="nc-btn">
                    <img src="./icon/close.svg">
                </button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>PRODID</th>
                            <th>Time</th>
                            <th>PROD NAME</th>
                            <th>QTY</th>
                            <th>RECIPIENT</th>
                            <th>PHONE</th>
                            <th>ADDRESS</th>
                        </tr>
                    </thead>
                    <tr>
                        <td data-label="ID">32898843</td>
                        <td data-label="TIME">
                            <span>2020</span>-
                            <span>01</span>-
                            <span>01</span> 
                        </td>
                        <td data-label="NAME">
                            <span>vegetables</span>
                        </td>
                        <td data-label="QTY">
                            1
                        </td>
                        <td data-label="RECIPIENT">Archie</td>
                        <td data-label="PHONE">0123456789</td>
                        <td data-label="ADDRESS">TAICHUNG ROAD 100</td>
                        
                    </tr>
                    <tr>
                        <td data-label="ID">32898843</td>
                        <td data-label="TIME">
                            <span>2020</span>-
                            <span>01</span>-
                            <span>01</span> 
                        </td>
                        <td data-label="NAME">
                            <span>vegetables</span>
                        </td>
                        <td data-label="QTY">
                            1
                        </td>
                        <td data-label="RECIPIENT">Archie</td>
                        <td data-label="PHONE">0123456789</td>
                        <td data-label="ADDRESS">TAICHUNG ROAD 100</td>
                        
                    </tr>
            
                </table>

                <div class="total">
                    
                    <div>
                        <div>SUBTOTAL</div>
                        <div>NT$ <span>500</span></div>
                    </div>
                        
                    <div>
                        <div>USE POINTS</div>
                        <div><span>-500</span> POINTS</div>
                    </div>
                    
                    <div class="hr"></div>
                    <div>
                        <p>TOTAL</p>
                        <p>0</p>
                    </div>
                </div>
            </div>

        </section>
    `,
})