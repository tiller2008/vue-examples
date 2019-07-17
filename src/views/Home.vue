<template>
  <div>
    <Header></Header>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
// @ is an alias to /src
export default {
  name: 'home',
  components: { HomeSwiper, Header }
}
</script>
