<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6dd;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <Gallery :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></Gallery>
    </FadeAnimation>
  </div>
</template>

<script>
import Gallery from 'commons/gallary/Gallary'
import FadeAnimation from 'commons/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: { Gallery, FadeAnimation },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  mounted () {
    console.log(this.bannerImgs)
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
