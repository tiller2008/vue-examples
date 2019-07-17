<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #FFF
    .header-left
      width: 2rem
      float: left
      .back-icon
        text-align: center
        font-size: 1.25rem
    .header-input
      flex: 1
      height: 1.9375rem
      line-height: 1.9375rem
      margin-top: .375rem
      margin-left: .625rem
      padding-left: .625rem
      background: #FFF
      border-radius: .15625rem
      color: #CCC
    .header-right
      width: 3.875rem
      float: right
      text-align: center
      color: #FFF
      .arrow-icon
        margin-left: -.125rem
        font-size: .75rem
</style>
