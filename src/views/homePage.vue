<template>
  <div>
    <header>
      <h1>大数据可视化学习</h1>
    </header>
    <!-- 大容器，设置上下左右的部分 -->
     <section class="container">
      <!-- 容器 -->
       <section class="itemLeft">
        <ItemPage>
          <ItemOne />
        </ItemPage>
        <ItemPage>
          <ItemTwo />
        </ItemPage>
       </section>
       <section class="itemCenter">
        <!-- <h2>地图展示</h2> -->
        <MapPage />
       </section>
       <section class="itemRight">
        <ItemPage>
          <ItemThree />
        </ItemPage>
        <ItemPage>
          <ItemFour />
        </ItemPage>
       </section>
     </section>
  </div>
</template>

<script setup>
import ItemPage from '@/components/itemPage.vue'
import ItemOne from '@/components/itemOne.vue'
import ItemTwo from '@/components/itemTwo.vue'
import ItemThree from '@/components/itemThree.vue'
import ItemFour from '@/components/itemFour.vue'
import MapPage from '@/components/mapPage.vue'
import { inject } from 'vue'
// 从App.vue中引入echarts
const echarts = inject('echarts');
const axios = inject('axios');
console.log(echarts);
console.log(axios);
</script>

<style scoped lang="scss">
header {
  height: 60px; 
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  /* 标题的文字样式 */
  h1 {
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
}
.container {
  width: 100%;
  // max-width: none;
  margin: 0;
  padding: .625rem;
  // background-color: gray;
  display: flex;
  .itemLeft, .itemRight {
    flex: 1;
    min-width: 0;
    // 防止内容溢出
    overflow: hidden;
  }
  .itemCenter {
    flex: 2;
    height: 50.625rem;
    border: 1px solid blue;
    padding: .625rem;
    margin: .25rem;
    min-width: 0;
  }
}
// 添加针对宽屏幕的响应式优化
@media (min-width: 1600px) {
  .container {
    padding: .25rem .25rem 0;
  }
}

// 添加针对窄屏幕的响应式保护
@media (max-width: 1200px) {
  .container {
    flex-direction: column;
    .itemLeft, .itemRight, .itemCenter {
      width: 100%;
      margin: .25rem 0;
    }
  }
}
</style>