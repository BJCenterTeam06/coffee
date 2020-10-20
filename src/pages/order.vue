<template>
  <div>
    <div id="dingdan_photo">
      <div id="s1">PinCafe</div>
    </div>
    <div id="order" >
      <mt-navbar  class="mt-navbar" v-model="active" fixed>
        <mt-tab-item id="1">
          全部
        </mt-tab-item>
        <mt-tab-item id="2">
          未完成
        </mt-tab-item>
        <mt-tab-item id="3">
          已完成
        </mt-tab-item>
      </mt-navbar>
    </div>
      <mt-tabbar v-model="tabbar" fixed>
       <mt-tab-item id="index" class="tabbar_fint" href="/">
         首页
         <img src="../assets/images/shouye_bianse.png" slot="icon" v-if="tabbar == 'index'">
         <img src="../assets/images/shouye.png" slot="icon" v-else>
        </mt-tab-item>
       <mt-tab-item id="menu" class="tabbar_fint" href="/#/caidan">
         菜单
         <img src="../assets/images/caidan_xuanzhong(1).png" slot="icon" v-if="tabbar == 'menu'">
         <img src="../assets/images/caidan(1).png" slot="icon" v-else>
         
        </mt-tab-item>
        <mt-tab-item id="order" class="tabbar_fint" href="/#/order">
         订单
         <img src="../assets/images/dingdan_xuanzhong(1).png" slot="icon" v-if="tabbar == 'order'">
         <img src="../assets/images/dingdan(1).png" slot="icon" v-else>
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>
<style scoped>
.mint-navbar .mint-tab-item.is-selected{
  color:#904732;
  border-bottom: 1px solid #904732;
  margin-bottom: 0px;
}
.tabbar_fint{
  font: 10px 黑体 ;
  color: #8a8a8a;
}
.mint-tabbar>.mint-tab-item.is-selected{
  color: #904732;
}
.mt-navbar{
  margin-top: 200px;
  border-radius: 40px;
  font-family: 黑体;
}
#dingdan_photo{
  margin: 0 auto;
  width: 100%;
  height: 243px;
  background-image: url(../assets/images/dingdan_photo.png);
}
#order{
  width: 375px;
  height: 474px;
  position: absolute;
  top: 193px;
  background-color: white;
  border-radius: 40px 0pt 0pt 0pt;
}
#s1{
  font-family:黑体;
  color: #904732;
  font-size: 20px;
  margin: 0 auto;
  padding-top: 20px;
  width: 72px;
  height: 26px;
}
  
</style>
<script>
export default {
  data(){
    return{
      tabbar:"order",
      active:'1'
    }
  },
  watch:{
    tabbar(val){
      if(val == 'index'){
        this.$router.push('/').catch(e=>{});
      }
      if(val == 'menu'){
        this.$router.push('/caidan').catch(e=>{});
      }
      if(val == 'order'){
        this.$router.push('/order').catch(e=>{});
      }
    }

  }
  
}
</script>