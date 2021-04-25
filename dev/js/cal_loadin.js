
    Vue.component('loading',{
    template:`<div class="loadingio-spinner-ripple-wu44vrvts1">
                <div class="ldio-2gn8nvj94zp">
                     <div></div>
                    <div></div>
                 </div>
            </div>`,VueLoading
    });

    const cal_loading=new Vue({
        el:"#cal_loading",
        data:{
            isLoading:true, 
            isLoading2:false, 
        },
        method:{
        },
        mounted(){
            setTimeout(()=>{
                this.isLoading = false;
            },1000);
           
            // setTimeout(() => {
            //     this.isLoading=false;
            // },1000);
        },
    });
