# coffee

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 扫码点餐核心业务流程
扫码→选择商品→下单支付→查看订单

## 扫码
使用H5实现扫描二维码跳转固定链接地址（商品列表页的链接地址）

## 选择商品
商品列表→商品详情→选择数量→下单页

### 商品列表
列表信息：商品图片、标题、价格、按钮

### 商品详情
详情信息：商品图片、商品标题、商品详情描述

### 选择数量

### 下单页

## 下单支付
支付确认页→微信支付→支付结果

### 支付确认页

### 微信支付
第一阶段默认直接支付成功，第二阶段在研究如何实现微信收款

### 支付结果
第一阶段默认支付成功

## 查看订单



# 数据库设计
找一个电商网站的数据库参考，基本一样  
大致需要的表：用户表、商品表、订单表

用户表：用户ID  
商品表：  
订单表：订单编号、订单时间、商品ID、商品标题、单价、数量、总金额、支付渠道、支付状态、订单状态








