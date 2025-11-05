<template>
  <div>
    <h2>图表</h2>
    <div class="chart" ref="chartRef">
      图表将渲染在这里
    </div>
  </div>
</template>

<script setup>
//导入echarts导入axios
import {onMounted, reactive, inject, ref} from 'vue'
let $echarts = inject('echarts');
let $axios = inject('axios');
//创建变量，接收获取来的数据
let data = reactive({})
let chartRef = ref(null)
async function getChartData(){
  data = await $axios({url:"/mock/three.json"})
}
//在dom加载完毕之后渲染动态图表
onMounted(() => {
  getChartData().then(() => {
    console.log('饼状图',data.data.chartData)
    //初始化echarts实例
    let myChart = $echarts.init(chartRef.value)
    myChart.setOption({
      legend: {
        top: 'bottom'
      },
      series: [
        {
          type: 'pie',
          // 半径大小，第一个值是内半径，第二个值是外半径,都是相对于图表容器的宽度/高度计算的
          // 内半径指的是中心到内圆的半径,这其实是一个环,外半径指的是中心到外圆的半径
          radius: ['15%', '70%'],
          center: ['50%', '45%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 10
          },data: data.data.chartData
        }
      ],
      //设置饼状图的颜色
      color: ['#c12e34', '#e6b600', '#0098d9',
        '#2b821d', '#005eaa', '#339ca8'
      ],
      tooltip: {
        show: true,
        borderRadius: '.625rem' //单位为px默认是4,圆角效果
      }
    })
  })
})
</script>

<style scoped>
.chart {
  height: 18.75rem;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
}
</style>
