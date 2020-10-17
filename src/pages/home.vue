<template>
  <div>
    <!-- 顶部 -->
    <div id="head">
       <span id="s1">品咖啡Cafe</span>
    </div>
    
    <div id="sec" >
      <img src="../assets/images/icon_weizhi.png" alt=""> <router-link to="/addr"><span id="s2">品咖啡望京店 &gt;</span></router-link> <span id="s3"><b>
         <router-link to="/login">登录</router-link></b>/<router-link to="/register">注册</router-link></span>
    </div>
    <!-- 轮播图 -->
    <div id="swipe">
        <mt-swipe :showIndicators="false">
            <mt-swipe-item><img  src="../assets/images/006.png" alt="" width="325px" height="325px"></mt-swipe-item>
            <mt-swipe-item><img hspace="19" src="../assets/images/icon_shouye_2@3x.png" alt="" width="325px" height="325px"></mt-swipe-item>
            <mt-swipe-item><img id="c" src="../assets/images/icon_caidan_1@3x.png" alt="" width="325px" height="325px"></mt-swipe-item>

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
       <mt-tab-item id="index">
         首页
         <img src="../assets/images/icon_shouye_2.png" slot="icon" >
         <!-- 缺选中时图片<img src="../assets/images/icon_shouye_2.png" slot="icon" > -->
         
        </mt-tab-item>
       <mt-tab-item id="menu">
         菜单
         <img src="../assets/images/icon_caidan_1.png" slot="icon" >
         <!-- 缺选中时图片 <img src="../assets/images/icon_caidan_1.png" slot="icon" > -->
         
        </mt-tab-item>
        <mt-tab-item id="order">
         订单
         <img src="../assets/images/icon_dingdan_1.png" slot="icon" >
         <!-- 缺选中时图片 <img src="../assets/images/icon_dingdan_1.png" slot="icon" > -->
         
        </mt-tab-item>
     </mt-tabbar>
  </div>
</template>
<style scoped>
#head{
  text-align: left;
  /* margin-top: 30px; */
}
#sec{
   text-align: left;
    margin-top: 30px;
   margin-left: 12.5px;
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
    font-size: 18px;
    font-weight: bold;
    font-family: "Microsoft YaHei",微软雅黑;
  }
  #s3{
    float:right;
    font-size: 14px;
    font-family: "Microsoft YaHei",微软雅黑;
    margin-right: 16px;
  }
 #swipe{
   margin-top: 10px;
   margin-left: 12.5px;
   height: 325px;
 }
 #middle{
   margin-top: 30px;
   margin-left: 12.5px;
   width: 345px;height: 76px;
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
    return{
       tabbar:'index',
    }
  },
  name:'home'
  
}
</script>
