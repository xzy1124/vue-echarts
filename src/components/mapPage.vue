<template>
  <div class="map" ref="mapRef">
    welcome to map page
  </div>
</template>

<script setup>
import { onMounted, ref, inject } from 'vue'
// 直接导入本地的china.json文件
import chinaData from '@/assets/data/china.json'

let $echarts = inject('echarts');
// 使用ref来引用Dom元素
const mapRef = ref(null)

// 组件挂载时调用函数
onMounted(() => {
  // 直接使用导入的地图数据
  console.log("获取到的mapData:", chinaData)
  
  // 注册地图数据
  $echarts.registerMap('china', chinaData)
  var myChart = $echarts.init(mapRef.value)
  
  myChart.setOption({
    title: {
      text: '城市销售量',
      left: '45%',
      textStyle: {
        color: "#fff",
        fontSize: '1.25rem',
        textShadowBlur: '0.625rem', //文字本身的阴影长度。
        textShadowColor: "#33ffff",
      }
    },
    geo: {
      map: 'china',
      itemStyle: {
        areaColor: '#0099ff', //地图区域的颜色
        borderColor: '#00ffff', //地图区域的边框颜色
        shadowColor: 'rgba(230, 130, 70, 0.5)', //地图区域的阴影颜色
        shadowBlur: '1.875rem', //地图区域的阴影模糊半径
      },
      emphasis: {
        focus: 'self' //在高亮时候，淡出其他的部分
      }
    },
    tooltip: {
      trigger: 'item',
    },
    // 可视化映射组件，用于将数据值映射到颜色或大小等可视化属性
    //映射的是series中的data的大到小,深到浅,作用的是圆点的颜色
    visualMap: {
      type: 'continuous',
      min: 100,
      max: 5000,
      calculable: true,
      inRange: {
        color: ['#50a3ba', '#eac763', '#d94e5d'] // 颜色从低到高的渐变
      },
      textStyle: {
        color: '#fff'
      }
    },
    series: [
      {
        type: 'scatter',
        itemStyle: {
          color: 'red',
        },
        name: '所在城市销售额',
        coordinateSystem: 'geo', //指定使用地理坐标系，要不然下面的城市的坐标就会报错
        // 每个数据项的名称和值，名称是城市名，值是城市的经纬度和销售额
        data: [
          { name: '北京', value: [116.46, 39.92, 4367] },
          { name: '上海', value: [121.48, 31.22, 8675] },
          { name: '深圳', value: [113.07, 22.62, 2461] },
          { name: '广州', value: [113.23, 23.16, 187] },
          { name: '西安', value: [108.45, 34, 3421] },
        ]
      }]
  })
})
</script>

<style lang="less">
.map {
  width: 100%;
  height: 800px;

}
</style>