<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height: 2.25rem
    padding: 0 .3125rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: 1.9375rem
      padding: 0 .3125rem
      line-height: 1.9375rem
      text-align: center
      border-radius: .1875rem
      color: #666
</style>
