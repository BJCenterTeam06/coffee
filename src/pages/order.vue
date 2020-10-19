<template>
  <div>
    <div id="dingdan_photo">
      <span id="s1">PinCafe</span>
    </div>
    <div id="order">
      <span class="s" id="s2">全部</span>
      <span class="s" id="s3">未完成</span>
      <span class="s" id="s4">已完成</span>
    
    
   
    <mt-tabbar v-model="tabbar" fixed>
       <mt-tab-item id="index">
         
         <img src="../assets/images/icon_shouye_2.png" slot="icon" >
         <!-- 缺选中时图片<img src="../assets/images/icon_shouye_2.png" slot="icon" > -->
         首页
        </mt-tab-item>
       <mt-tab-item id="menu">
         
         <img src="../assets/images/icon_caidan_1.png" slot="icon" >
         <!-- 缺选中时图片 <img src="../assets/images/icon_caidan_1.png" slot="icon" > -->
         菜单
        </mt-tab-item>
        <mt-tab-item id="order">
         
         <img src="../assets/images/icon_dingdan_1.png" slot="icon" >
         <!-- 缺选中时图片 <img src="../assets/images/icon_dingdan_1.png" slot="icon" > -->
         订单   
        </mt-tab-item>
     </mt-tabbar>
    
     </div>
  </div>
</template>
<style scoped>

#dingdan_photo{
  position: absolute;
  margin: 0 auto;
  width: 359px;height: 243px;
  background-image: url(../assets/images/dingdan_photo.png);
}
#order{
  width: 359px;
  height: 474px;
  position: absolute;
  top: 193px;
  z-index: 50;
  background-color: white;
  border-radius: 40pt 0pt 0pt 0pt;
}
#s1{
  font-family: "Microsoft YaHei",微软雅黑;
  color: #000;
  font-size: 19px;
  margin-bottom: 15px;
  display: inline-block;
  margin-top: 29px;
}
.s{
  position: absolute;
 
  
  font-size: 16pt;
  
}
#s2{
  top: 28px;
  left: 25px;
  border-bottom: #904732 2px solid;
  color: #904732;
  border-radius: 1px;
  padding-bottom:5px ;
  
}
#s3{
  color: grey;
 left: 100pt; 
  top: 28px;
}
#s4{
  color: grey;
  left: 250px;
   top: 28px;
}
  
</style>
<script>
export default {
  data(){
    return{
      tabbar:"order"
    }
  },
  watch:{
    tabbar(val){
      if(val == 'index'){
        this.$router.push('/').catch(e=>{});
      }
      if(val == 'menu'){
        this.$router.push('/menu').catch(e=>{});
      }
      if(val == 'order'){
        this.$router.push('/order').catch(e=>{});
      }

    }

  }
  
}
</script>