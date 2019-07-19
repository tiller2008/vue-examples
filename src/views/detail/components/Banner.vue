<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201309/17/f8ca2f8885c7d329c8d65eac.jpg_600x330_2eb57932.jpg">
      <div class="banner-info">
        <div class="banner-title">周园</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6dd;</span>5</div>
      </div>
    </div>
    <Gallery :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></Gallery>
  </div>
</template>

<script>
import Gallery from 'commons/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201309/17/f8ca2f8885c7d329c8d65eac.jpg_r_800x800_483f4806.jpg', 'http://img1.qunarzz.com/sight/p0/201309/17/73fd0a455eac9e50c8d65eac.jpg_r_800x800_f582de04.jpg']
    }
  },
  components: { Gallery },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .1875rem
      color: #FFF
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: 1rem
        padding: 0 .625rem
      .banner-number
        height: 1rem
        line-height: 1rem
        margin-top: .4375rem
        padding: 0 1.25rem
        border-radius: .625rem
        background: rgba(0, 0, 0, .8)
        font-size: .75rem
        .banner-icon
          font-size: .75rem
</style>
