<template>
  <div>
    <Header></Header>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
// @ is an alias to /src
export default {
  name: 'home',
  components: { Weekend, Recommend, HomeIcons, HomeSwiper, Header }
}
</script>
