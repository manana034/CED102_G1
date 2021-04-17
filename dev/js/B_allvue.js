// HEALTH NEWS LIST
Vue.component('all-info', {
    data() {
        return {
            //撈出來的 課程資料
            infos: '',
            lightbox: false,
            lightbox_delete: false,
            info_edit_lightbox: false,
            info_add_lightbox: false,
            lightbox_infoNo: '',
            lightbox_state: '',
            lightbox_text: '',
            infoNo: '',
        };
    },
    props: [],

    template: `
<div class="main">
    <div class="main_top">
        <div class="search_bar">
            <div class="search-input">
                <input type="search" placeholder="Enter No. Or Title">
                <button>
                    <img src="./icon/magnifier_white.png">
                </button>  
            </div>
            <div class="custom-select">
                <select name="sType">
                    <option value="0">ALL</option>
                    <option value="0">ALL</option>
                    <option value="1">Food</option>
                    <option value="2">Exercise</option>
                    <option value="3">Regimen</option>
                </select>
            </div>
        </div>
        <div class="add">
            <button @click="info_add()">
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
              <th>Title</th>
              <th>Photo</th>
              <th>Content</th>
              <th>Publish Date</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>State</th>
            </tr>
            <tr v-for="(value,key) in infos" >
                <td>{{value.infoNo}}</td>
                <td>{{changetype(value.infoType)}}</td>
                <td>{{value.infoTitle}}</td>
                <td>
                    <img :src="value.infoPhoto2">
                </td>
                <td>{{value.reductinfo}}</td>
                <td>{{value.infoTime}}</td>
                <td>
                    <img class="edit" @click="info_edit(value.infoNo)" src="./icon/backend_edit.png">
                </td>
                <td>
                    <img class="delete" @click="lightbox_delete_show(value.infoNo)" src="./icon/backend_trash.png">
                </td>
                <td @click="lightbox_show(value.infoNo,value.infoState)">  
                    <div class="button">
                        <input type="checkbox" v-model="value.ischecked">
                        <label></label>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <!-- 確認 上架/下架 的燈箱 -->
    <div class="lightbox_black" v-if="lightbox">
        <div class="lightbox" >
            <div class="content">Do you want to <span>{{lightbox_text}}</span> article no.<span>{{lightbox_infoNo}}</span> ?</div>
            <div>
                <button class="cancel" @click="lightbox = false">Cancel</button>
                <button class="continus" @click="change_state(lightbox_infoNo,lightbox_state)" >Continus</button>
            </div>
        </div>
    </div>
    <!-- 確認 刪除 的燈箱 -->
    <div class="lightbox_black" v-if="lightbox_delete">
        <div class="lightbox">
            <div class="content">Do you want to <span>delete</span> article no.<span>{{lightbox_infoNo}}</span> ?</div>
            <div>
                <button class="cancel" @click="lightbox_delete = false">Cancel</button>
                <button class="continus" @click="delete_item(lightbox_infoNo)" >Delete</button>
            </div>
        </div>
    </div>
    <edit-info v-if="info_edit_lightbox" :infoNo="infoNo" @changelightbox="infoeditlightbox()"></edit-info>
    <add-info v-if="info_add_lightbox"  @changelightbox="infoaddlightbox()"></add-info>   
</div>
  `,
    methods: {
        //呼叫php程式，取回相關資料，並用json()轉回一般陣列
        get_info: async function () {
            const res = await fetch('./php/getInfoData.php', {}).then(function (data) {
                return data.json();
            });
            // 取回res值後，呼叫另一隻函式
            this.infos = res;
        },
        // 將分類數字轉為文字
        changetype(infoType) {
            if (infoType == 1) {
                return 'Food';
            } else if (infoType == 2) {
                return 'Exercise';
            } else if (infoType == 3) {
                return 'Regimen';
            }
        },
        // ==*刪除的燈箱
        // 點擊刪除後，顯示燈箱 並帶入值
        lightbox_delete_show: function (infoNo) {
            this.lightbox_delete = true;
            this.lightbox_infoNo = infoNo;
        },
        // 點擊 確定刪除後 觸發 php程式。完成後 重新撈取一次資料
        delete_item: async function (infoNo) {
            const res = await fetch('./php/delInfoData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    infoNo: infoNo,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox_delete = false;
            //完成後 重新撈取一次資料
            this.get_info();
        },

        // ==*改狀態的燈箱
        // 點擊狀態後，顯示燈箱 並帶入值
        lightbox_show: function (infoNo, infoState) {
            this.lightbox = true;
            this.lightbox_infoNo = infoNo;
            // 跳窗內顯示的內容
            if (infoState == 0) {
                this.lightbox_state = 1;
                this.lightbox_text = 'show';
            } else if (infoState == 1) {
                this.lightbox_state = 0;
                this.lightbox_text = 'hide';
            }
        },
        // 點擊 確定修改後 觸發 php程式。完成後 重新撈取一次資料
        change_state: async function (infoNo, state) {
            const res = await fetch('./php/editInfoData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    infoNo: infoNo,
                    infoState: state,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox = false;
            //完成後 重新撈取一次資料
            this.get_info();
        },

        // ==*編輯的燈箱
        //點擊編輯 開啟編輯燈箱
        info_edit(infoNo) {
            this.info_edit_lightbox = true;
            this.infoNo = infoNo;
        },
        //關閉編輯燈箱，同時重新渲染畫面
        infoeditlightbox() {
            this.info_edit_lightbox = false;
            setTimeout(this.get_info, 100);
            // this.get_info();
        },

        // ==*新增的燈箱
        //點擊新增 開啟新增燈箱
        info_add() {
            this.info_add_lightbox = true;
        },
        //關閉新增燈箱，同時重新渲染畫面
        infoaddlightbox() {
            this.info_add_lightbox = false;
            this.get_info();
        },

    },
    // template 渲染前 會先去執行以下函式
    created() {
        this.get_info();
    },
    mounted() {},
});


// HEALTH NEWS EDIT
Vue.component('edit-info', {
    data() {
        return {
            infoNo: '',
            infoType: '',
            infoTitle: '',
            infoPhoto1: '',
            infoPhoto2: '',
            infoPhoto3: '',
            infoContent1: '',
            infoContent2: '',
            infoContent3: '',
            error_text1: '',
            error_text2: '',
            error_text3: '',
            error_text4: '',
        };
    },
    props: ['infoNo'],

    template: `
<div class="lightbox_edit_black">
    <div class="lightbox" >                                        
        <h6>Edit Article</h6>
        <div>
            <div class="acc_title">No</div>
            <div class="acc_acc_con">{{infoNo}}</div>
        </div>
        <div>
            <div class="acc_title">Type</div>
            <select class="acc_con" v-model="infoType" @change="changetype()">
                <option value="1">Food</option>
                <option value="2">Exercise</option>
                <option value="3">Regimen</option>
            </select>
        </div>                             
        <div>
            <div class="acc_title">Title</div>
            <div>
                <input type="text" required="required" maxlength="50" class="acc_con" v-model="infoTitle">
                <div class="acc_tip">{{error_text1}}</div>
            </div>
        </div>
        <div>
            <div class="acc_title">Photo1</div>
            <div>
                <input type="file" accept=".jpg,.png,.mp4" class="acc_con" id="infoPhoto1" name="upFile[]">
                <!-- <img :src="infoPhoto1" alt="" > -->
            </div>
        </div>
        <div>
            <div class="acc_title">Photo2</div>
            <div>
                <input type="file" accept=".jpg,.png" class="acc_con" id="infoPhoto2" name="upFile[]">
                <!-- <img :src="infoPhoto2" alt="" > -->
            </div>
        </div>
        <div>
            <div class="acc_title">Photo3</div>
            <div>
                <input type="file" accept=".jpg,.png" class="acc_con" id="infoPhoto3" name="upFile[]">
                <!-- <img :src="infoPhoto3" alt="" > -->
            </div>
        </div>              
        <div>
            <div class="acc_title">Content1</div>
            <div>
                <textarea rows="3" cols="60" required="required" maxlength="800" class="acc_con" v-model="infoContent1"></textarea>
                <div class="acc_tip">{{error_text2}}</div>
            </div>
        </div>
        <div>
            <div class="acc_title">Content2</div>
            <div>
                <textarea rows="3" cols="60" required="required" maxlength="500" class="acc_con" v-model="infoContent2"></textarea>
                <div class="acc_tip">{{error_text3}}</div>
            </div>
        </div>
        <div>
            <div class="acc_title">Content3</div>
            <div>
                <textarea rows="3" cols="60" required="required" maxlength="500" class="acc_con" v-model="infoContent3"></textarea>
                <div class="acc_tip">{{error_text4}}</div>
            </div>
        </div>
        <div>
            <button class="cancel" @click="changelightbox">Cancel</button>
            <button class="continus" @click="edit_info_func(infoType,infoTitle,infoPhoto1,
                infoPhoto2,infoPhoto3,infoContent1,infoContent2,infoContent3)">Edit</button>
        </div>                                                                                                            
    </div>
</div>
    `,
    methods: {
        get_info: async function () {
            const res = await fetch('./php/getOneInfoData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    infoNo: this.infoNo,
                }),
            }).then(function (data) {
                return data.json();
            });
            this.infoType = res[0].infoType;
            this.infoTitle = res[0].infoTitle;
            this.infoPhoto1 = res[0].infoPhoto1;
            this.infoPhoto2 = res[0].infoPhoto2;
            this.infoPhoto3 = res[0].infoPhoto3;
            this.infoContent1 = res[0].infoContent1;
            this.infoContent2 = res[0].infoContent2;
            this.infoContent3 = res[0].infoContent3;
            this.changetype();
        },
        
        //關燈箱
        changelightbox() {
            this.$emit('changelightbox');
        },

        changetype() {
            if (this.infoType == 1) {
                this.infoTypeName = 'Food';
            } else if (this.infoType == 2) {
                this.infoTypeName = 'Exercise';
            } else if (this.infoType == 3) {
                this.infoTypeName = 'Regimen';
            }
        },

        //點擊 確認修改後將資料傳至DB
        edit_info_func: async function (infoType,infoTitle,infoPhoto1,infoPhoto2,infoPhoto3,infoContent1,infoContent2,infoContent3) {
            // console.log(infoType,infoTitle,infoPhoto1,infoPhoto2,infoPhoto3,infoContent1,infoContent2,infoContent3);

            //送出編輯前 確認欄位 是否符合規定
            if (infoTitle.length >= 1 && infoTitle.length <= 50) {
                console.log('title OK')
            } else {
                this.error_text1 = 'Please enter within 50 characters.';
                return '';
            }
            if (infoContent1.length >= 1 && infoContent1.length <= 800) {
                console.log('內容1 OK') 
            } else {
                this.error_text2 = 'Please enter within 800 characters.';
                return '';
            }
            if (infoContent2.length >= 1 && infoContent2.length <= 500) {
                console.log('內容2 OK')
            } else {
                this.error_text3 = 'Please enter within 500 characters.';
                return '';
            }
            if (infoContent3.length >= 1 && infoContent3.length <= 500) {
                console.log('內容3 OK')
            } else {
                this.error_text4 = 'Please enter within 500 characters.';
                return '';
            }

            // 照片
            let Photo1 = document.getElementById('infoPhoto1').files;
            let Photo2 = document.getElementById('infoPhoto2').files;
            let Photo3 = document.getElementById('infoPhoto3').files;

            let formData = new FormData();
            formData.append('infoNo', this.inforNo);
            formData.append('infoType', this.infoType);
            formData.append('infoTitle', this.infoTitle);
            formData.append('infoPhoto1', this.infoPhoto1);
            formData.append('infoPhoto2', this.infoPhoto2);
            formData.append('infoPhoto3', this.infoPhoto3);
            formData.append('infoContent1', this.infoContent1);
            formData.append('infoContent2', this.infoContent2);
            formData.append('infoContent3', this.infoContent3);
            formData.append('infoPhoto1', Photo1);
            formData.append('infoPhoto2', Photo2);
            formData.append('infoPhoto3', Photo3);

            //=====ajax
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status == 200) {
                    console.log(xhr.responseText);
                } else {
                }
            };
            xhr.open('post', './php/editOneInfoData.php');
            xhr.send(formData);

            //關燈箱
            this.changelightbox();
        },
    },
    created() {
        this.get_info();
    },
    watch: {},
});


new Vue({
    el: '#app',
});

