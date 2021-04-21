// POINT LIST
Vue.component('all-point', {
    data() {
        return {
            point: '',
            lightbox_delete: false,
            point_edit_lightbox: false,
            lightbox_poNo: '',
            lightbox_text: '',
            poNo: '',
        };
    },
    props: [],

    template: `
<div class="main">
    <div class="main_top">
    </div>
    <div class="main_bottom">
        <table>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Points</th>
              <th>Edit</th>
            </tr>
            <tr v-for="(value,key) in point">
                <td>{{value.poNo}}</td>
                <td>{{value.poName}}</td>
                <td>{{changetype(value.poType)}}</td>
                <td>{{value.startTime}}</td>
                <td>{{value.endTime}}</td>
                <td>{{value.points}}</td>
                <td>
                    <img class="edit" @click="point_edit(value.poNo)" src="./icon/backend_edit.png">
                </td>
            </tr>
        </table>
    </div>
    <edit-point v-if="point_edit_lightbox" :keyNo="poNo" @changelightbox="chateditlightbox()"></edit-point>
</div>
  `,
    methods: {
        //呼叫php程式，取回相關資料，並用json()轉回一般陣列
        get_point: async function () {
            const res = await fetch('./php/getPointData.php', {}).then(function (data) {
                return data.json();
            });
            // 取回res值後，呼叫另一隻函式
            this.point = res;
        },
        // 將分類數字轉為文字
        changetype(poType) {
            if (poType == 1) {
                return 'Sing-up';
            } else if (poType == 2) {
                return 'Login';
            } else if (poType == 3) {
                return 'Level';
            }
        },
        changeDurtype(poDur) {
            if (poDur == 1) {
                return 'Temporary';
            } else if (poDur == 2) {
                return 'Permanent';
            }
        },

        // ==*編輯的燈箱
        //點擊編輯 開啟編輯燈箱
        point_edit(poNo) {
            this.point_edit_lightbox = true;
            this.poNo = poNo;
        },
        //關閉編輯燈箱，同時重新渲染畫面
        chateditlightbox() {
            this.point_edit_lightbox = false;
            setTimeout(this.get_point, 100);
        },
    },
    // template 渲染前 會先去執行以下函式
    created() {
        this.get_point();
    },
    mounted() {},
});


// POINT EDIT
Vue.component('edit-point', {
    data() {
        return {
            poNo: '',
            poType: '',
            poName: '',
            startTime: '',
            endTime: '',
            points: '',
            error_text1: '',
            error_text2: '',
        };
    },
    props: ['poNo'],

    template: `
<div class="lightbox_edit_black">
    <div class="lightbox" >                                        
        <h6>Edit Point Activity</h6>
        <div>
            <div class="acc_title">No</div>
            <div class="acc_acc_con">{{poNo}}</div>
        </div>
        <div>
            <div class="acc_title">Name</div>
            <div>
                <input type="text" required="required" maxlength="20" class="acc_con" v-model="poName">
                <div class="acc_tip">{{error_text1}}</div>
            </div>
        </div>
        <div>
            <div class="acc_title">Type</div>
            <select class="acc_con">
                <option value="1">Sing-up</option>
                <option value="2">Login</option>
                <option value="3">Level</option>
            </select>
        </div>
        <div>
            <div class="acc_title">Start date</div>
            <div>
                <input type="date" name="singledate" required="required" class="acc_con">
            </div>
        </div>
        <div>
            <div class="acc_title">End date</div>
            <div>
                <input type="date" name="singledate" class="acc_con">
            </div>
        </div>
        <div>
            <div class="acc_title">Points</div>
            <div>
                <input type="text" required="required" class="acc_con">
                <div class="acc_tip">{{error_text2}}</div>
            </div>
        </div>
        <div>
            <button class="cancel" @click="changelightbox">Cancel</button>
            <button class="continus" @click="edit_point_func(poNo,poName,poType,startTime,endTime,points)">Edit</button>
        </div>                                                                                                                        
    </div>
</div>
    `,
    methods: {
        get_point: async function () {
            const res = await fetch('./php/getOnePointData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    poNo: this.poNo,
                }),
            }).then(function (data) {
                return data.json();
            });
            this.poType = res[0].poType;
            this.poName = res[0].poName;
            this.startTime = res[0].startTime;
            this.endTime = res[0].endTime;
            this.points = res[0].points;
        },
        
        //關燈箱
        changelightbox() {
            this.$emit('changelightbox');
        },

        //點擊 確認修改後將資料傳至DB
        edit_point_func: async function (poNo,poName,poType,startTime,endTime,points) {

            //送出編輯前 確認欄位 是否符合規定
            if (poName.length >= 1 && poName.length <= 20) {
                console.log('名字')
            } else {
                this.error_text1 = 'Please enter within 20 characters.';
                return '';
            }
            if (points.length >= 0) {
                console.log('問題 OK') 
            } else {
                this.error_text2 = 'Please enter only numbers.';
                return '';
            }
            
            const res = await fetch('./php/editOnePointData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    poNo: poNo,
                    poName: poName,
                    poType: poType,
                    startTime: startTime,
                    endTime: endTime,
                    points: points,
                }),
            }).then(function () {
                console.log('in');
            });

            //關燈箱
            this.changelightbox();
        },
    },
    created() {
        this.get_point();
    },
    watch: {},
});


new Vue({
    el: '#app',
});

