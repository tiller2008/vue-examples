<template>
  <div>
    <ul v-if="list.length">
      <template v-for="item of list">
        <li :key="item.id">{{item.name}}</li>
      </template>
    </ul>
    <p v-else>Nothing to show</p>
    <br/>
    <h1 style="font-size: 1.5rem">测试具名插槽：</h1>
    <br/>
    <SubItem>
      <template v-slot:a>
        <p>具名插槽，查找的是名为a的插槽</p>
        <span>h5的标签在F12中的Vue中并不会显示</span>
      </template>
      <template>
        <p>这里没有使用具名插槽，在SubItem中没有&lt;slot&gt;&lt;/slot&gt;时，这里不会显示</p>
        <SubItem>
          <template v-slot:a>
            <p>这是个递归的SubItem</p>
          </template>
        </SubItem>
      </template>
    </SubItem>
  </div>
</template>
<!-- 实验template中使用v-for -->
<script>
import SubItem from './SubItem'
export default {
  name: 'Template',
  components: { SubItem },
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
