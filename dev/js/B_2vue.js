// MEMBER LIST
Vue.component('all-member', {
    data() {
        return {
            mems: '',
            lightbox: false,
            lightbox_delete: false,
            lightbox_mNo: '',
            lightbox_state: '',
            lightbox_mName: '',
            lightbox_text: '',
            mNo: '',
        };
    },
    props: [],

    template: `
<div class="main_member main">
    <div class="main_top">
        <div class="search_bar">
            <div class="search-input">
                <input type="search" placeholder="Enter No. Or Name">
                <button>
                    <img src="./icon/magnifier_white.png">
                </button>  
            </div>
        </div>
    </div>
    <div class="main_bottom">
        <table>
            <tr>
                <th>No</th>
                <th>Id</th>
                <th>Name</th>
                <th>Mail</th>
                <th>Phone</th>
                <th>Level</th>
                <th>Delete</th>
                <th>State</th>
            </tr>
            <tr v-for="(value,key) in mems">
                <td>{{value.mNo}}</td>
                <td>{{value.mId}}</td>
                <td>{{value.mName}}</td>
                <td>{{value.mMail}}</td>
                <td>{{value.mPhone}}</td>
                <td>{{changetype(value.mLevel)}}</td>
                <td>
                    <img class="delete" @click="lightbox_delete_show(value.mNo,value.mName)" src="./icon/backend_trash.png">
                </td>
                <td @click="lightbox_show(value.mNo,value.mState,value.mName)">  
                    <div class="button">
                        <input type="checkbox" v-model="value.ischecked">
                        <label></label>
                    </div>
                </td>
            </tr>
        </table>
    </div>
<!-- 確認停權/復權的燈箱 -->
    <div class="lightbox_black" v-if="lightbox">
        <div class="lightbox" >
            <div class="content">Do you want to <span>{{lightbox_text}}</span> No.<span>{{lightbox_mNo}}</span> <span>{{lightbox_mName}}</span>?</div>
            <div>
                <button class="cancel" @click="lightbox = false">Cancel</button>
                <button class="continue" @click="change_state(lightbox_mNo,lightbox_state,lightbox_mName)">Continue</button>
            </div>
        </div>
    </div>
<!-- 確認刪除的燈箱 -->
    <div class="lightbox_delete_black" v-if="lightbox_delete">
        <div class="lightbox" >
            <div class="content">Do you want to <span>delete</span> No.<span>{{lightbox_mNo}}</span> <span>{{lightbox_mName}}</span> ?</div>
            <div>
                <button class="cancel" @click="lightbox_delete = false">Cancel</button>
                <button class="continue" @click="delete_item(lightbox_mNo)">Continue</button>
            </div>
        </div>
    </div>
</div>
  `,
    methods: {
        //呼叫php程式，取回相關資料，並用json()轉回一般陣列
        get_mems: async function () {
            const res = await fetch('./php/getMemData.php', {}).then(function (data) {
                return data.json();
            });
            // 取回res值後，呼叫另一隻函式
            this.mems = res;
        },
        // 將分類數字轉為文字
        changetype(mLevel) {
            if (mLevel == 1) {
                return 'Silver';
            } else if (mLevel == 2) {
                return 'Gold';
            } else if (mLevel == 3) {
                return 'Diamond';
            }
        },
        // ==*刪除的燈箱
        // 點擊刪除後，顯示燈箱 並帶入值
        lightbox_delete_show: function (mNo,mName) {
            this.lightbox_delete = true;
            this.lightbox_mNo = mNo;
            this.lightbox_mName = mName;
        },
        // 點擊 確定刪除後 觸發 php程式。完成後 重新撈取一次資料
        delete_item: async function (mNo) {
            const res = await fetch('./php/delMemData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mNo: mNo,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox_delete = false;
            //完成後 重新撈取一次資料
            this.get_mems();
        },

        // ==*改狀態的燈箱
        // 點擊狀態後，顯示燈箱 並帶入值
        lightbox_show: function (mNo, mState, mName) {
            this.lightbox = true;
            this.lightbox_mNo = mNo;
            this.lightbox_mName = mName;
            // 跳窗內顯示的內容
            if (mState == 0) {
                this.lightbox_state = 1;
                this.lightbox_text = '復權';
            } else if (mState == 1) {
                this.lightbox_state = 0;
                this.lightbox_text = '停權';
            }
        },
        // 點擊 確定修改後 觸發 php程式。完成後 重新撈取一次資料
        change_state: async function (mNo, mState, mName) {
            const res = await fetch('./php/editMemData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mNo: mNo,
                    mState: mState,
                    mName: mName,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox = false;
            //完成後 重新撈取一次資料
            this.get_mems();
        },
    },
    // template 渲染前 會先去執行以下函式
    created() {
        this.get_mems();
    },
    mounted() {},
});


// LEVEL LIST
Vue.component('all-level', {
    data() {
        return {
            levels: '',
            lightbox: false,
            level_edit_lightbox: false,
            lightbox_mLevel: '',
            lightbox_mWriteD: '',
            lightbox_mTotal: '',
            mLevel: '',
        };
    },
    props: [],

    template: `
<div class="main_level main">
    <div class="main_top">
    </div>
    <div class="main_bottom">
        <table>
            <tr>
                <th>Level</th>
                <th>Days on record</th>
                <th>Accumulated amount</th>
                <th>Edit</th>
            </tr>
            <tr v-for="(value,key) in levels">
                <td>{{changetype(value.mLevel)}}</td>
                <td>{{value.mWriteD}}</td>
                <td>{{value.mTotal}}</td>
                <td>
                    <img class="edit" @click="level_edit(value.mLevel)" src="./icon/backend_edit.png">
                </td>
            </tr>
        </table>
    </div>
    <edit-level v-if="level_edit_lightbox" :mLevel="mLevel" @changelightbox="leveleditlightbox()"></edit-level>
</div>    
  `,
    methods: {
        //呼叫php程式，取回相關資料，並用json()轉回一般陣列
        get_level: async function () {
            const res = await fetch('./php/getLevelData.php', {}).then(function (data) {
                return data.json();
            });
            // 取回res值後，呼叫另一隻函式
            this.levels = res;
        },
        // 將分類數字轉為文字
        changetype(mLevel) {
            if (mLevel == 1) {
                return 'Silver';
            } else if (mLevel == 2) {
                return 'Gold';
            } else if (mLevel == 3) {
                return 'Diamond';
            }
        },
        // ==*編輯的燈箱
        //點擊編輯 開啟編輯燈箱
        level_edit(mLevel) {
            this.level_edit_lightbox = true;
            this.mLevel = mLevel;
        },
        //關閉編輯燈箱，同時重新渲染畫面
        leveleditlightbox() {
            this.level_edit_lightbox = false;
            setTimeout(this.get_level, 100);
        },

    },
    // template 渲染前 會先去執行以下函式
    created() {
        this.get_level();
    },
    mounted() {},
});

// LEVEL EDIT
Vue.component('edit-level', {
    data() {
        return {
            mLevel: '',
            mWriteD: '',
            mTotal: '',
            error_text1: '',
            error_text2: '',
        };
    },
    props: ['mLevel'],

    template: `
    <div class="lightbox_edit_black">
        <div class="lightbox" >                                        
            <h6>Edit Upgrade Conditions</h6>
            <div>
                <div class="acc_title">Level</div>
                <div class="acc_acc_con">{{changetype(mLevel)}}</div>
            </div>
            <div>
                <div class="acc_title">Days</div>
                <div>
                    <input type="text" required="required" v-model="mWriteD" class="acc_con">
                    <div class="acc_tip">{{error_text1}}</div>
                </div>
            </div>
            <div>
                <div class="acc_title">Amount</div>
                <div>
                    <input type="text" required="required" v-model="mTotal" class="acc_con">
                    <div class="acc_tip">{{error_text2}}</div>
                </div>
            </div>
            <div>
                <button class="cancel" @click="changelightbox" >Cancel</button>
                <button class="continue" @click="edit_level_func(mLevel,mWriteD,mTotal)">Edit</button>
            </div>                                                                                                                        
        </div>
    </div>
    `,
    methods: {
        get_level: async function () {
            const res = await fetch('./php/getOneLevelData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mLevel: this.mLevel,
                }),
            }).then(function (data) {
                return data.json();
            });
            this.mWriteD = res[0].mWriteD;
            this.mTotal = res[0].mTotal;
        },
        // 將分類數字轉為文字
        changetype(mLevel) {
            if (mLevel == 1) {
                return 'Silver';
            } else if (mLevel == 2) {
                return 'Gold';
            } else if (mLevel == 3) {
                return 'Diamond';
            }
        },
        
        //關燈箱
        changelightbox() {
            this.$emit('changelightbox');
        },

        //點擊 確認修改後將資料傳至DB
        edit_level_func: async function (mLevel,mWriteD,mTotal) {
            console.log(mLevel,mWriteD,mTotal)

            //送出編輯前 確認欄位 是否符合規定
            // if (mWriteD >= 0) {
            //     console.log('天數 OK')
            // } else {
            //     this.error_text1 = 'Please enter a positive integer.';
            //     return '';
            // }
            // if (mTotal >= 0) {
            //     console.log('金額 OK') 
            // } else {
            //     this.error_text2 = 'Please enter a positive integer.';
            //     return '';
            // }
            
            const res = await fetch('./php/editOneLevelData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mLevel: mLevel,
                    mWriteD: mWriteD,
                    mTotal: mTotal,
                }),
            }).then(function () {
                console.log('in');
            });

            //關燈箱
            this.changelightbox();
        },
    },
    created() {
        this.get_level();
    },
    watch: {},
});


new Vue({
    el: '#app1',
});
new Vue({
    el: '#app2',
});
