import * as echarts from 'echarts'
export default function initRadar (el, customOptions = {}, echartsRedarOptions = {}) {
  var chartDom = document.querySelector(el)
  var myChart = echarts.init(chartDom)

  console.log(customOptions.backgroundColor);
  var option

  option = {
    ...echartsRedarOptions,
    color: [customOptions.backgroundColor],
    radar: [
      {
        indicator: customOptions.items,
        center: customOptions.center,
        radius: customOptions.radius,
        splitArea: {
          show: false
        }
      }
    ],
    series: [
      {
        // tooltip: {
        //   trigger: 'item'
        // },
        type: 'radar',
        areaStyle: {},
        symbol: 'none',
        lineStyle: {
          color: customOptions.lineColor
        },
        data: [
          {
            value: customOptions.value,
          }
        ]
      }
    ]
  }

  option && myChart.setOption(option)
}