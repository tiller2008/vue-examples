<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201309/17/f8ca2f8885c7d329c8d65eac.jpg_200x200_75ec5d17.jpg',
        title: '周园',
        desc: '213条评论'
      },{
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
        title: '银杏湖乐园',
        desc: '3431条评论'
      },{
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1907/df/dfe043ff2829f50ca3.img.jpg_200x200_6de74461.jpg',
        title: '南京海底世界',
        desc: '7343条评论'
      }]
    }
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
