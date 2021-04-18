// CHATBOT LIST
Vue.component('all-chat', {
    data() {
        return {
            chats: '',
            lightbox_delete: false,
            chat_edit_lightbox: false,
            chat_add_lightbox: false,
            lightbox_keyNo: '',
            lightbox_text: '',
            keyNo: '',
        };
    },
    props: [],

    template: `
<div class="main">
    <div class="main_top">
        <div class="search_bar">
            <div class="search-input">
                <input type="search" placeholder="Enter No. Or Keyword">
                <button>
                    <img src="./icon/magnifier_white.png">
                </button>  
            </div>
            <div class="custom-select">
                <select name="sType">
                    <option value="0">ALL</option>
                    <option value="0">ALL</option>
                    <option value="1">Calories Diary</option>
                    <option value="2">Member</option>
                    <option value="3">Order</option>
                    <option value="4">Product</option>
                </select>
            </div>
        </div>
        <div class="add" @click="chat_add()">
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
                <th>Type</th>
                <th>Keyword</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr v-for="(value,key) in chats">
                <td>{{value.keyNo}}</td>
                <td>{{changetype(value.keyType)}}</td>
                <td>{{value.keyW}}</td>
                <td>{{value.keyQ}}</td>
                <td>{{value.keyA}}</td>
                <td>
                    <img class="edit" @click="chat_edit(value.keyNo)" src="./icon/backend_edit.png">
                </td>
                <td>
                    <img class="delete" @click="lightbox_delete_show(value.keyNo)" src="./icon/backend_trash.png">
                </td>
            </tr>
        </table>
    </div>
    <!-- 確認 刪除 的燈箱 -->
    <div class="lightbox_black" v-if="lightbox_delete">
        <div class="lightbox">
            <div class="content">Do you want to <span>delete</span> question no.<span>{{lightbox_keyNo}}</span> ?</div>
            <div>
                <button class="cancel" @click="lightbox_delete = false">Cancel</button>
                <button class="continus" @click="delete_item(lightbox_keyNo)" >Delete</button>
            </div>
        </div>
    </div>
    <edit-chat v-if="chat_edit_lightbox" :keyNo="keyNo" @changelightbox="chateditlightbox()"></edit-chat>
    <add-chat v-if="chat_add_lightbox"  @changelightbox="chataddlightbox()"></add-chat>   
</div>
  `,
    methods: {
        //呼叫php程式，取回相關資料，並用json()轉回一般陣列
        get_chat: async function () {
            const res = await fetch('./php/getChatData.php', {}).then(function (data) {
                return data.json();
            });
            // 取回res值後，呼叫另一隻函式
            this.chats = res;
        },
        // 將分類數字轉為文字
        changetype(keyType) {
            if (keyType == 1) {
                return 'Calories Diary';
            } else if (keyType == 2) {
                return 'Member';
            } else if (keyType == 3) {
                return 'Order';
            } else if (keyType == 4) {
                return 'Product';
            }
        },
        // ==*刪除的燈箱
        // 點擊刪除後，顯示燈箱 並帶入值
        lightbox_delete_show: function (keyNo) {
            this.lightbox_delete = true;
            this.lightbox_keyNo = keyNo;
        },
        // 點擊 確定刪除後 觸發 php程式。完成後 重新撈取一次資料
        delete_item: async function (keyNo) {
            const res = await fetch('./php/delChatData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    keyNo: keyNo,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox_delete = false;
            //完成後 重新撈取一次資料
            this.get_chat();
        },

        // ==*編輯的燈箱
        //點擊編輯 開啟編輯燈箱
        chat_edit(keyNo) {
            this.chat_edit_lightbox = true;
            this.keyNo = keyNo;
        },
        //關閉編輯燈箱，同時重新渲染畫面
        chateditlightbox() {
            this.chat_edit_lightbox = false;
            setTimeout(this.get_chat, 100);
        },

        // ==*新增的燈箱
        //點擊新增 開啟新增燈箱
        chat_add() {
            this.chat_add_lightbox = true;
        },
        //關閉新增燈箱，同時重新渲染畫面
        chataddlightbox() {
            this.chat_add_lightbox = false;
            this.get_chat();
        },

    },
    // template 渲染前 會先去執行以下函式
    created() {
        this.get_chat();
    },
    mounted() {},
});


// CHATBOT EDIT
Vue.component('edit-chat', {
    data() {
        return {
            keyNo: '',
            keyType: '',
            keyW: '',
            keyQ: '',
            keyA: '',
            error_text1: '',
            error_text2: '',
            error_text3: '',
        };
    },
    props: ['keyNo'],

    template: `
<div class="lightbox_edit_black">
    <div class="lightbox" >                                        
        <h6>Edit Question</h6>
        <div>
            <div class="acc_title">No</div>
            <div class="acc_acc_con">{{keyNo}}</div>
        </div>
        <div>
            <div class="acc_title">Type</div>
            <select class="acc_con" v-model="keyType">
                <option value="1">Calories Diary</option>
                <option value="2">Member</option>
                <option value="3">Order</option>
                <option value="4">Product</option>
            </select>
        </div>                             
        <div>
            <div class="acc_title">Keyword</div>
            <div>
                <input type="text" required="required" maxlength="10" class="acc_con" v-model="keyW">
                <div class="acc_tip">{{error_text1}}</div>
            </div>
        </div>            
        <div>
            <div class="acc_title">Question</div>
            <div>
                <input type="text" required="required" maxlength="50" class="acc_con" v-model="keyQ"></textarea>
                <div class="acc_tip">{{error_text2}}</div>
            </div>
        </div>
        <div>
            <div class="acc_title">Answer</div>
            <div>
                <textarea rows="3" cols="60" required="required" maxlength="300" class="acc_con" v-model="keyA"></textarea>
                <div class="acc_tip">{{error_text3}}</div>
            </div>
        </div>
        <div>
            <button class="cancel" @click="changelightbox">Cancel</button>
            <button class="continus" @click="edit_chat_func(keyNo,keyType,keyW,keyQ,keyA)">Edit</button>
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


// CHATBOT ADD
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
<div class="lightbox_add_black">
    <div class="lightbox" >                                        
        <h6>Add Question</h6>
            <div>
                <div class="acc_title">Type</div>
                <div>
                    <select class="acc_con" v-model="keyType">
                        <option value="1">Calories Diary</option>
                        <option value="2">Member</option>
                        <option value="3">Order</option>
                        <option value="4">Product</option>
                    </select>
                    <div class="acc_tip">{{error_text}}</div>
                </div>
            </div>                             
        <div>
            <div class="acc_title">Keyword</div>
            <div>
                <input type="text" required="required" maxlength="10" class="acc_con" v-model="keyW">
                <div class="acc_tip">{{error_text1}}</div>
            </div>
        </div>            
        <div>
            <div class="acc_title">Question</div>
            <div>
                <input type="text" required="required" maxlength="50" class="acc_con" v-model="keyQ"></textarea>
                <div class="acc_tip">{{error_text2}}</div>
            </div>
        </div>
        <div>
            <div class="acc_title">Answer</div>
            <div>
                <textarea rows="3" cols="60" required="required" maxlength="300" class="acc_con" v-model="keyA"></textarea>
                <div class="acc_tip">{{error_text3}}</div>
            </div>
        </div>
        <div>
            <button class="cancel" @click="changelightbox">Cancel</button>
            <button class="continus" @click="add_chat_func(keyType,keyW,keyQ,keyA)">Add</button>
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

