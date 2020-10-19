<template>
  <div>
    <div id="head">
      <router-link to="/">
          <img src="../assets/images/left_jiantou.png" alt="" width="16px" height="16px">
      </router-link>
      <span id="s1">品咖啡cafe</span>
    </div>

    <div id="addr">
      <div id="d1">
        <span id="s1">品咖啡望京店</span>
        <span id="s2">19.77km</span>
      </div>
      <div id="d2">
        <span id="s3"><img src="../assets/images/icon_weizhi.png" alt="">望京东园七区8号楼8-1(保利好食界)</span>
      </div>
      <div id="d3">
        
        <span id="s4">
          <router-link to="/menu">立即下单</router-link>
        </span>
      </div>
    </div>

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
</template>
<style scoped>
#head{
  text-align: left;
  margin-left: 12.5px;
  font-family: "Microsoft YaHei",微软雅黑;
  color: #000;
  font-size: 19px;
  margin-bottom: 15px;
}
#s1{
  
  margin-left: 15px;
  
}
#s2{
  margin-right: 15px;
  float: right;
  
}
#s3{
  margin-right: 15px;
  margin-left: 15px;
  
}
#s4{
  
  margin-right: 15px;
  
}
#addr{
  text-align: left;
  width: 350px;
  margin: 0 auto;
  border: rgba(0, 0,0, 0.1) 1px solid;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(0, 0,0, 0.1) 0px 0px 5px 2px;
}
#addr a{
  color: chocolate;
  text-decoration: none;
}

#d1{
  margin-top: 15px;
}
#d2{
  margin-top: 15px;
  margin-bottom: 10px;
}
#d3{
  text-align: right;
  margin-bottom: 15px;
}
</style>
<script>
export default {
  data(){
    return{
      tabbar:""
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