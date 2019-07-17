<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '周园',
        desc: '213条评论'
      },{
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
        title: '银杏湖乐园',
        desc: '3431条评论'
      },{
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.44%
    .item-img
      width: 100%
  .item-info
    padding: .3125rem
    .item-title
      line-height: 1.6875rem
      fone-size: 1rem
      ellipsis()
    .item-desc
      line-height: 1.25rem
      color: #CCC
      ellipsis()
</style>
