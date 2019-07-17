<template>
  <div>
    <Header></Header>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
// @ is an alias to /src
export default {
  name: 'home',
  components: { HomeIcons, HomeSwiper, Header }
}
</script>
