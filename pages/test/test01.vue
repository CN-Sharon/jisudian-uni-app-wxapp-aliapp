<template>
  <view>
    <view class="page-body">
      <map style="width: 100%;height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="covers">
      </map>
    </view>
  </view>
</template>

<script>
  export default {
      data() {
        return {
          id:0, // 使用 marker点击事件 需要填写id
          title: 'map',
          latitude: 22.55,
          longitude: 114.05,
          covers: [{
              latitude: 22.55,
              longitude: 114.052,
              iconPath: '../../static/img/weixin.png'
          }, {
              latitude: 39.90,
              longitude: 116.39,
              iconPath: '../../static/img/sinaweibo.png'
          }]
        }
      },
      methods: {
  
      }
  }
</script>

<style>
  .page-body{
    width:100vw;
    height: 100vh;
  }
</style>
