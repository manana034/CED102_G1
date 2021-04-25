// let vm = new Vue({
//     el: "#app",
//     data: {
//         orders:[]
//     },
// });

// Vue.component('orderlist',{
//     props:["order"],
//     template:` 
//         <tr>
//             <td>{{order.orderNo}}</td>
//             <td>{{order.mNo}}</td>
//             <td>{{order.usePoints}}</td>
//             <td>{{order.total}}</td>
//             <td>{{order.orderer}}</td>
//             <td>{{order.tel}}</td>
//             <td>{{order.address}}</td>
//             <td>{{order.orderDate}}</td>
//             <td>
//                 <select class="Type" name="Type">
//                     <option value="1">Paid</option>
//                     <option value="2">Shipped</option>
//                     <option value="3">Cancelled</option>
//                 </select>
//             </td>
//             <td>
//                 <button class="detail l-btn">Detail</button>
//             </td>
//         </tr>
//     `
// })

// fetch(`../php/4_adminOrder.php`).then(res => res.json())
//                                 .then(data =>{
//                                     console.log(data);
//                                 }).catch(err => console.log(err))