<template>
  <div>
    <h2>图表</h2>
    <div class="chart" ref="chartRef">
      图表将渲染在这里
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, inject, reactive, ref } from 'vue'
let $echarts = inject('echarts');
let $axios = inject('axios');
let chartRef = ref(null)
//res必须用来接收
let res = reactive({})
async function getCharData(){
  res = await $axios({url:"/mock/four.json"})
  
}
onMounted(() => {
  getCharData().then(() => {
    //拿到数据res之后,渲染echarts
    let myChart = $echarts.init(chartRef.value);
    console.log('柱状图',res.data.chartData);
    myChart.setOption({
      //提示框组件
      tooltip: {
        trigger: 'axis', //设置触发方式,axis表示坐标轴触发,hover表示鼠标悬停触发
        axisPointer: {
          type: 'shadow',
        }
      },
      legend: {
        data: ['医疗', '服饰', '电子', '数码', '装备'],
        top: 'top',
      },
      grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true //是否包含坐标轴的刻度标签
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
        data: res.data.chartData.day
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#fff' //设置y轴的颜色
          }
        },
        axisLabel: {
          color: '#fff' //设置y轴的文字颜色
        },
        type: 'value'
      },
      series: [
        {
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式,其他的都会相应淡出
          },
          name: "医疗",
          type: "bar",
          data: res.data.chartData.num.Chemicals,
          stack: "total",//数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
          },
          {
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式,其他的都会相应淡出
          },
          name: "服饰",
          type: "bar",
          data: res.data.chartData.num.Clothes,
          stack: "total",//数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
          },
          {
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式,其他的都会相应淡出
          },
          name: "电子",
          type: "bar",
          data: res.data.chartData.num.Electrical,
          stack: "total",//数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
          },
          {
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式,其他的都会相应淡出
          },
          name: "数码",
          type: "bar",
          data: res.data.chartData.num.digit,
          stack: "total",//数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
          },
          {
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series', //设置聚焦样式,当鼠标悬停在数据项上时,会显示一个聚焦样式,其他的都会相应淡出
          },
          name: "装备",
          type: "bar",
          data: res.data.chartData.num.gear,
          stack: "total",//数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
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
