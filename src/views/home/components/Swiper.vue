<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="slide in list" :key="slide.id">
        <img class="swiper-img" :src="slide.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #FFF!important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #EEE
    .swiper-img
      width: 100%
</style>
