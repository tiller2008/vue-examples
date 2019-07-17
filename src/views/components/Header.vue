<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: 2.6875rem
    background: #00BCD4
    color: #FFF
    .header-left
      width: 2rem
      float: left
    .header-input
      flex: 1
      height: 1.9375rem
      line-height: 1.9375rem
      margin-top: .375rem
      margin-left: .625rem
      background: #FFF
      border-radius: .15625rem
      color: #CCC
    .header-right
      width: 3.875rem
      float: right
      text-align: center
</style>
