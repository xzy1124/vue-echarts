<script setup>
import { provide } from 'vue';
import * as echarts from 'echarts';
import axios from 'axios';
// 名字＋要传递的变量
provide('echarts', echarts);
provide('axios', axios);
// 设置基准路径头
// 根据环境设置axios基准路径
if (import.meta.env.DEV) {
  // 开发环境 - 指向完整的开发服务器URL
  axios.defaults.baseURL = 'http://localhost:5173/vue-echarts/'
} else {
  // 生产环境 - 使用相对路径
  axios.defaults.baseURL = '/vue-echarts/'
}
</script>

<template>
  <!-- 这是路由匹配组件的渲染出口 -->
   <RouterView />
</template>
<!-- scoped的意思只在当前页面生效 -->
<style lang="less">
body {
  background: url(./assets/bg.jpg) top center no-repeat;
  background-size: cover;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h2 {
  height: 3.125rem;
  color: #fff;
  text-align: center;
  line-height: 3.125rem;
  font-size: 1.25rem;
}
</style>
