<template>
  <div>
    <Header></Header>
    <HomeSwiper :list="SwiperList"></HomeSwiper>
    <HomeIcons :list="IconList"></HomeIcons>
    <Recommend :list="RecommendList"></Recommend>
    <Weekend :list="WeekendList"></Weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
// @ is an alias to /src
export default {
  name: 'home',
  components: { Weekend, Recommend, HomeIcons, HomeSwiper, Header },
  data () {
    return {
      lastCity: '',
      SwiperList: [],
      IconList: [],
      RecommendList: [],
      WeekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.SwiperList = data.swiperList
        this.IconList = data.iconList
        this.RecommendList = data.recommendList
        this.WeekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
