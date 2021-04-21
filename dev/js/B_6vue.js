// CHATBOT LIST
Vue.component('all-point', {
    data() {
        return {
            point: '',
            lightbox_delete: false,
            point_edit_lightbox: false,
            point_add_lightbox: false,
            lightbox_poNo: '',
            lightbox_text: '',
            poNo: '',
        };
    },
    props: [],

    template: `
<div class="main">
    <div class="main_top">
        <div class="search_bar">
            <div class="search-input">
                <input type="search" placeholder="Enter No. Or Name">
                <button>
                    <img src="./icon/magnifier_white.png">
                </button>  
            </div>
            <div class="custom-select">
                <select name="sType">
                    <option value="0">ALL</option>
                    <option value="0">ALL</option>
                    <option value="1">Sing-up</option>
                    <option value="2">Login</option>
                    <option value="3">Level</option>
                </select>
            </div>
        </div>
        <div class="add" @click="point_add()">
            <button>
                <img src="./icon/add_white.png">
                ADD
            </button>
        </div>
    </div>
    <div class="main_bottom">
        <table>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Points</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr v-for="(value,key) in point">
                <td>{{value.poNo}}</td>
                <td>{{value.poName}}</td>
                <td>{{changetype(value.poType)}}</td>
                <td>{{changeDurtype(value.poDur)}}</td>
                <td>{{value.startTime}}</td>
                <td>{{value.endTime}}</td>
                <td>{{value.points}}</td>
                <td>
                    <img class="edit" @click="point_edit(value.poNo)" src="./icon/backend_edit.png">
                </td>
                <td>
                    <img class="delete" @click="lightbox_delete_show(value.poNo)" src="./icon/backend_trash.png">
                </td>
            </tr>
        </table>
    </div>
<!-- 確認刪除的燈箱 -->
    <div class="lightbox_delete_black" v-if="lightbox_delete">
        <div class="lightbox" >
            <div class="content">Do you want to <span>delete</span> <span>{{lightbox_poNo}}</span> ?</div>
            <div>
                <button class="cancel" @click="lightbox_delete = false">Cancel</button>
                <button class="continus" @click="delete_item(lightbox_poNo)" >Delete</button>
            </div>
        </div>
    </div>
    <edit-point v-if="point_edit_lightbox" :keyNo="poNo" @changelightbox="chateditlightbox()"></edit-point>
    <add-point v-if="point_add_lightbox"  @changelightbox="chataddlightbox()"></add-point>   
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
        // ==*刪除的燈箱
        // 點擊刪除後，顯示燈箱 並帶入值
        lightbox_delete_show: function (poNo) {
            this.lightbox_delete = true;
            this.lightbox_poNo = poNo;
        },
        // 點擊 確定刪除後 觸發 php程式。完成後 重新撈取一次資料
        delete_item: async function (poNo) {
            const res = await fetch('./php/delPointData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    poNo: poNo,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox_delete = false;
            //完成後 重新撈取一次資料
            this.get_point();
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

        // ==*新增的燈箱
        //點擊新增 開啟新增燈箱
        chat_add() {
            this.point_add_lightbox = true;
        },
        //關閉新增燈箱，同時重新渲染畫面
        chataddlightbox() {
            this.point_add_lightbox = false;
            this.get_point();
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
            poDur: '',
            poType: '',
            poName: '',
            startTime: '',
            endTime: '',
            points: '',
            error_text1: '',
            error_text2: '',
            error_text3: '',
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
            <div class="acc_title">Duration</div>
            <select class="acc_con">
                <option value="1">Permanent</option>
                <option value="2">Temporary</option>
            </select>
        </div>
        <div>
            <div class="acc_title">Start date</div>
            <div>
                <input type="text" name="singledate" required="required" class="acc_con">
            </div>
        </div>
        <div>
            <div class="acc_title">End date</div>
            <div>
                <input type="text" name="singledate" class="acc_con">
                <div class="acc_tip">Please enter only numbers and decimal point.</div>
            </div>
        </div>
        <div>
            <div class="acc_title">Points</div>
            <div>
                <input type="text" required="required" class="acc_con">
                <div class="acc_tip">Please enter only numbers.</div>
            </div>
        </div>
        <div>
            <button class="cancel">Cancel</button>
            <button class="continus">Edit</button>
        </div>                                                                                                                        
    </div>
</div>
    `,
    methods: {
        get_chat: async function () {
            const res = await fetch('./php/getOneChatData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    keyNo: this.keyNo,
                }),
            }).then(function (data) {
                return data.json();
            });
            this.keyType = res[0].keyType;
            this.keyW = res[0].keyW;
            this.keyQ = res[0].keyQ;
            this.keyA = res[0].keyA;
        },
        
        //關燈箱
        changelightbox() {
            this.$emit('changelightbox');
        },

        //點擊 確認修改後將資料傳至DB
        edit_chat_func: async function (keyNo,keyType,keyW,keyQ,keyA) {
            // console.log(keyNo,keyType,keyW,keyQ,keyA);

            //送出編輯前 確認欄位 是否符合規定
            if (keyW.length >= 1 && keyW.length <= 10) {
                console.log('關鍵字 OK')
            } else {
                this.error_text1 = 'Please enter within 10 characters.';
                return '';
            }
            if (keyQ.length >= 1 && keyQ.length <= 50) {
                console.log('問題 OK') 
            } else {
                this.error_text2 = 'Please enter within 50 characters.';
                return '';
            }
            if (keyA.length >= 1 && keyA.length <= 300) {
                console.log('答案 OK')
            } else {
                this.error_text3 = 'Please enter within 300 characters.';
                return '';
            }
            
            const res = await fetch('./php/editOneChatData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    keyNo: keyNo,
                    keyType: keyType,
                    keyW: keyW,
                    keyQ: keyQ,
                    keyA: keyA,
                }),
            }).then(function () {
                console.log('in');
            });

            //關燈箱
            this.changelightbox();
        },
    },
    created() {
        this.get_chat();
    },
    watch: {},
});


// POINT ADD
Vue.component('add-chat', {
    data() {
        return {
            keyNo: '',
            keyType: '',
            keyW: '',
            keyQ: '',
            keyA: '',
            error_text: '',
            error_text1: '',
            error_text2: '',
            error_text3: '',
        };
    },
    props: [],

    template: `
    <!-- 新增的燈箱 沒有No. -->
    <div class="lightbox_add_black">
        <div class="lightbox" >                                        
            <h6>Add Point Activity</h6>                      
            <div>
                <div class="acc_title">Name</div>
                <div>
                    <input type="text" required="required" maxlength="20" class="acc_con">
                    <div class="acc_tip">Please enter within 20 characters.</div>
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
                <div class="acc_title">Duration</div>
                <select class="acc_con">
                    <option value="1">Permanent</option>
                    <option value="2">Temporary</option>
                </select>
            </div>
            <div>
                <div class="acc_title">Start date</div>
                <div>
                    <input type="date" id="AAA" required="required" class="acc_con">
                </div>
            </div>
            <div>
                <div class="acc_title">End date</div>
                <div>
                    <input type="date" class="acc_con">
                    <div class="acc_tip">Please enter only numbers and decimal point.</div>
                </div>
            </div>
            <div>
                <div class="acc_title">Points</div>
                <div>
                    <input type="text" required="required" class="acc_con">
                    <div class="acc_tip">Please enter only numbers.</div>
                </div>
            </div>
            <div>
                <button class="cancel">Cancel</button>
                <button class="continus">Add</button>
            </div>                                                                                                                 
        </div>
    </div>
        `,
    methods: {
        //關燈箱
        changelightbox() {
            this.$emit('changelightbox');
        },
        //點擊 確認新增後將資料傳至DB
        add_chat_func: async function (keyType,keyW,keyQ,keyA) {
            // console.log(keyType,keyW,keyQ,keyA);

            //送出編輯前 確認欄位 是否符合規定
            if (keyType !== '') {
                console.log('類別 OK')
            } else {
                this.error_text = 'Please select a type.';
                return '';
            }
            if (keyW.length >= 1 && keyW.length <= 10) {
                console.log('關鍵字 OK')
            } else {
                this.error_text1 = 'Please enter within 10 characters.';
                return '';
            }
            if (keyQ.length >= 1 && keyQ.length <= 50) {
                console.log('問題 OK') 
            } else {
                this.error_text2 = 'Please enter within 50 characters.';
                return '';
            }
            if (keyA.length >= 1 && keyA.length <= 300) {
                console.log('答案 OK')
            } else {
                this.error_text3 = 'Please enter within 300 characters.';
                return '';
            }

            const res = await fetch('./php/addChatData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    keyType: keyType,
                    keyW: keyW,
                    keyQ: keyQ,
                    keyA: keyA,
                }),
            }).then(function () {
                console.log('in');
            });
            console.log('完成');

            //關燈箱
            this.changelightbox();
            //完成後 重新撈取一次資料
            this.get_chat();
        },
    },
    created() {
        this.get_chat();
    },
});

new Vue({
    el: '#app',
});

