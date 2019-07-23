<template>
  <div>
    <ul v-if="list.length">
      <template v-for="item of list">
        <li :key="item.id">{{item.name}}</li>
      </template>
    </ul>
    <p v-else>Nothing to show</p>
  </div>
</template>
<!-- 实验template中使用v-for -->
<script>
export default {
  name: 'Template',
  data () {
    return {
      list: [{
        id: 1,
        name: 'bob'
      },
      {
        id: 2,
        name: 'wu'
      }]
    }
  }
}
</script>

<style scoped>

</style>
