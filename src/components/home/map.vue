<template>
  <!-- 放置地图容器 -->
  <div class="map" ref="map"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 引入echarts
import * as echarts from 'echarts'

// 引入中国地图数据
import chinaJSON from '@/assets/china'

// 获取地图DOM元素
let map = ref()

// 注册中国地图
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  let myMap = echarts.init(map.value)
  //设置配置项
  myMap.setOption({
    title: {
      text: '中国省份点亮进度',
      subtext: '省份里去过一个城市旅游就点亮一个省份',
      left: 'center',
      top: '10%',
    },
    visualMap: {
      type: 'piecewise',
      splitNumber: 2,
      pieces: [
        { label: '已点亮', value: 1 },
        { label: '未点亮', value: 0 },
      ],
      left: '10%',
      bottom: '10%',
      inRange: {
        color: ['#ffffff', '#4475E9'],
      },
      calculable: true,
    },
    tooltip: {
      show: true,
      padding: [10, 20, 10, 20],
      formatter: '暂无',
    },
    series: [
      {
        type: 'map',
        map: 'china',
        data: [
          {
            name: '河南',
            value: true,
            tooltip: {
              show: true,
              formatter: '郑州<br />洛阳<br />开封<br />许昌<br />焦作<br />登封',
            },
          },
          { name: '北京', value: 1, tooltip: { show: true, formatter: '北京' } },
          { name: '浙江', value: 1, tooltip: { show: true, formatter: '杭州' } },
          { name: '江西', value: 1, tooltip: { show: true, formatter: '南昌<br />萍乡' } },
          { name: '广东', value: 1, tooltip: { show: true, formatter: '广州<br />佛山' } },
          { name: '云南', value: 1, tooltip: { show: true, formatter: '丽江' } },
          { name: '四川', value: 1, tooltip: { show: true, formatter: '成都' } },
          { name: '湖北', value: 1, tooltip: { show: true, formatter: '武汉<br />黄石' } },
          { name: '山西', value: 1, tooltip: { show: true, formatter: '晋中' } },
          { name: '江苏', value: 1, tooltip: { show: true, formatter: '连云港' } },
          { name: '陕西', value: 1, tooltip: { show: true, formatter: '西安' } },
          { name: '天津', value: 0 },
          { name: '上海', value: 0 },
          { name: '安徽', value: 0 },
          { name: '山东', value: 0 },
          { name: '湖南', value: 0 },
          { name: '福建', value: 0 },
          { name: '广西', value: 0 },
          { name: '海南', value: 0 },
          { name: '新疆', value: 0 },
          { name: '西藏', value: 0 },
          { name: '宁夏', value: 0 },
          { name: '香港', value: 0 },
          { name: '澳门', value: 0 },
          { name: '台湾', value: 0 },
          { name: '吉林', value: 0 },
          { name: '辽宁', value: 0 },
          { name: '河北', value: 0 },
          { name: '甘肃', value: 0 },
          { name: '青海', value: 0 },
          { name: '贵州', value: 0 },
          { name: '重庆', value: 0 },
          { name: '内蒙古', value: 0 },
          { name: '黑龙江', value: 0 },
        ],
      },
    ],
    // emphasis: {
    //   disabled: true,
    // },
    select: {
      disabled: true,
    },
  })
  myMap.on('click', params => {
    console.log(params.value)
  })
})
</script>

<style scoped lang="less">
.map {
  width: 100%;
  height: 100%;
}
</style>
