<template>
  <div>
    <Button @click="handleShow">显示对话框</Button>
    <Modal v-model="show"
           title="测试Form-Create嵌入Modal对话框"
           :footer-hide="true"
           :styles="{width: 'fit-content','z-index': 'auto'}">
      <div style="max-width: 640px">
        <form-create :rule="rule" :option="option"></form-create>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'TestFormCreate',
  data () {
    return {
      option: {
        // submitBtn: false
        onSubmit: (...arg) => this.onSubmit(...arg)
      },
      rule: [],
      show: false,
      formData: {}
    }
  },
  methods: {
    getRule () {
      fetch('http://file.lotkk.com/json-form2.json')
        .then(res => res.json())
        .then(rule => {
          this.rule = rule
        })
    },
    onSubmit (formData) {
      console.log(formData)
      alert(JSON.stringify(formData))
    },
    handleShow () {
      this.show = true
    }
  },
  mounted () {
    this.getRule()
  }
}
</script>

<style scoped>
  @import url("//cdn.jsdelivr.net/npm/iview/dist/styles/iview.css");
  /*>>> .ivu-modal-body {*/
  /*  !*position: relative;*!*/
  /*  max-height: 400px;*/
  /*  overflow-y: scroll;*/
  /*}*/
</style>
