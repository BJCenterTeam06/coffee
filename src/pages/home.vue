<template>
  <div>
    <!-- 顶部 -->
    <div id="head">
       <mt-header title="品咖啡Cafe" fixed>
         <span id="s3" slot="right">
            <router-link to="/login" style="color:#fff;text-decoration:none">登录</router-link>
          /
            <router-link to="/register" style="color:#fff;text-decoration:none">注册</router-link>
        </span>
       </mt-header>
       
    </div>
    
    <div id="sec" style="padding:0 25px">
      <div>
        <span class="position_img"></span>
        <router-link to="/addr">
          <span id="s2">品咖啡望京店</span>
        </router-link> 
      </div>
    </div>
    <!-- 轮播图 -->
    <div id="swipe">
        <mt-swipe :showIndicators="false" style="border-radius: 20px;">
            <mt-swipe-item><img  src="../assets/images/006.png" alt="" width="325px" height="325px"></mt-swipe-item>
            <mt-swipe-item><img  src="../assets/images/006.png" alt="" width="325px" height="325px"></mt-swipe-item>
            <mt-swipe-item><img id="c" src="../assets/images/006.png" alt="" width="325px" height="325px"></mt-swipe-item>

        </mt-swipe>
      
    </div>
    <!-- 下单钱包会员 -->
    <div id="middle">
      <div class="mid"><router-link to="/menu"><img src="../assets/images/icon_xiadan.png" alt=""></router-link></div>
      <div class="mid"><router-link to="/"><img src="../assets/images/icon_huiyuan.png" alt=""></router-link></div>
      <div class="mid"><router-link to="/"><img src="../assets/images/icon_qianbao.png" alt=""></router-link></div> 
    </div>
    <!-- 底部导航 -->
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
.mint-header{
  background-color: #444;
}
.mint-tabbar>.mint-tab-item.is-selected{
  color: #904732;
}
.tabbar_fint{
  font: 10px 黑体 ;
  color: #8a8a8a;
}
.position_img{
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('../assets/images/icon_weizhi.png');
  vertical-align: text-top;
  margin-right: 3px;
}
#head{
  text-align: left;
  /* margin-top: 30px; */
}
#sec{
   text-align: left;
    margin-top: 55px;
 }
 #sec a{
   text-decoration: none;
   color: #000;
 }
#s1{
  width: 72px;height: 26px; 
  font-family: "Microsoft YaHei",微软雅黑;
  color: #000;
  font-size: 19px;
  margin-left: 12.5px;
  }
  #s2{
    color: #151515;
    font-size: 14px;
    font-weight: bold;
    font-family: "Microsoft YaHei",微软雅黑;
  }
  #s3{
    font-size: 10px;
    font-family: "Microsoft YaHei",微软雅黑;
  }
 #swipe{
   margin: 30px auto;
   width: 325px;
   height: 325px;
   
 }
 #middle{
   margin: 30px auto;
   width: 345px;
   height: 76px;
 }
 #middle img{
   width: 96px;height: 76px;
 }
 .mid{
   float: left;
   margin:0 9.5px ;
   

 }
 

 
</style>
<script>
export default{
  data(){
    return {
       tabbar:'index'
    }
  }
  
}
</script>
