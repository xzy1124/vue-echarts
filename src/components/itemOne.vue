<template>
  <div>
    <h2>图表</h2>
    <div class="container" ref="chartRef">
      图表将渲染在这里
    </div>
  </div>
</template>

<script setup>
import { color } from 'echarts';
import { inject, onMounted, ref, reactive } from 'vue';
// 从App.vue中引入echarts
const $echarts = inject('echarts');
// 使用ref来引用Dom元素
const chartRef = ref(null)
let $axios = inject('axios');
async function getChartData(){
  data = await $axios({url:"/mock/one.json"})
  console.log('one图', data);
  
}
// 用来管理复杂数据对象
let data = reactive({})
let xdata =reactive([])
let ydata = reactive([])
function setData(){
  xdata = data.data.chartData.map(v => v.title)
  ydata = data.data.chartData.map(v => v.num)
  console.log(xdata)
  console.log(ydata)
} 
//把echarts中的数据渲染出来，要求组件一挂载就渲染
onMounted(()=>{
  // 调用请求函数,在请求完成之后再进去数据处理工作，也就是在then之后
  getChartData().then(()=>{
    setData()
      if($echarts && chartRef.value){
    // 初始化echarts实例
    let myChart = $echarts.init(chartRef.value)
    // 配置项和数据
    myChart.setOption({
      // 百分比是相对于图表容器的宽度/高度计算的
      grid: {
        top: "3%",     // 网格区域顶部距离容器顶部的百分比
        left: "2%",    // 网格区域左侧距离容器左侧的百分比
        right: "6%",   // 网格区域右侧距离容器右侧的百分比
        bottom: "3%",  // 网格区域底部距离容器底部的百分比
        containLabel: true  // 是否包含坐标轴的标签
      },
      // title: {
      //   text: "ItemOne数据图表",
      //   left: 'center'
      // },
      xAxis: {
        type: "value",
        axisLabel: {
          color: '#fff'
        }
      },
      yAxis: {
        type: "category",
        data: xdata,
        axisLabel: {
          color: '#fff'
        }
      },
      series: [{
        type: "bar",
        data: ydata,
        itemStyle:{
            //右上右下圆角
            borderRadius: [0,20,20,0],
            color: new $echarts.graphic.LinearGradient(0,0,1,0,[
            {offset: 0, color: '#005eaa'},
            {offset: 0.5,color: '#339ca8'},
            {offset: 1,color: '#cda819'}]
          )
        }
      }]
    })
  }
  })
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 15.625rem;
}
h2 {
  height: 3.125rem;
  color: #fff;
  line-height: 3.125rem;
  font-size: 1.25rem;
  text-align: center;
}

</style>
