<template>
  <div>
    <p>props: {{masFromFather}}</p>
    <span>$emit: &nbsp;&nbsp;</span>
    <button @click="returnBackFun">点击我</button>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  props: {
    masFromFather: ''
  },
  data () {
    return {
      msg: '我是子组件1的数据'
    }
  },
  methods: {
    returnBackFun: function () {
      this.$emit('returnBack', this.msg)
    }
  }
}
</script>

<style scoped>

</style>
