// POST LIST
Vue.component('all-post', {
    data() {
        return {
            posts: '',
            lightbox: false,
            lightbox_postNo: '',
            lightbox_state: '',
            lightbox_text: '',
            postNo: '',
        };
    },
    props: [],

    template: `
<div class="main_post main">
    <div class="main_top">
        <div class="search_bar">
            <div class="custom-select">
                <select name="sType">
                    <option value="0">ALL</option>
                    <option value="0">ALL</option>
                    <option value="1">Pending</option>
                    <option value="2">Passed</option>
                    <option value="3">Failed</option>
                </select>
            </div>
        </div>
    </div>
    <div class="main_bottom">
        <table>
            <tr>
                <th>informant</th>
                <th>post no</th>
                <th>post photo</th>
                <th>post content</th>
                <th>reason</th>
                <th>report time</th>
                <th>State</th>
            </tr>
            <tr v-for="(value,key) in posts">
                <td>{{value.mNo}}</td>
                <td>{{value.postNo}}</td>
                <td>
                    <img :src="value.postPhoto">
                </td>
                <td>{{value.postContent}}</td>
                <td>{{changetype(value.postRepFor)}}</td>
                <td>{{value.postRepTime}}</td>
                <td>
                    <select class="Type" name="Type" v-model="value.postRevState" v-if="value.postRevState == 1" @change="lightbox_show(value.postNo,value.postRevState)">
                        <option value="1">Pending</option>
                        <option value="2">Passed</option>
                        <option value="3">Failed</option>
                    </select>
                    <span v-else>{{changestatetype(value.postRevState)}}</span>
                </td>
            </tr>
        </table>
    </div>
    <!-- 確認改狀態的燈箱 -->
    <div class="lightbox_black" v-if="lightbox">
        <div class="lightbox" >
            <div class="content">Do you want to <span>{{lightbox_text}}</span>  post no.<span>{{lightbox_postNo}}</span> ?</div>
            <div>
                <button class="cancel" @click="lightbox = false">Cancel</button>
                <button class="continus" @click="change_state(lightbox_postNo,lightbox_state)">Continus</button>
            </div>
        </div>
    </div>
</div>
  `,
    methods: {
        //呼叫php程式，取回相關資料，並用json()轉回一般陣列
        get_post: async function () {
            const res = await fetch('./php/getPostData.php', {}).then(function (data) {
                return data.json();
            });
            // 取回res值後，呼叫另一隻函式
            this.posts = res;
        },
        // 將分類數字轉為文字
        changetype(postRepFor) {
            if (postRepFor == 1) {
                return 'Personal attack';
            } else if (postRepFor == 2) {
                return 'Indecent words';
            } else if (postRepFor == 3) {
                return 'Other';
            }
        },

        changestatetype(postRevState) {
            if (postRevState == 2) {
                return 'Passed';
            } else if (postRevState == 3) {
                return 'Failed';
            }
        },

        // ==*改狀態的燈箱
        // 點擊狀態後，顯示燈箱 並帶入值
        lightbox_show: function (postNo, postRevState) {
            this.lightbox = true;
            this.lightbox_postNo = postNo;
            // 跳窗內顯示的內容
            if (postRevState == 2) {
                this.lightbox_state = 2;
                this.lightbox_text = 'hide';
            } else if (postRevState == 3) {
                this.lightbox_state = 3;
                this.lightbox_text = 'show';
            } else if (postRevState == 1) {
                this.lightbox_state = 1;
                this.lightbox_text = 'show';
            }
            this.get_post();
        },
        // 點擊 確定修改後 觸發 php程式。完成後 重新撈取一次資料
        change_state: async function (postNo, postRevState) {
            const res = await fetch('./php/editPostData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postNo: postNo,
                    postRevState: postRevState,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox = false;
            //完成後 重新撈取一次資料
            this.get_post();
        },
    },
    // template 渲染前 會先去執行以下函式
    created() {
        this.get_post();
    },
    mounted() {},
});


// MESSAGE LIST
Vue.component('all-message', {
    data() {
        return {
            messages: '',
            lightbox: false,
            lightbox_messageNo: '',
            lightbox_state: '',
            lightbox_text: '',
            messageNo: '',
        };
    },
    props: [],

    template: `
<div class="main_message main">
    <div class="main_top">
        <div class="search_bar">
            <div class="custom-select">
                <select name="sType">
                    <option value="0">ALL</option>
                    <option value="0">ALL</option>
                    <option value="1">Pending</option>
                    <option value="2">Passed</option>
                    <option value="3">Failed</option>
                </select>
            </div>
        </div>
    </div>
    <div class="main_bottom">
        <table>
            <tr>
                <th>informant</th>
                <th>message no</th>
                <th>message content</th>
                <th>reason</th>
                <th>report time</th>
                <th>State</th>
            </tr>
            <tr v-for="(value,key) in messages">
                <td>{{value.mNo}}</td>
                <td>{{value.mesNo}}</td>
                <td>{{value.mesContent}}</td>
                <td>{{changetype(value.mesRepFor)}}</td>
                <td>{{value.mesRepTime}}</td>
                <td>
                    <select class="Type" name="Type" v-model="value.mesRevState" v-if="value.mesRevState == 1" @change="lightbox_show(value.mesNo,value.mesRevState)">
                        <option value="1">Pending</option>
                        <option value="2">Passed</option>
                        <option value="3">Failed</option>
                    </select>
                    <span v-else>{{changestatetype(value.mesRevState)}}</span>
                </td>
            </tr>
        </table>
    </div>
    <!-- 確認改狀態的燈箱 -->
    <div class="lightbox_black" v-if="lightbox">
        <div class="lightbox" >
            <div class="content">Do you want to <span>{{lightbox_text}}</span>  message no.<span>{{lightbox_mesNo}}</span> ?</div>
            <div>
                <button class="cancel" @click="lightbox = false">Cancel</button>
                <button class="continus" @click="change_state(lightbox_mesNo,lightbox_state)">Continus</button>
            </div>
        </div>
    </div>
</div>
  `,
    methods: {
        //呼叫php程式，取回相關資料，並用json()轉回一般陣列
        get_mes: async function () {
            const res = await fetch('./php/getMesData.php', {}).then(function (data) {
                return data.json();
            });
            // 取回res值後，呼叫另一隻函式
            this.messages = res;
        },
        // 將分類數字轉為文字
        changetype(mesRepFor) {
            if (mesRepFor == 1) {
                return 'Personal attack';
            } else if (mesRepFor == 2) {
                return 'Indecent words';
            } else if (mesRepFor == 3) {
                return 'Other';
            }
        },

        changestatetype(mesRevState) {
            if (mesRevState == 2) {
                return 'Passed';
            } else if (mesRevState == 3) {
                return 'Failed';
            }
        },

        // ==*改狀態的燈箱
        // 點擊狀態後，顯示燈箱 並帶入值
        lightbox_show: function (mesNo, mesRevState) {
            this.lightbox = true;
            this.lightbox_mesNo = mesNo;
            // 跳窗內顯示的內容
            if (mesRevState == 2) {
                this.lightbox_state = 2;
                this.lightbox_text = 'hide';
            } else if (mesRevState == 3) {
                this.lightbox_state = 3;
                this.lightbox_text = 'show';
            } else if (mesRevState == 1) {
                this.lightbox_state = 1;
                this.lightbox_text = 'show';
            }
            this.get_mes();
        },
        // 點擊 確定修改後 觸發 php程式。完成後 重新撈取一次資料
        change_state: async function (mesNo, mesRevState) {
            const res = await fetch('./php/editMesData.php', {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mesNo: mesNo,
                    mesRevState: mesRevState,
                }),
            });
            //關閉 狀態轉換燈箱
            this.lightbox = false;
            //完成後 重新撈取一次資料
            this.get_mes();
        },
    },
    // template 渲染前 會先去執行以下函式
    created() {
        this.get_mes();
    },
    mounted() {},
});

new Vue({
    el: '#app1',
});
new Vue({
    el: '#app2',
});
