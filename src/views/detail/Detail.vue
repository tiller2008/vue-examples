<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: { DetailHeader, DetailBanner }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 115.625rem
</style>
