<template>
    <div>
      <div id="f1">
       <img src="../assets/images/caidan_icon_beijing.png" alt="" class="img1">
       <div class="img2">
       <img src="../assets/images/icon_weizhi _fen.png" alt="" >品咖啡望京店 <img src="../assets/images/arrow-right.png" alt="">
       </div>
       <img src="../assets/images/003.png" alt="" class="img3">
       </div>
       <div id='d1'>
       <ul class="u1" style="list-style: none;">
         <li>咖啡</li>
         <li>热饮</li>
         <li>果饮</li>
         <li>沙拉</li>
         <li>商务餐</li>
         <li>面食</li>
         <li>面包/帕尼尼</li>
         <li>汤</li>
         <li>小吃</li>
         <li>商务餐</li>
         <li>面食</li>
         <li>面包/帕尼尼</li>
         <li>汤</li>
         <li>小吃</li>
         <li>汤</li>
         <li>小吃</li>
         <li>商务餐</li>
         <li>面食</li>
         <li>面包/帕尼尼</li>
         <li>汤</li>
         <li>小吃</li>
       </ul>
       <ul class="u2">
         <li>
           <ul>
             <p class="p1">咖啡/16</p>
             <p class="p2">Coffee</p>
             <li class="p3">
               <img src="../assets/images/1.png" alt="">
               <div>
                 <p class="p4">玫瑰冰美</p>
                 <p class="p5">Rose Ice Americano</p>
                 <p class="p6">￥28</p>
               </div>
               <img src="../assets/images/icon_tianjia.png" alt="" class="img4">
             </li>
             <li class="p3">
               <img src="../assets/images/1.png" alt="">
               <div>
                 <p class="p4">玫瑰冰美</p>
                 <p class="p5">Rose Ice Americano</p>
                 <p class="p6">￥28</p>
               </div>
                <img src="../assets/images/icon_tianjia.png" alt="" class="img4">
             </li>
             <li class="p3">
               <img src="../assets/images/1.png" alt="">
               <div>
                 <p class="p4">玫瑰冰美</p>
                 <p class="p5">Rose Ice Americano</p>
                 <p class="p6">￥28</p>
               </div>
                <img src="../assets/images/icon_tianjia.png" alt="" class="img4">
             </li>
             <li class="p3">
               <img src="../assets/images/1.png" alt="">
               <div>
                 <p class="p4">玫瑰冰美</p>
                 <p class="p5">Rose Ice Americano</p>
                 <p class="p6">￥28</p>
               </div>
                <img src="../assets/images/icon_tianjia.png" alt="" class="img4">
             </li>
             <li class="p3">
               <img src="../assets/images/1.png" alt="">
               <div>
                 <p class="p4">玫瑰冰美</p>
                 <p class="p5">Rose Ice Americano</p>
                 <p class="p6">￥28</p>
               </div>
                <img src="../assets/images/icon_tianjia.png" alt="" class="img4">
             </li>
           </ul>
         </li>
         
       </ul>
       </div>
       <!-- 底部导航 -->
    <mt-tabbar v-model="tabbar" fixed>
       <mt-tab-item id="index" class="tabbar_fint">
         首页
         <img src="../assets/images/shouye_bianse.png" slot="icon" v-if="tabbar == 'index'">
         <img src="../assets/images/shouye.png" slot="icon" v-else>
        </mt-tab-item>
       <mt-tab-item id="menu" class="tabbar_fint" href="/#/caidan">
         菜单
         <img src="../assets/images/caidan_xuanzhong(1).png" slot="icon" v-if="tabbar == 'menu'">
         <img src="../assets/images/caidan(1).png" slot="icon" v-else>
         
        </mt-tab-item>
        <mt-tab-item id="order" class="tabbar_fint">
         订单
         <img src="../assets/images/dingdan_xuanzhong(1).png" slot="icon" v-if="tabbar == 'order'">
         <img src="../assets/images/dingdan(1).png" slot="icon" v-else>
         
        </mt-tab-item>
     </mt-tabbar>
    </div>
</template>
<style scoped>
.p4{
  color: #151515;
  font-size: 16px;
  margin-left: 15px;
  font-weight: bolder;
}
.p5{
  font-size: 12px;
  margin-left: 15px;
  margin-top: 4px;
}
.p6{
  color: #333;
  font-size: 15px;
  margin-left: 15px;
  font-weight: bolder;
  margin-top: 13px;
}
.p3{
  margin:20px 0;
  display: flex;
}
.p1{
  font-size: 17px;
  color:#333;
  font-weight: bolder ;
}
.p2{
  font-size:13px ;
  margin-top: 5px;
}
ul p{
  margin-top: 0;
}
#f1{
  top: 0;
  position: fixed;
}
#d1{
  margin-top: 100px;
  display:flex;
  
}
.u1{
  width: 100px;
  height: 350px;
  margin-left: 25px;
  margin-top:130px ;
  font-size:12px ;
  color:#666;
  overflow-y:scroll ;
}
.u1 li{
  margin: 28px 0;
}
.u2{
  width: 300px;
  height: 320px;
  margin-left: 0;
  margin-top:158px;
  font-size:12px ;
  color:#666;
  overflow-y:scroll ;
}
.img2{
  position: absolute;
  left: 25px;
  top: 15px;
  color:#904732;
  font-weight: bolder;
  font-size: 15px;
}
.img3{
  position: absolute;
  top: 50px;
  left:25px ;
}
.img4{
  width: 42px;
  height: 42px;
  margin-left: 10px;
  margin-top: 18px;
}
</style>
<script>
export default {
  data(){
    return {
      tabbar:'menu'
    }
  }
}
</script>