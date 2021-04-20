// const memberVue = new Vue({
//     el: '.main_member',
//     data() {
//         return {
//             memberData: [],
//         }
//     },
//     mounted() {
//         function getMember() {
//             let xhr = new XMLHttpRequest()
//             xhr.onload = () => {
//                 console.log(JSON.parse(xhr.responseText))
//                 this.memberData = JSON.parse(xhr.responseText)
//                 console.log(this.memberData)
//             }
//             xhr.open('get', 'php/getMemberData.php', true)
//             xhr.send(null)
//         }
//         getMember()
//     },
//     methods: {
//         do() {
//             alert('work')
//         },
//     },

//     computed: {
//         // getLevel(){
//         //     if(this.member.mLevel == "1"){
//         //         return "等級一";
//         //     }else if(this.member.mLevel == "2"){
//         //         return "等級二";
//         //     }else if(this.member.mLevel == "3"){
//         //         return "等級三";
//         //     }
//         // }
//     },
// })




// const levelVue = new Vue({
//     el: '.main_level',
//     mounted() {},
// })