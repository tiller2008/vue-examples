<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
      :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #CCC
    &:after
      border-color: #CCC
  .border-bottom
    &:before
      border-color: #CCC
    &:after
      border-color: #CCC
  .list
    overflow: hidden
    position: absolute
    top: 4.9375rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: 1.6875rem
      background: #EEE
      padding-left: .625rem
      color: #666
      font-size: .8125rem
    .button-list
      overflow: hidden
      padding: .3125rem 1.875rem .3125rem .3125rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .3125rem
          padding: .3125rem 0
          text-align: center
          border: .0625rem solid #CCC
          border-radius: .1875rem
    .item-list
      .item
        line-height: 2.375rem
        padding-left: .625rem
</style>
