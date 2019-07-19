<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
                   class="item border-bottom"
                   v-for="item of list"
                   :key="item.id"
                   :to="'/detail/' + item.id">
          <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .625rem
    line-height: 2.5rem
    background: #EEE
    text-indent: .625rem
  .item
    overflow: hidden
    display: flex
    height: 5.9375rem
    .item-img
      width: 5.3125rem
      height: 5.3125rem
      padding: .3125rem
    .item-info
      flex: 1
      padding: .3125rem
      min-width: 0
      .item-title
        line-height: 1.6875rem
        fone-size: 1rem
        ellipsis()
      .item-desc
        line-height: 1.25rem
        color: #CCC
        ellipsis()
      .item-button
        line-height: 1.375
        margin-top: .5rem
        background: #FF9300
        padding: 0 .625rem
        border-radius: .1875rem
        color: #FFF
</style>
