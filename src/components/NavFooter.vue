<template>
    <div>
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
<script>
export default {
    name:'nav-footer'
}
</script>
