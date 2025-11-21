<template>
  <div>
    <h2>图表</h2>
    <div class="chart" ref="chartRef">
      图表将渲染在这里
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, ref, reactive } from 'vue'
// 照猫画虎
let $echarts = inject('echarts');
let chartRef = ref(null)
let $axios = inject('axios');
//创建请求函数
let data = reactive({})
async function getChartData(){
    data = await $axios({url:"/mock/two.json"})
}
onMounted(() => {
  getChartData().then(() => {
    let myChart = $echarts.init(chartRef.value)
    console.log('折线图', data.data.chartData);
    
    myChart.setOption({
      //提示框组件
      tooltip: {
        trigger: 'axis', //设置触发方式,axis表示坐标轴触发,hover表示鼠标悬停触发
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#e6b600',
          }
        }
      },
      legend: {
        data: ['医疗', '服饰', '电子', '数码', '装备'],
        top: '3%',        // 固定顶部位置
        type: 'scroll',   // 启用滚动
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
        }
      },
      grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        top: '20%',      // 增加顶部间距
        containLabel: true
      },
      //设置xy轴
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#fff' //设置x轴的颜色
          }
        },
        axisLabel: {
          color: '#fff' //设置x轴的文字颜色
        },
        type: 'category',
        boundaryGap: false, //折线图与y轴的距离
        data: data.data.chartData.day
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#fff' 
          }
        },
        axisLabel: {
          color: '#fff' //设置y轴的文字颜色
        },
        type: 'value'
      },
      series: [
      {
        name: "医疗",
        type: "line",
        data:data.data.chartData.num.Chemicals,
        stack: 'Total', //数据堆叠,效果是将多个数据项堆叠在一起,形成一个整体
        smooth: true, //折线图是否平滑
        showSymbol: false, //是否显示折线图的点,不显示
        areaStyle: {
          opacity: 0.8,
          color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(128, 255, 165)'
          }, {
            offset: 1,
            color: 'rgba(1, 191, 236)'
          }])
        },
        lineStyle: {
          //设置线段样式
          width: 0,
        },
        emphasis: {
          focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式
        }
      },
      {
        name: "服饰",
        type: "line",
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 221, 255)'
          }, {
            offset: 1,
            color: 'rgba(77, 119, 225)'
          }])
        },
        lineStyle: {
          //设置线段样式
          width: 0,
        },
        emphasis: {
          focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式
        },
        data:data.data.chartData.num.Clothes
      },
      {
        name: "电子",
        type: "line",
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(55, 162, 255)'
          }, {
            offset: 1,
            color: 'rgba(116, 21, 219)'
          }])
        },
        lineStyle: {
          //设置线段样式
          width: 0,
        },
        emphasis: {
          focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式
        },
        data:data.data.chartData.num.Electrical
      },
      {
        name: "数码",
        type: "line",
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(225, 0, 135)'
          }, {
            offset: 1,
            color: 'rgba(135, 0, 157)'
          }])
        },
        lineStyle: {
          //设置线段样式
          width: 0,
        },
        emphasis: {
          focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式
        },
        data:data.data.chartData.num.digit
      },
      {
        name: "装备",
        type: "line",
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255, 191, 255)'
          }, {
            offset: 1,
            color: 'rgba(224, 62, 76)'
          }])
        },
        lineStyle: {
          //设置线段样式
          width: 0,
        },
        emphasis: {
          focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式
        },
        data:data.data.chartData.num.gear
      },
    ]
    })
  })
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 18.75rem;
}
</style>
