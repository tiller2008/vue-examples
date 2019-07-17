<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #FFF
    background: $bgColor
    font-size: 1rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: 2rem
      font-size: 1.25rem
      color: #FFF
</style>
