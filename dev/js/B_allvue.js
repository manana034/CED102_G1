// HEALTH NEWS LIST
Vue.component('all-info', {
    data() {
        return {
            //撈出來的 課程資料
            infos: '',
            lightbox: false,
            lightbox_infoNo: '',
            lightbox_state: '',
            lightbox_text: '',
            info_edit_lightbox: false,
            info_add_lightbox: false,
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
            <button @click="course_add()">
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
            <tr v-for="(value,key) in infos">
                <td>{{value.infoNo}}</td>
                <td>{{change_infoType(value.infoType)}}</td>
                <td>{{value.infoTitle}}</td>
                <td>
                    <img :src="value.infoPhoto2">
                </td>
                <td>{{value.infoContent2}}</td>
                <td>{{value.infoTime}}</td>
                <td>
                    <img class="edit" @click="info_edit(value.infoNo)" src="./icon/backend_edit.png">
                </td>
                <td>
                    <img class="delete" @click="info_delete(value.infoNo)" src="./icon/backend_trash.png">
                </td>
                <td>  
                    <div class="button" @click="lightbox_show(value.infoNo,value.infoState)">
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
                <button class="continus" @click="change_state(lightbox_course_no,lightbox_status) >Continus</button>
            </div>
        </div>
    </div>
    // <info_edit v-if="info_edit_lightbox" :infoNo="infoNo" @changelightbox="infoeditlightbox()"></info_edit>
    // <info_add v-if="info_add_lightbox"  @changelightbox="infoaddlightbox()"></info_add>   
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
        change_infoType(infoType) {
            if (infoType == 1) {
                return 'Food';
            } else if (infoType == 2) {
                return 'Exercise';
            } else if (infoType == 3) {
                return 'Regimen';
            }
        },
        // 列出前100字

        // 點擊修改後，顯示燈箱 並帶入值
        lightbox_show: function (infoNo, infoState) {
            this.lightbox = true;
            this.lightbox_infoNo = infoNo;

            if (infoState == 0) {
                this.lightbox_state = 1;
                this.lightbox_text = '上架';
            } else if (infoState == 1) {
                this.lightbox_state = 0;
                this.lightbox_text = '下架';
            }
        },
        // 點擊 確定修改後 觸發 php程式。完成後 重新撈取一次資料
        change_state: async function (infoNo, state) {
            const res = await fetch('./php/getInfoData.php', {
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
        //點擊"編輯" 開啟編輯課程燈箱
        info_edit(infoNo) {
            this.info_edit_lightbox = true;
            this.infoNo = infoNo;
        },
        //關閉"編輯課程"燈箱，同時重新渲染畫面
        infoeditlightbox() {
            this.info_edit_lightbox = false;
            setTimeout(this.get_info, 100);
            // this.get_course();
        },
        //點擊"新增" 開啟新增課程燈箱
        info_add() {
            this.info_add_lightbox = true;
        },
        //關閉"新增課程"燈箱，同時重新渲染畫面
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

new Vue({
    el: '#app',
});

