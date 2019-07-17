<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票' }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '亲子游' }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '文化古迹' }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        desc: '牛首山' }, {
        id: '0005',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
        desc: '红山森林动物园' }, {
        id: '0006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png',
        desc: '中山陵' }, {
        id: '0007',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f6dda1876c5950d83cc159c8fd522943.png',
        desc: '总统府' }, {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '银杏湖乐园' }, {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '大报恩寺' }, {
        id: '0010',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '南京海底世界' }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 1.375rem
      box-sizing: border-box
      padding: .3125rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      margin-top: .3125rem
      left: 0
      right: 0
      bottom: 0
      height: 1.375rem
      line-height: 1.375rem
      text-align: center
      font-size: .9rem
      ellipsis()
      color: $darkTextColor
</style>
